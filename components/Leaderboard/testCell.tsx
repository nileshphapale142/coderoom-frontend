import React from 'react';
import Link from 'next/link';

export const TestCell = ({
  name,
  link,
  date,
  outof,
}: {
  name: string;
  link: string;
  date: string;
  outof: string;
}) => {
  return (
    <th className='relative z-2 h-full p-0'>
      <div className='table-box w-[8.0625rem] px-4 py-3 text-left'>
        <div className='flex pb-1'>
          <div className='min-w-0 flex-auto'>
            <div className='text-wrapping text-style-1  text-gray-500'>
              {date}
            </div>
            <Link
              href={link}
              className='text-style hover:undelin line-clamp-2 h-10
                         overflow-hidden text-ellipsis text-gray-600'
            >
              {name}
            </Link>
          </div>
        </div>
        <div className='text-style-1'>
          <span className='block border-t-0625 border-solid border-t-gray-1 pb-1'></span>
          <div>Out of {outof}</div>
        </div>
      </div>
    </th>
  );
};
