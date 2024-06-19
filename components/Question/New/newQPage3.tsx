import React from 'react';
import { Page3Inputs, Example } from './';

export const NewQPage3 = () => {
  return (
    <div className='flex flex-row justify-between h-full'>
      <div className='flex flex-col items-start justify-center p-8'>
        {/* // TODO: Separate into another component */}
        <div className='text-heading flex items-start justify-start'>
          <span className='text-3xl font-normal text-gray-800'>Test Cases</span>
        </div>
        <div className='h-8'></div>
        <Page3Inputs />
      </div>

      <Example>
        <div className='mt-4 flex w-full flex-col'>
          <span className='text-heading text-xl text-gray-600'>Test Cases</span>
          <div className='mt-2'>
            <span className='text-style flex flex-col font-normal text-gray-600'>
              <span>Input: nums = [2, 7, 11, 15], target = 9</span>
              <span>Output: [0, 1]</span>
              <span className='mt-2'>
                Input:nums=[-3, 4, 3, 90], target = 0
              </span>
              <span>Output: [0, 2]</span>
            </span>
          </div>
        </div>
      </Example>
    </div>
  );
};
