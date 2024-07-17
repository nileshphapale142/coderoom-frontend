'use client';

import { closeJoinClassPopUp } from '@/Recoil';
import React from 'react';
import { useRecoilState } from 'recoil';

export const CancelJoinClass = () => {
  const [_, setIsClose] = useRecoilState(closeJoinClassPopUp);

  return (
    <div
      className='relative z-0 inline-block min-w-auto cursor-pointer overflow-hidden
              rounded-1 border-0 text-center font-sans text-sm font-medium tracking-[.25px] text-gray-3
              outline-none transition-background delay-100 duration-200 ease-ease'
      onClick={() => setIsClose(true)}
    >
      {/* // TODO: Font family google, sans  */}
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-gray-3 opacity-0'></div>
      <span className='relative flex items-center px-2 py-0'>
        <span className='m-0 inline-block'>Cancel</span>
      </span>
    </div>
  );
};
