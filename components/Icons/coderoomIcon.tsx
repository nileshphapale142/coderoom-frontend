import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const CoderoomIcon = () => {
  return (
    <div className='flex-grow navbar:min-w-0 navbar:flex-navbar'>
      <div className='flex h-16 flex-row items-center pl-10'>
        <h1 className='flex max-w-full flex-row justify-start overflow-hidden'>
          <Link
            href='/'
            className='flex cursor-pointer items-center transition-colors duration-200 hover:text-green-800 hover:underline'
          >
            <Image
              src={'https://img.icons8.com/ios-filled/50/source-code.png'}
              alt='logo'
              width='30'
              height='30'
            />
            <span className='ml-[.625rem]  font-normal leading-relaxed'>
              {/*// TODO: font-familty: Google Sans and font-size 1.375rem */}
              CODEROOM
            </span>
          </Link>
        </h1>
      </div>
    </div>
  );
};
