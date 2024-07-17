'use client';

import React from 'react';
import { BasicInput } from '@/components/Inputs';

export const Page1Inputs = () => {
  const inputHanlde = (input: string) => {};

  return (
    <>
      <div className='text-style flex flex-col items-start justify-start'>
        <span className='text-xl font-semibold text-gray-600'>
          Question Name*
        </span>
        <div className='py-2 '>
          <BasicInput
            title='Question Name'
            inputHandler={inputHanlde}
            width={'30rem'}
          />
        </div>
      </div>
      <div className='text-style flex flex-grow flex-col items-start justify-start'>
        <span className='text-xl font-semibold text-gray-600'>
          Question Description*
        </span>
        <div className='mt-2 flex h-auto w-40r flex-grow overflow-y-auto overflow-x-hidden'>
          {/* //TODO: onclick border chagnae not hover */}
          <div
            className='border-gray-600 relative flex w-full flex-grow items-start 
                          justify-start overflow-y-auto overflow-x-hidden rounded-2 border border-solid hover:border-2 hover:border-blue-1'
          >
            {/* //TODO: separate component for text area */}
            <textarea
              className='h-100% text-style h-full w-full border-none p-2 
                            font-normal leading-6 text-gray-700'
            />
          </div>
        </div>
      </div>
    </>
  );
};
