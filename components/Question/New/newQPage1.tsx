import React from 'react';
import { Example, Page1Inputs } from './';

export const NewQPage1 = () => {
  return (
    <div className='flex h-full flex-row justify-between'>
      <div className='flex flex-col items-start justify-center p-8'>
        {/* // TODO: Separate into another component */}
        <div className='text-heading flex items-start justify-start'>
          <span className='text-3xl font-normal text-gray-800'>
            Name and description of the question
          </span>
        </div>
        <div className='h-8'></div>
        <Page1Inputs />
      </div>

      <Example>
        <div className='flex w-full flex-col border-b pb-3'>
          <span className='text-heading text-xl text-gray-600'>
            Question Name
          </span>
          <div>
            <span className='text-style font-normal text-gray-600'>
              Smallest Integer
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
                Given an array of integers find out the smallest integer in it.
              </span>

              <span>
                <strong>Inputs:</strong>
              </span>
              <span>First line contains number of test cases.</span>
              <span className='block'>
                In each test case, first line contains n, size of the array, and
                next line contains n space separated integers.
              </span>
              <span>
                <strong>Outputs:</strong>
              </span>
              <span>
                Print minimum integer for each test case in a new line.
              </span>

              <span>
                <strong>Constraints:</strong>
              </span>
              <span>
                <ul>
                  <li>
                    1 {'<='} t {'<='} 100
                  </li>
                  <li>
                    1 {'<='} n {'<='}100
                  </li>
                  <li>
                    -100{'<='} nums[i] {'<='}100
                  </li>
                </ul>
              </span>
            </span>
          </div>
        </div>
      </Example>
    </div>
  );
};
