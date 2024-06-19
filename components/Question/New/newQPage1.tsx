import React from 'react'
import { Example, Page1Inputs } from './';

export const NewQPage1 = () => {

  return (
    <div className='flex flex-row justify-between h-full'>
      <div className='flex flex-col items-start justify-center p-8'>
        {/* // TODO: Separate into another component */}
        <div className='text-heading flex items-start justify-start'>
          <span className='text-3xl font-normal text-gray-800'>
            Name and description of the question
          </span>
        </div>
        <div className='h-8'></div>
        <Page1Inputs/>
      </div>

      <Example>
        <div className='flex w-full flex-col border-b pb-3'>
          <span className='text-heading text-xl text-gray-600'>
            Questin Name
          </span>
          <div>
            <span className='text-style font-normal text-gray-600'>
              Target Sum
            </span>
          </div>
        </div>
        <div className='mt-4 flex w-full flex-col'>
          <span className='text-heading text-xl text-gray-600'>
            Description
          </span>
          <div>
            <span className='text-style flex flex-col font-normal text-gray-600'>
              <span>
                Given an array of integers, return indices of the two numbers
                such that they add up to a specific target. You may assume that
                each input would have exactly one solution, and you may not use
                the same element twice.
              </span>
              <span className='mt-2'>
                Example: Given nums = [2, 7, 11, 15], target = 9, Because
                nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
              </span>
            </span>
          </div>
        </div>
      </Example>
    </div>
  );
}