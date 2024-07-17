'use client';

import React from 'react';

export const SimpleButton = ({
  name,
  action,
}: {
  name: string;
  action: () => void;
}) => {
  return (
    <div className=''>
      <div className='text-style text-white'>
        <button
          className='h-12 w-24 rounded-2 border-none bg-blue-600 px-4
                py-2 opacity-100 transition-opacity hover:opacity-90'
          onClick={() => action()}
        >
          {name}
        </button>
      </div>
    </div>
  );
};
