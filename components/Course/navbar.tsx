import React from 'react';
import { NavItem } from './';

export const Navbar = ({cid}: {cid:string}) => {
  return (
    <nav className='fixed z-[978] block w-full'>
      <div className='h-[4.05rem]'></div>
      <div
        className='mt-[-.0625rem] h-12 transform-none transition-transform 
      duration-[240ms]'
      >
        <div
          className='border-b-gray-1 float-right flex w-full justify-between
        border-b-[0.0625rem] bg-white transition-[width] ease-bezier0021'
        >
          <div className='overflow-hidden'>
            <div className='screen260.5:ml-18 mx-3 my-0 flex max-w-full whitespace-nowrap'>

              <NavItem name="Home" route={`/c/${cid}`}/>
              <NavItem name="Leaderboard" route={`/c/${cid}/leaderboard`}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};