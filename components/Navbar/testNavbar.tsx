import React from 'react';
import { OpenProblemListBtn } from '../Buttons';

export const TestNavbar = () => {
  return (
    <nav className='fixed z-[978] block w-full'>
      <div className='h-[4.05rem]'></div>
      <div
        className='mt-[-.0625rem] h-14 transform-none transition-transform 
      duration-[240ms]'
      >
        <div
          className='h-full flex w-full justify-between border-b-[0.0625rem]
        border-b-gray-1 bg-white transition-[width] ease-bezier0021'
        >
          <div className='flex items-center justify-center overflow-hidden'>
            <div className='mx-3 my-0 flex max-w-full items-center whitespace-nowrap screen260.5:ml-8'>
              <div className='h-full flex-shrink-0 '>
                <div className='my-1 rounded-2 hover:bg-gray-200'>
                  <span>
                    <OpenProblemListBtn/>
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
                  <div
                    className='mr-[0.1rem] w-full rounded-bl-2 rounded-tl-2 bg-gray-300 p-2 opacity-100
                  transition-all hover:bg-black hover:text-gray-300'
                  >
                    <button className='flex items-center justify-center'>
                      Run
                    </button>
                  </div>

                  <div
                    className='w-full  rounded-br-2 rounded-tr-2 bg-gray-300 p-2 text-green-600
                  transition-all hover:bg-green-600 hover:text-gray-300'
                  >
                    <button className='flex items-center justify-center'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mr-9 flex flex-row items-center '>
            <div className='flex h-full items-center justify-center p-1'>
              <div
                className='relative flex cursor-default items-center justify-center rounded-2 border 
              bg-gray-200 p-2 '
              >
                <span className='text-style text-normal flex flex-row items-center justify-between text-base'>
                  <span className='p-1'>03</span>
                  <span className='p-1'>:</span>
                  <span className='p-1'>00</span>
                  <span className='p-1'>:</span>
                  <span className='p-1'>00</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
