import React from 'react';

const Loading = () => {
  return (
    <div className='google-bw-bg fixed h-screen w-full'>
      {/* Header skeleton */}
      <div className='flex items-center justify-between border-b-[0.0625rem]'>
        <div className='h-16 w-full animate-pulse rounded bg-white'></div>
      </div>

      {/* Course cards skeleton */}
      <ol className='flex flex-wrap pl-6 pt-6'>
        {[...Array(8)].map((_, index) => (
          <li
            key={index}
            className='relative mb-6 mr-6 flex w-[18.75rem]
                              flex-col overflow-hidden 
                            rounded-3 bg-white'
          >
            {/* // * cousrse mini info */}
            <div className='relative'>
              <div className='absolute top-0 h-full w-full animate-pulse bg-gray-300'></div>
              <div className='relative flex h-[6.5rem] flex-col justify-between p-4 pb-3'>
                <div className='absolute left-0 top-0 h-full w-full  '></div>
                <h2 className='relative flex'>
                  <div
                    className='mx-[-0.25rem] my-0 block px-1 py-0 
                                       '
                  >
                    <div className=''></div>
                    <div className='block '></div>
                  </div>
                </h2>

                <div className='flex flex-row items-center'>
                  <div className='relative block '></div>
                </div>
              </div>
            </div>

            <div className='h-32 min-h-0 flex-grow animate-pulse bg-white p-4 pt-3'>
              <div></div>
            </div>

            <div
              className='flex flex-shrink-0 flex-grow justify-end 
                  border-t-[0.0625rem] border-solid border-t-[#dadce0] p-1 leading-[0]'
            >
              <div className='inline-block h-12 w-full animate-pulse bg-white'></div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Loading;
