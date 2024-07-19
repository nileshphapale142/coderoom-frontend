import React from 'react';
import { OpenProblemListBtn } from '../Buttons';
import { SubmitBtn } from '../Question/Solve/Execution/submit';
import { RunBtn } from '../Question/Solve/Execution/run';
import { Clock } from '../Question/Solve/clock';

export const TestNavbar = ({ qid }: { qid: number }) => {
  return (
    <nav className='fixed z-[978] block w-full'>
      <div className='h-[4.05rem]'></div>
      <div
        className='mt-[-.0625rem] h-14 transform-none transition-transform 
      duration-[240ms]'
      >
        <div
          className='flex h-full w-full justify-between border-b-[0.0625rem]
        border-b-gray-1 bg-white transition-[width] ease-bezier0021'
        >
          <div className='flex items-center justify-center overflow-hidden'>
            <div className='mx-3 my-0 flex max-w-full items-center whitespace-nowrap screen260.5:ml-8'>
              <div className='h-full flex-shrink-0 '>
                <div className='my-1 rounded-2 hover:bg-gray-200'>
                  <span>
                    <OpenProblemListBtn />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='mr-9 flex flex-row items-center '>
            <div className='flex items-center justify-center'>
              <div className='relative flex cursor-default items-center justify-center p-1 '>
                <div
                  className='text-style text-normal flex flex-row items-center justify-between 
                rounded-2 border-none py-1 text-base '
                >
                  <RunBtn />

                  <SubmitBtn qid={qid} />
                </div>
              </div>
            </div>
          </div>

          <div className='mr-9 flex flex-row items-center '>
            <div className='flex h-full items-center justify-center p-1'>
              <Clock />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
