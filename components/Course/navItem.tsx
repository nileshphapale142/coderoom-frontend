'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavItem = ({ name, route }: { name: string; route: string }) => {
  const path = usePathname();

  return (
    <div className='h-full flex-shrink-0'>
      <Link
        href={`${route}`}
        className={
          'text-style relative box-border flex ' +
          ' h-12 items-center border-b-[.125rem] border-solid border-b-transparent ' +
          ' px-6 pb-0 pt-[.125rem] transition-background duration-200 ' +
          (path === route
            ? ' fill-gray-600  text-gray-500 hover:cursor-pointer hover:bg-gray-200 '
            : ' fill-gray-500 text-gray-500 hover:cursor-pointer hover:text-black-4')
        }
      >
        {name}
        {path === route ? (
          <span
            className='border-gray-500 absolute bottom-[-.125rem] left-0 right-0
                  rounded-b-0 rounded-t border-t-[.25rem] border-solid'
          ></span>
        ) : (
          <></>
        )}
      </Link>
    </div>
  );
};
