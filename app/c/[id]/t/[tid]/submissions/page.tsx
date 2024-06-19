import { CourseNavFiller, MainNavFiller } from '@/components/Utils';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Heading = ({ name }: { name: string }) => {
  return (
    <>
      <th className=''>
        <div className='p-2 '>
          <div className='text-style flex w-full items-center justify-center text-gray-600'>
            <div className='text-lg font-semibold'>
              <span>{name}</span>
            </div>
          </div>
        </div>
      </th>
    </>
  );
};

const SimpleCell = ({ name }: { name: string }) => {
  return (
    <td>
      <div className='p-2 '>
        <div className='text-style text-gray-600 flex w-full items-center justify-start'>
          <div className='text-base font-normal'>
            <span>{name} </span>
          </div>
        </div>
      </div>
    </td>
  );
};

const LinkCell = ({ name, link }: { name: string; link: string }) => {
  return (
    <td>
      <div className='p-2 '>
        <div className='text-style text-violet-1 flex w-full items-center justify-start'>
          <div className='text-base font-normal'>
            <Link
              href={link}
              className='underline-custom flex w-full items-center justify-start '
            >
              <span>{name}</span>
            </Link>
          </div>
        </div>
      </div>
    </td>
  );
};

const BodyRowRenderer = ({ children }: { children: React.ReactNode }) => {
  return (
    <tr className='hover:bg-gray-google cursor-default rounded-7 border-b border-b-gray'>
      {children}
    </tr>
  );
};

const SubmissionPage = () => {

  // todo: pagination
  // todo: status with color
   
  return (
    <div className='visible static flex h-auto min-h-screen bg-[#f0f4f9] opacity-100 contain-style'>
      <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
        <div className='min-h-auto relative z-auto flex h-auto flex-col backface-visibility-h '>
          <MainNavFiller />
          <CourseNavFiller />
          <div className='relative left-0 top-0 mx-auto'>
            <div className='mt-6 rounded-7 border-none bg-white'>
              <div className='relative p-4'>
                <div>
                  <table className='table-auto rounded-7'>
                    <thead>
                      <tr className='border-b border-solid border-b-gray'>
                        <Heading name='Submission Id' />
                        <Heading name='Student' />
                        <Heading name='Question' />
                        <Heading name='Time' />
                        <Heading name='Language' />
                        <Heading name='Status' />
                      </tr>
                    </thead>
                    <tbody>
                      <BodyRowRenderer>
                        <LinkCell name='Submission' link='submissionLink' />
                        <LinkCell name='User Name' link='userLink' />
                        <LinkCell name='Question Name' link='questionNameLink' />
                        <SimpleCell name='random' />
                        <SimpleCell name='random is tool long' />
                        <SimpleCell name='random ' />
                      </BodyRowRenderer>
                      <BodyRowRenderer>
                        <LinkCell name='Submission' link='submissionLink' />
                        <LinkCell name='User Name' link='userLink' />
                        <LinkCell name='Question Name' link='questionNameLink' />
                        <SimpleCell name='random' />
                        <SimpleCell name='random is tool long' />
                        <SimpleCell name='random ' />
                      </BodyRowRenderer>
                      <BodyRowRenderer>
                        <LinkCell name='Submission' link='submissionLink' />
                        <LinkCell name='User Name' link='userLink' />
                        <LinkCell name='Question Name' link='questionNameLink' />
                        <SimpleCell name='random' />
                        <SimpleCell name='random is tool long' />
                        <SimpleCell name='random ' />
                      </BodyRowRenderer>
                      <BodyRowRenderer>
                        <LinkCell name='Submission' link='submissionLink' />
                        <LinkCell name='User Name' link='userLink' />
                        <LinkCell name='Question Name' link='questionNameLink' />
                        <SimpleCell name='random' />
                        <SimpleCell name='random is tool long' />
                        <SimpleCell name='random ' />
                      </BodyRowRenderer>
                      <BodyRowRenderer>
                        <LinkCell name='Submission' link='submissionLink' />
                        <LinkCell name='User Name' link='userLink' />
                        <LinkCell name='Question Name' link='questionNameLink' />
                        <SimpleCell name='random' />
                        <SimpleCell name='random is tool long' />
                        <SimpleCell name='random ' />
                      </BodyRowRenderer>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
