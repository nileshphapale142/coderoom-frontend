import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const CoderoomIcon = () => {
  return (
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
      <span className='ml-[.625rem]  text-lg font-normal leading-relaxed '>
        {/*// TODO: font-familty: Google Sans and font-size 1.375rem */}
        CodeRoom
      </span>
    </Link>
  );
};
