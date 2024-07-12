'use client';

import React from 'react';

export const CloseBtn = ({ action }: { action: () => void }) => {
  return (
    <button
      className='z-2 h-10
                w-10 cursor-pointer rounded-full border border-solid border-transparent 
                bg-none p-2 text-gray-4 outline-0 '
      onClick={action}
    >
      <svg
        className='fill-current'
        width='22'
        height='22'
        viewBox='1 1 22 22'
        focusable='false'
      >
        <path
          d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 
            6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'
        ></path>
      </svg>
    </button>
  );
};
