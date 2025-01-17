'use client';

import React from 'react';
import { useClickOutside } from '../Hooks';

//todo: think about having id again
interface Option {
  id: number;
  name: string;
}

export const MyDropDown = ({
  options,
  title,
  selectHandler,
  defaultValue = { name: 'Select', id: -1 },
  isAbsolute = false,
}: {
  options: Option[];
  title: string;
  selectHandler: (arg: string) => void;
  defaultValue?: Option;
  isAbsolute?: boolean;
}) => {
  const [selected, setSelected] = React.useState<Option>(defaultValue);
  // console.log(selected);

  const [isOptionsVisible, setIsOptionsVisible] =
    React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    selectHandler(option.name);
  };

  useClickOutside(ref, () => setIsOptionsVisible(false));

  return (
    <div
      className='text-style relative flex h-auto flex-col  items-center
    justify-center rounded-2 font-normal text-gray-600 hover:bg-gray-200'
    >
      <button
        className='flex w-full flex-row justify-between p-1'
        onClick={() => setIsOptionsVisible((prev) => !prev)}
        id='dropdown'
      >
        <span className='flex justify-center px-1'>{selected.name}</span>
        <div className='flex items-center justify-center'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='far'
            data-icon='chevron-down'
            role='img'
            width={'15'}
            height={'15'}
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z'
            ></path>
          </svg>
        </div>
      </button>

      <div
        className={
          `left-0 z-50 mt-1 flex rounded-2 border-none
          bg-white p-1 outline-none transition-transform duration-200 ease-linear ` +
          (isOptionsVisible ? ' visible scale-100 ' : ' hidden scale-0 ') +
          (isAbsolute ? ' absolute  top-full ' : ' relative top-0 ')
        }
        ref={ref}
      >
        <div className='relative min-w-40 p-2 '>
          <div className='flex flex-col '>
            {options.map((option, idx) => (
              <div
                key={idx}
                className='flex h-8 cursor-pointer flex-row rounded-2 border-none
            hover:bg-gray-200'
                id={'option' + option.id.toString()}
                onClick={() => {
                  handleSelect(option);
                  setIsOptionsVisible(false);
                }}
              >
                <div className='flex w-10 items-center justify-center'>
                  {option.name.toLowerCase() === selected.name.toLowerCase() ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='1em'
                      height='1em'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  ) : (
                    <></>
                  )}
                </div>
                <div className='flex items-center justify-start'>
                  {option.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
