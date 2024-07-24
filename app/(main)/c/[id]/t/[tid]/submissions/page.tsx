import { CourseNavFiller, MainNavFiller } from '@/components/Utils';
import { getStatusInfo } from '@/Utils';
import axios from 'axios';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

interface Submission {
  submission: {
    id: number;
    code: string;
    language: string;
    time: string;
    statusCode: number;
  };
  student: {
    id: number;
    name: string;
  };
  question: {
    id: number;
    name: string;
  };
}

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

const SimpleCell = ({
  name,
  isDanger = null,
}: {
  name: string;
  isDanger?: boolean | null;
}) => {
  return (
    <td>
      <div className='p-2 '>
        <div className='text-style flex w-full items-center justify-start text-gray-600'>
          <div
            className={`text-base font-normal ${isDanger === true ? 'text-red-600' : isDanger === false ? 'text-green-600' : ''}`}
          >
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
        <div className='text-style flex w-full items-center justify-start text-gray-600'>
          <div className='text-base font-normal'>
            <Link
              href={link}
              className='underline-custom flex w-full items-center justify-start hover:text-gray-800'
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

export const fetchSubmissions = async (cid: number, tid: number) => {
  try {
    if (!cookies().get('access_token')) {
      redirect('/auth/signin');
      return {
        data: null,
      };
    }

    const response = await axios.get(
      `http://localhost:5000/test/${tid}/submissions`,
      {
        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

    const data = response.data;

    return {
      data,
    };
  } catch (err: any) {
    console.log('error: ', err);
    if (err.response.status === 404) redirect('/not-found');
    else if (err.response.status === 401) redirect(`/c/${cid}`);
    else if (err.response.status === 500) redirect(`/c/${cid}`);

    return {
      data: null,
      status: err.response.status,
    };
  }
};

const SubmissionPage = async ({
  params,
}: {
  params: { id: number; tid: number };
}) => {
  const { id, tid } = params;
  const { data, status } = await fetchSubmissions(id, tid);
  const { submissions }: { submissions: Submission[] } = data;

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
                      {submissions?.map(
                        ({ submission, question, student }, idx) => (
                          <BodyRowRenderer key={idx}>
                            <SimpleCell name={submission.id.toString()} />
                            <SimpleCell name={student.name} />
                            <SimpleCell
                              name={question.name}
                            />
                            {/* //todo: handle time situation */}
                            <SimpleCell
                              name={new Date(submission.time).toLocaleString()}
                            />
                            <SimpleCell
                              name={
                                submission.language[0].toUpperCase() +
                                submission.language.slice(1)
                              }
                            />
                            <SimpleCell
                              name={getStatusInfo(submission.statusCode).name}
                              isDanger={
                                getStatusInfo(submission.statusCode).isDanger
                              }
                            />
                          </BodyRowRenderer>
                        )
                      )}
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
