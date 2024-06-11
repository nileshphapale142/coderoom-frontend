import React from 'react';

export const CourseInfo = () => {
  return (
    <div className='mt-6 w-full overflow-hidden rounded-2 bg-violet-500 '>
      <div className='relative h-60 w-full '>
        <div className='absolute left-0 top-0 h-full w-full bg-cover bg-no-repeat'>
          <div className='absolute left-0 top-0 block h-full w-full opacity-80'></div>
        </div>

        <div className='absolute left-0 right-0 px-6 py-4 text-white'>
          <h1
            className='block overflow-hidden text-ellipsis whitespace-nowrap pr-8 text-4xl 
                  font-medium'
          >
            Course Name comes here
          </h1>
          <div className='my-1 pr-8 text-1375 font-normal leading-7 text-white'>
            Course description goes here
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 px-6 py-4 text-white'>
          <h3
            className='block overflow-hidden text-ellipsis whitespace-nowrap pr-8 text-2xl 
                  font-medium'
          >
            Teacher Name comes here
          </h3>
          <div className='my-1 pr-8 text-1375 font-normal leading-7 text-black'>
            Course Code comes here
          </div>
        </div>
      </div>
    </div>
  );
};
