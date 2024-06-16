import React from 'react';
import { NavItem } from './';

interface Item {
  name: string;
  route: string;
}

interface secondNavProps {
  navItems: Item[];
}

export const SecondNavbar = ({ navItems }: secondNavProps) => {
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
          <div className='overflow-hidden'>
            <div className='mx-3 my-0 flex max-w-full whitespace-nowrap screen260.5:ml-18'>
              {navItems.map((item, idx) => (
                <NavItem key={idx} name={item.name} route={item.route} />
              ))}
              {/* <NavItem name='Home' route={`/c/${id}`} />
              <NavItem name='Leaderboard' route={`/c/${id}/leaderboard`} /> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
