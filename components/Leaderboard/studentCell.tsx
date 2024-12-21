import React from "react";
import Link from "next/link";


export const StudentCell = ({ name, link }: { name: string; link: string }) => {
  return (
    <th className='relative z-1 h-full translate-x-0 p-0'>
      <div
        className='table-box box-border flex 
                flex-row items-center justify-between'
      >
        <div className='flex flex-row items-center py-0 pl-6 pr-2'>
          <Link
            href={link}
            className='text-style text-wrapping 
        max-w-47.5 text-gray-500 hover:text-gray-600 hover:underline'
          >
            {name}
          </Link>
        </div>
      </div>
    </th>
  );
};