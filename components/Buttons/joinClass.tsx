'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';
import { validCourseCodeState } from '@/Recoil';

export const JoinClass = () => {
  const valid = useRecoilValue(validCourseCodeState)

  const style =
    valid
      ? ' text-blue-600 cursor-pointer fill-blue-600 '
      : ' text-black-1 cursor-default fill-black-1 ';

  const bg = valid ? ' text-blue-600 ' : ' text-black-1 '

  return (
    <div
      className={ 'relative z-0 ml-2 inline-block min-w-auto  overflow-hidden rounded-1 border-0 ' 
           + ' text-center font-sans text-sm font-bold tracking-[.25px] shadow-none '
           + ' outline-none transition-background delay-100 duration-200 ease-ease ' + style }
    >
      <div className={'absolute bottom-0 left-0 right-0 top-0 opacity-0 ' + bg}></div>
      <span className='relative flex items-center px-2 py-0'>
        <span className='m-0 inline-block'>Join</span>
      </span>
    </div>
  );
};
