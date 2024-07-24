import React from 'react';
import Link from 'next/link';
import Shortcut from './shortcut';

interface CourseProps {
  name: string;
  description: string;
  teacher?: string;
  id: number;
}

const CourseBox = ({
  name,
  description,
  id,
  teacher = '',
}: {
  name: string;
  description: string;
  teacher?: string;
  id: number;
}) => {
  return (
    <li
      className='relative mb-6 mr-6 flex w-[18.75rem] cursor-pointer 
                flex-col overflow-hidden rounded-3 
              bg-white bg-clip-padding text-left
                transition-all duration-100 hover:scale-105 hover:shadow-md'
    >
      {/* // * cousrse mini info */}
      <div className='relative'>
        <div className='absolute top-0 h-full w-full bg-gray-600'></div>
        <div className='relative flex h-[6.5rem] flex-col justify-between p-4 pb-3'>
          <Link
            href={`/c/${id}`}
            className='absolute left-0 top-0 h-full w-full cursor-pointer text-white '
          />
          <h2 className='relative flex text-white'>
            <Link
              href={`/c/${id}`}
              className='mx-[-0.25rem] my-0 block cursor-pointer truncate px-1 py-0 
                          text-white no-underline'
            >
              <div className='truncate text-[1.375rem] font-bold leading-7 text-white'>
                {name}
              </div>
              <div className='block truncate'>{description}</div>
            </Link>
          </h2>

          <div className='flex flex-row items-center'>
            <div className='relative block cursor-pointer truncate text-white no-underline'>
              {teacher}
            </div>
          </div>
        </div>
      </div>

      <div className='h-32 min-h-0 flex-grow p-4 pt-3 '>
        <div></div>
      </div>

      <div
        className='flex flex-shrink-0 flex-grow justify-end 
                  border-t-[0.0625rem] border-solid border-t-[#dadce0] p-1 leading-[0]'
      >
        <Shortcut
          imageSrc='https://img.icons8.com/ios-glyphs/30/leaderboard.png'
          imageAlt='leaderboard'
          href={`/c/${id}/leaderboard`}
        />

        {/* <div>
          <Shortcut
            imageSrc='https://img.icons8.com/ios-glyphs/30/conference-call--v1.png'
            imageAlt='People'
            href='enrolledStudents'
          />
        </div> */}
      </div>
    </li>
  );
};

export default CourseBox;
