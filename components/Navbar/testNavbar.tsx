'use client';

import React from 'react';
import { CourseNavFiller } from '../Utils';

export const TestNavbar = () => {
  return (
    <nav className='fixed z-[978] block w-full'>
      <div className='h-[4.05rem]'></div>
      <div
        className='mt-[-.0625rem] h-12 transform-none transition-transform 
      duration-[240ms]'
      >
        <div
          className='float-right flex w-full justify-between border-b-[0.0625rem]
        border-b-gray-1 bg-white transition-[width] ease-bezier0021'
        >
          <div className='flex items-center justify-center overflow-hidden'>
            <div className='mx-3 my-0 flex max-w-full items-center whitespace-nowrap screen260.5:ml-8'>
              <div className='h-full flex-shrink-0 '>
                <div className='my-1 rounded-2 hover:bg-gray-200'>
                  <span>
                    <button
                      className='relative z-0 box-border flex h-12 cursor-pointer flex-row
                    items-center justify-center overflow-visible border-none 
                    bg-transparent fill-gray-600 p-3 text-2xl text-gray-3 outline-none
                    will-change-t-o '
                    >
                      <span>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          focusable='false'
                          className='h-6 w-6'
                        >
                          <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
                        </svg>
                      </span>

                      <span className='text-style p-2 text-lg font-semibold'>
                        <div className='relative flex items-center justify-center'>
                          <div className='w-full'>
                            <div>
                              <span>Problem List</span>
                            </div>
                          </div>
                        </div>
                      </span>
                    </button>
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
                  <div className='mr-[0.1rem] opacity-100 w-full rounded-bl-2 rounded-tl-2 bg-gray-300 p-2
                  hover:bg-black hover:text-gray-300 transition-all'>
                    <button>Run</button>
                  </div>

                  <div className='rounded-br-2  w-full rounded-tr-2 bg-gray-300 p-2 text-green-600
                  hover:bg-green-600 hover:text-gray-300 transition-all'>
                    <button>Submit</button>
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
