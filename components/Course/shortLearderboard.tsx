import React from 'react';
import Link from 'next/link';

interface UserProps {
  name: string;
  points: number;
}

const LeaderboardRow = (user: UserProps) => {
  return (
    <tr className='dark:border-gray-700 border-b bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600'>
                        <th
                          scope='row'
                          className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                        >
                          { user.name }
                        </th>
                        <td className='px-6 py-4'>{user.points
                        }</td>
                      </tr>
  )
}

export const ShortLearderboard = ({leaderboard, courseId}:{leaderboard:UserProps[], courseId:number}) => {
  return (
    <div className='relative m-[-1rem] ml-0 overflow-hidden p-4'>
      <div className='box-border rounded-2 border border-gray p-4 pt-0'>
        <div>
          <div className=' flex h-12 min-w-0 items-center justify-start'>
            <h1 className='text-style text-xl'>Leaderboard</h1>
          </div>
          <div className='flex flex-col items-center justify-start'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right'>
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
                
                  {leaderboard.map((user, idx) => <LeaderboardRow key={idx} {...user} />)}
                </tbody>
              </table>
              <div
                className='dark:border-gray-700 relative flex h-13 min-h-0 w-full items-center
                        justify-center border-b bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600'
              >
                <span className='w-full p-2'>
                  <Link href={`/c/${courseId}/leaderboard`}>
                    <span className='text-style flex items-center justify-center text-black'>
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
