'use client';

import { isProblemListOpen } from '@/Recoil';
import React from 'react';
import { useRecoilState } from 'recoil';

export const OpenProblemListBtn = () => {
  const [_, setIsOpen] = useRecoilState(isProblemListOpen);

  return (
    <button
      className='relative z-0 box-border flex h-12 cursor-pointer flex-row
                items-center justify-center overflow-visible border-none 
                bg-transparent fill-gray-600 p-3 text-2xl text-gray-3 outline-none
                will-change-t-o '
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <span>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          focusable='false'
          className='h-6 w-6'
        >
          <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
        </svg>
      </span>

      <span className='text-style p-2 text-lg font-semibold'>
        <div className='relative flex items-center justify-center'>
          <div className='w-full'>
            <div>
              <span>Problem List</span>
            </div>
          </div>
        </div>
      </span>
    </button>
  );
};
