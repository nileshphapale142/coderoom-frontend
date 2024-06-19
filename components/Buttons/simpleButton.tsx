'use client'

import React from 'react';

export const SimpleButton = ({name,action}:{name:string, action: () => void}) => {
  return (
    <div className=''>
      <div className='text-style text-white'>
        <button
          className='h-12 w-24 rounded-2 border-none bg-blue-600 opacity-100
                px-4 py-2 hover:opacity-90 transition-opacity'
                onClick={() => action()}
        >
          {name}
        </button>
      </div>
    </div>
  );
};
