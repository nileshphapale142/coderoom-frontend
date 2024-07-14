'use client';

import { isBasicPopUpOpen } from '@/Recoil';
import React from 'react';
import { useRecoilState } from 'recoil';
import { usePathname } from 'next/navigation';

export const PlusButton = () => {
  const path = usePathname();

  const [_, setOpen] = useRecoilState(isBasicPopUpOpen);
  return path === '/' ? (
    <button
      className='relative z-0 m-[-12px] block h-12 
                w-12 cursor-pointer overflow-visible border-none bg-transparent 
                fill-current p-[12px] outline-none will-change-transform'
      onClick={() => setOpen(true)}
    >
      <span>
        <svg
          className='h-6 w-6 flex-shrink-0 fill-current'
          focusable='false'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z'></path>
        </svg>
      </span>
    </button>
  ) : (
    <></>
  );
};
