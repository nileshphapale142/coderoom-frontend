'use client';

import React, { useState } from 'react';
import { NewQPage1, NewQPage2, NewQPage3 } from './';
import { SimpleButton } from '@/components/Buttons';

export const NewQuestion = () => {
  const [pageNo, setPageNo] = useState(0);

  const pages: React.ReactNode[] = [
    <NewQPage1 />,
    <NewQPage2 />,
    <NewQPage3 />,
  ];

  const incrementPageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  const decrementPageNo = () => {
    setPageNo((prev) => prev - 1);
  };

  //TODO: rethink  on what inputs to be taken for new question especially template code and test cases

  return (
    <div className='relative left-0 top-0 block bg-[#f0f4f9]'>
      <div className='relative mx-auto my-0 flex w-calc-24r max-w-70r flex-col px-4 py-6'>
        <div
          className='relative mt-4 flex h-30r w-full  flex-col rounded-7
                border-none bg-white'
        >
          {pages[pageNo]}
        </div>

        <div className='mt-5 flex w-full flex-grow items-center justify-center'>
          <div className='flex w-1/2 flex-row items-center justify-evenly p-4'>
            {pageNo != 0 && (
              <SimpleButton name={'Back'} action={decrementPageNo} />
            )}

            {pageNo !== pages.length - 1 ? (
              <SimpleButton name={'Next'} action={incrementPageNo} />
            ) : (
              <SimpleButton name={'Submit'} action={() => {}} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
