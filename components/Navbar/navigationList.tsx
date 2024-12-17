import React from 'react';
import { CoderoomIcon } from '../Icons';
import { NavItems } from './';

export const NavigationList = () => {
  return (
    <div className='flex-grow navbar:min-w-0 navbar:flex-navbar'>
      <div className='flex h-16 flex-row items-center pl-10'>
        <h1 className='flex max-w-full flex-row justify-normal overflow-hidden'>
          <CoderoomIcon />

          <NavItems />
        </h1>
      </div>
    </div>
  );
};
