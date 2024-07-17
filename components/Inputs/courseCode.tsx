'use client';

import { courseCodeInput } from '@/Recoil';
import { isValidCourseCode } from '@/Utils';
import React from 'react';
import { useRecoilState } from 'recoil';

export const CourseCode = () => {
  const [inputClick, setInputClick] = React.useState(false);
  const [state, setState] = React.useState('normal');
  const [inputValue, setInputValue] = useRecoilState(courseCodeInput);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setInputClick(inputValue.length !== 0);
      if (inputValue.length === 0) setState('normal');
    }
  };

  const handleFocus = () => {
    setInputClick(true);
    setState((prev) => (prev === 'danger' ? 'danger' : 'good'));
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputValue]);

  React.useEffect(() => {
    if (inputClick) {
      const validInput = isValidCourseCode(inputValue);

      if (!validInput) setState('danger');
      else setState('good');
    }
  }, [inputValue]);

  const color =
    state === 'normal' ? 'gray-600' : state === 'danger' ? 'red-500' : 'blue-1';

  const normalStyle = `border border-${color}`;
  const clickedStyle = `border-2 border-${color}`;

  const normalStyleMainDiv = `w-auto border-b border-t border-${color}`;
  const clickedStyleMainDiv = `border-${color} border-b-2 w-[73.25px] pt-[2px] border-t-0 pr-2`;

  const normalStyleMain = `text-${color} transform -translate-y-1/2`;
  const clickedStyleMain = `text-${color} translate-y-[-34.75px] scale-75 text-clip leading-4.6 max-w-[140.333%]`;

  return (
    <div className='relative inline-flex w-80 max-w-full flex-col'>
      <label
        className='relative box-border h-[56px] items-baseline overflow-visible rounded-t py-0 pl-4 
pr-4 will-change-t-o-c '
      >
        <span
          className='pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-[1] box-border flex h-full
w-full max-w-full text-left '
        >
          <span
            className={
              'pointer-events-none box-border h-full w-3 rounded-bl rounded-tl border-r-0 border-solid ' +
              (inputClick ? clickedStyle : normalStyle)
            }
          ></span>

          <span
            className={
              'pointer-events-none box-border h-full max-w-calc-3 flex-0-auto ' +
              ' border-solid ' +
              (inputClick ? clickedStyleMainDiv : normalStyleMainDiv)
            }
          >
            <span
              className={
                'pointer-events-none relative left-1 right-auto top-1/2 inline-block origin-top-left ' +
                ' cursor-text overflow-hidden text-ellipsis text-nowrap text-left ' +
                ' text-base font-normal tracking-very-sm transition-transform duration-150 ease-navbar-bezier ' +
                ' will-change-transform ' +
                (inputClick ? clickedStyleMain : normalStyleMain)
              }
            >
              Class Code
            </span>
          </span>

          <span
            className={
              'pointer-events-none box-border h-full w-3 flex-grow rounded-br rounded-tr border-l-0 border-solid ' +
              (inputClick ? clickedStyle : normalStyle)
            }
          ></span>
        </span>

        <input
          ref={inputRef}
          className='round-0 flex h-full w-full min-w-0 appearance-none border-none bg-transparent 
bg-none p-0 text-base font-normal tracking-very-sm text-gray-2 caret-blue-1 transition-opacity duration-150 focus:outline-none'
          onFocus={handleFocus}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>

      <div className='box-border flex justify-between px-4'>
        <p
          className={
            'm-0 mb-0 block text-xs font-normal leading-875 tracking-wide ' +
            ' text-red-500 transition-opacity will-change-opacity ' +
            (state === 'danger' ? ' pr-4 opacity-100' : ' opacity-0')
          }
        >
          <span className='inline-block h-4 w-0'></span>
          {state === 'danger'
            ? 'Class codes are 5-7 characters including letters and numbers, and no spaces or symbols'
            : ''}
        </p>
      </div>
    </div>
  );
};
