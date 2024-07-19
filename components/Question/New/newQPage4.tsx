import React from 'react';
import { Page4Inputs, Example } from './';

export const NewQPage4 = () => {
  return (
    <div className='flex h-full flex-row justify-between'>
      <div className='flex w-full flex-col items-start justify-center p-8'>
        {/* // TODO: Separate into another component */}
        <div className='text-heading flex items-start justify-start'>
          <span className='text-3xl font-normal text-gray-800'>
            Example Test Cases
          </span>
        </div>
        <div className='h-8'></div>
        <Page4Inputs />
      </div>
    </div>
  );
};
