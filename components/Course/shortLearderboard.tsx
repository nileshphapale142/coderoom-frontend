import React from 'react';
import Link from 'next/link';

export const ShortLearderboard = () => {
  return (
    <div className='relative m-[-1rem] ml-0 overflow-hidden p-4'>
      <div className='box-border rounded-2 border border-gray p-4 pt-0'>
        <div>
          <div className=' flex h-12 min-w-0 items-center justify-start'>
            <h1 className='text-style text-xl'>Leaderboard</h1>
          </div>
          <div className='flex flex-col items-center justify-start'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400'>
                <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='dark:border-gray-700 border-b bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                    >
                      Adam Warlock -1
                    </th>
                    <td className='px-6 py-4'>100</td>
                  </tr>
                  <tr className='dark:border-gray-700 border-b bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                    >
                      Adam Warlock -2
                    </th>
                    <td className='px-6 py-4'>99</td>
                  </tr>
                  <tr className='border-b bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                    >
                      Adam Warlock -3
                    </th>
                    <td className='px-6 py-4'>98</td>
                  </tr>
                </tbody>
              </table>
              <div
                className='dark:border-gray-700 relative flex h-13 min-h-0 w-full items-center
                        justify-center border-b bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600'
              >
                <span className='w-full p-2'>
                  <Link href='/c/1/leaderboard'>
                    <span className='text-style flex items-center justify-center text-white'>
                      See more...
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};