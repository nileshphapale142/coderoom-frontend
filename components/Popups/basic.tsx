'use client';

import React from 'react';
import { Cancel, Join } from '../Buttons';
import { useRecoilState } from 'recoil';
import { isBasicPopUpOpen } from '@/Recoil';
import { useClickOutside } from '../Hooks';

export const BasicPopUp = ({
  children,
  title,
  isJoinValid,
  joinBtnName,
  onClickHandler,
}: {
  children: React.ReactNode;
  title: string;
  isJoinValid: () => boolean;
  joinBtnName: string;
  onClickHandler: () => void;
}) => {
  const [isOpen, setIsOpen] = useRecoilState(isBasicPopUpOpen);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleCancel = () => {
    setIsOpen(false);
  };

  useClickOutside(ref, () => setIsOpen(false));

  return (
    // TODO: Add transition to open and close
    !isOpen ? (
      <></>
    ) : (
      <div
        className={
          'fixed bottom-0 left-0 right-0 top-0 z-[1191] bg-[rgba(0,0,0,.5)] transition-opacity duration-[50ms] '
        }
      >
        <div
          className='absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center px-[5%] py-0 
      transition-transform duration-[.4s]'
        >
          <div className='block h-20 flex-grow'></div>

          <div
            ref={ref}
            className='relative flex max-h-full w-[544px] max-w-full flex-shrink flex-col items-stretch 
        overflow-hidden rounded-2 bg-white shadow-custom transition-transform duration-[.225s] 
        ease-bezier0021'
          >
            <div className='flex flex-shrink text-lg font-medium leading-6 tracking-[0.1px]'>
              <div className='mx-6 mb-4 mt-[18px] min-w-0 flex-shrink flex-grow text-nowrap'>
                {title}
              </div>
            </div>

            {children}

            <div className='flex flex-shrink-0 justify-end pb-4 pl-6 pr-2 pt-4 leading-0'>
              <Cancel handleOnClick={handleCancel} />

              <Join
                name={joinBtnName}
                isValid={isJoinValid}
                onClickHandler={onClickHandler}
              />
            </div>
          </div>

          <div className='block h-20 flex-grow'></div>
        </div>
      </div>
    )
  );
};
