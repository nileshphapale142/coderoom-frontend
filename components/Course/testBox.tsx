import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const TestBox = () => {
  return (
    <li
      className='relative box-border bg-transparent transition-all duration-300 
                 hover:overflow-hidden hover:rounded-2 hover:shadow-test-box'
    >
      <Link href={"/c/1/t/1"}
      className='absolute top-0 left-0 right-0 bottom-0 h-full z-20' />
      <div
        className='relative z-0 box-border flex h-15 
                  cursor-pointer flex-row items-center border-b-[0.0625rem] border-solid border-transparent 
                  border-b-gray transition-all duration-300 hover:border-none
                  hover:bg-white'
      >
        {/* // TODO:  add color to this div if required */}
        <div
          className='ml-6 mr-4 flex h-9 w-9 shrink-0 items-center justify-center
            rounded-full fill-white text-center text-base leading-8 text-white'
        >
          <Image
            src='https://img.icons8.com/ios-filled/50/test-partial-passed.png'
            width='24'
            height='24'
            alt='Test icon logo'
          />
        </div>

        <div className='flex h-full w-calc-33 flex-row items-center'>
          <div className='flex min-w-0 flex-51 flex-col'>
            <div className='text-style flex-row-container w-full text-gray-700'>
              <span className='block overflow-hidden text-ellipsis whitespace-nowrap'>
                Test name comes here
              </span>
            </div>
          </div>

          <span className='ml-4 min-w-0 flex-20 text-sm font-normal leading-4 tracking-wide'>
            <div className='text-wrapping w-full'></div>
          </span>

          <div
            className='text-style-1 text-wrapping ml-4 mr-[-.25rem] box-border 
                                    min-w-0 flex-30 pr-1 text-right text-black-3'
          >
            Test date and time
          </div>
        </div>
      </div>
    </li>
  );
};
