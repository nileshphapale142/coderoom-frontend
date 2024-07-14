import Link from 'next/link';
import React from 'react';

interface User {
  name: string;
  points: number;
  tests: number[];
}

const SimpleCell = ({
  name,
  widthReq = false,
  isNumber = false,
  color = 'gray-900',
}: {
  name: string;
  widthReq?: boolean;
  isNumber?: boolean;
  color?: string;
}) => {
  return (
    <th className='z-3 relative h-full translate-x-0 p-0'>
      <div
        className={
          'text-style table-box box-border flex items-end ' +
          ' justify-center font-normal tracking-just-sm text-gray-500 ' +
          (widthReq ? ' w-[8.0625rem] ' : ' ')
        }
      >
        <div className='px-6'>
          <div
            className={
              'relative h-auto min-w-10 max-w-70 whitespace-nowrap ' +
              '  py-2 text-center text-sm leading-5 outline-none ' +
              (isNumber
                ? ` text-${color} font-bold `
                : ` text-${color} font-normal`)
            }
          >
            <span className='relative flex w-full justify-center overflow-hidden leading-8'>
              {name}
            </span>
          </div>
        </div>
      </div>
    </th>
  );
};

const TestCell = ({
  name,
  link,
  outof,
  date,
}: {
  name: string;
  link: string;
  date?: string;
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
              className='text-style line-clamp-2 h-10 overflow-hidden
                                     text-ellipsis text-violet-500 underline'
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

const StudentCell = ({ name, link }: { name: string; link: string }) => {
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
        max-w-47.5 text-gray-500 hover:text-violet-500 hover:underline'
          >
            {name}
          </Link>
        </div>
      </div>
    </th>
  );
};

const LeaderboardPage = () => {
  //TODO : make separate component files
  //TODO: pagination
  //TODO: your rank at the end or start
  //TODO: horizontal scrolling

  const students: User[] = [
    { name: 'Adam Warlock', points: 100, tests: [15, 15, 15] },
    { name: 'Adam Warlock', points: 100, tests: [15, 15, 15] },
    { name: 'Adam Warlock', points: 100, tests: [15, 15, 15] },
    { name: 'Adam Warlock', points: 100, tests: [15, 15, 15] },
    { name: 'Adam Warlock', points: 100, tests: [15, 15, 15] },
    { name: 'Adam Warlock', points: 100, tests: [15, 15, 15] },
    {
      name: 'Adam Warlock name is too long',
      points: 100,
      tests: [15, 15, 15],
    },
  ];
  return (
    <div
      className='overflow-y-[unset] visible static flex h-auto
    min-h-0 opacity-100 contain-style'
    >
      <div
        className='relative bottom-0 left-0 right-0 top-0 z-auto 
      block min-h-full min-w-0 flex-1-auto'
      >
        <div className='relative z-auto h-auto min-h-full backface-visibility-h'>
          <div className='h-mainNavHgt'></div>
          <div className='h-12'></div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <table
                        className='relative h-[1px] table-fixed border-collapse
                      border-spacing-0 overflow-hidden'
                      >
                        <thead>
                          <tr>
                            <SimpleCell name='Rank' />
                            <SimpleCell name='Name of Student' />
                            <SimpleCell name='Total Points' />

                            <TestCell
                              name='Question No. 1'
                              link='/c/1/t/1/q/1'
                              // date='some date'
                              outof='random'
                            />
                            <TestCell
                              name='Question NO. 2'
                              link='/c/1/t/1/q/2'
                              // date='some date'
                              outof='random'
                            />
                            <TestCell
                              name='Question No. 3'
                              link='/c/1/t/1/q/3'
                              // date='some date'
                              outof='random'
                            />
                          </tr>
                        </thead>
                        <tbody>
                          {students.map((student, idx) => {
                            return (
                              <tr key={idx}>
                                <SimpleCell name={(idx + 1).toString()} />
                                <StudentCell name={student.name} link='/u/1' />
                                <SimpleCell
                                  name={student.points.toString()}
                                  widthReq={true}
                                  color='green-600'
                                  isNumber={true}
                                />
                                {student.tests.map((test, idx2) => (
                                  <SimpleCell
                                    key={idx2}
                                    name={test.toString()}
                                    widthReq={true}
                                    color='blue-500'
                                    isNumber={true}
                                  />
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
