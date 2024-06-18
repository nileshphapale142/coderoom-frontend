import React from 'react';
import { Example } from './example';
import { Page2Inputs } from './page2Inputs';
import { CodeBlock } from '@/components/Utils';

export const NewQPage2 = () => {
  const exampleCode = `
class Solution(object): 
  def twoSum(self, nums, target):
    match = {}
    for idx, n in enumerate(nums): 
      if n not in match:
        match[target - n] = idx 
      else: 
        return match[n], idx 
    return -1, -1
  `;

  return (
    <div className='flex flex-row justify-between h-full'>
      <div className='flex flex-col items-start justify-center p-8'>
        {/* // TODO: Separate into another component */}
        <div className='text-heading flex items-start justify-start'>
          <span className='text-3xl font-normal text-gray-800'>Solution</span>
        </div>
        <div className='h-8'></div>
        <Page2Inputs />
      </div>

      <Example>
        <div className='mt-4 flex w-full flex-col'>
          <span className='text-heading text-xl text-gray-600'>
            Code (Python)
          </span>
          <div>
            <span className='text-style flex flex-col font-normal text-gray-600'>
              <span className='mt-2 rounded-7 border-none'>
                <CodeBlock language='Python' value={exampleCode} />
              </span>
            </span>
          </div>
        </div>
      </Example>
    </div>
  );
};
