'use client';

import { signUpPageNo, userRoleSelected } from '@/Recoil';
import { RoundedSmBtn } from '@/components/Buttons';
import { BasicInput } from '@/components/Inputs';
import Image from 'next/image';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

//todo: modularity
//todo: Starting page with teacher or student

const Page = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const [pageNo, setPageNo] = useRecoilState(signUpPageNo);

  return (
    <div className='mx-auto w-70r rounded-7 border-none bg-white p-9 py-12 '>
      <div className='flex flex-grow flex-row'>
        <div className='flex flex-grow flex-row flex-wrap'>
          <div className='flex w-1/2 flex-col items-start justify-start pr-6'>
            <div
              className='text-heading mt-5 break-words text-4xl font-normal
                leading-5 '
            >
              <h1>{title}</h1>
            </div>
            <div className='text-style mt-5 text-base font-light'>
              <span>{subtitle}</span>
            </div>
          </div>

          {/* //todo: make this rigit component responsive */}
          <div className='min-h-10r max-w-50p flex-grow pl-6 '>{children}</div>

          {/* //todo: divide into component */}
          {/* //todo: button click logic: increment page count; check for empty inputs */}

          <div className='mt-10 w-full'>
            <div className='flex flex-row justify-between'>
              {pageNo !== 0 ? (
                <RoundedSmBtn
                  name={'Back'}
                  action={() => setPageNo((prev) => prev - 1)}
                />
              ) : (
                <div className='w-1'></div>
              )}

              {pageNo !== 3 ? (
                <RoundedSmBtn
                  name={'Next'}
                  action={() => setPageNo((prev) => prev + 1)}
                />
              ) : (
                <RoundedSmBtn name={'Create'} action={() => {}} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoleBox = ({ imgLink, role }: { imgLink: string; role: string }) => {
  const [userRole, setUserRole] = useRecoilState(userRoleSelected);

  return (
    <div
      className={
        `google-bw-bg box-border flex cursor-pointer flex-col items-center
        justify-around rounded-7 border border-solid  p-8 px-12 ` +
        (userRole === role ? ' border-2 border-blue-1' : ' border-gray ')
      }
      onClick={() => setUserRole(role)}
    >
      <div className='box-border flex items-center justify-center'>
        <div className='p-2'>
          <Image
            src={imgLink}
            alt={`${role} logo`}
            width={'50'}
            height={'50'}
          />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='text-style inline-block p-2 '>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};
const SignUp = () => {
  const pageNo = useRecoilValue<number>(signUpPageNo);

  const Descriptions = [
    {
      title: 'Who are you?',
      subtitle:
        'Are you a teacher or a student? Select your role to get started.',
    },
    { title: 'Create your account', subtitle: 'Enter your name.' },
    {
      title: 'Use your email address',
      subtitle: 'Use your institute email address.',
    },
    {
      title: 'Create a strong Password',
      subtitle:
        'Create a strong password with a mix of letters, numbers and symbols.',
    },
  ];

  const Inputs: React.ReactNode[] = [
    <div className='flex min-w-20r flex-col items-start justify-start'>
      <div className='flex w-full items-center justify-between pl-12'>
        {/* <div
          className='google-bw-bg box-border flex cursor-pointer flex-col items-center
        justify-around rounded-7 border border-solid border-gray p-8 px-12'
        >
          <div className='box-border flex items-center justify-center'>
            <div className='p-2'>
              <Image
                src={'https://img.icons8.com/ios/50/teacher.png'}
                alt='Teacher logo'
                width={'50'}
                height={'50'}
              />
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='text-style inline-block p-2 '>
              <span>Teacher</span>
            </div>
          </div>
        </div>

        <div
          className='google-bw-bg box-border flex cursor-pointer flex-col items-center
        justify-around rounded-7 border border-solid border-gray p-8 px-12'
        >
          <div className='box-border flex items-center justify-center'>
            <div className='p-2'>
              <Image
                src={'https://img.icons8.com/ios/50/graduation-cap.png'}
                alt='Student logo'
                width={'50'}
                height={'50'}
              />
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='text-style inline-block p-2 '>
              <span>Student</span>
            </div>
          </div>
        </div> */}

        <RoleBox
          imgLink='https://img.icons8.com/ios/50/teacher.png'
          role='Teacher'
        />
        <RoleBox
          imgLink='https://img.icons8.com/ios/50/graduation-cap.png'
          role='Student'
        />
      </div>
    </div>,

    <div className='flex min-w-20r flex-col items-start justify-start'>
      <div className='w-full '>
        <BasicInput title='First Name' inputHandler={() => {}} width={'100%'} />
      </div>

      <div className='mt-4 w-full'>
        <BasicInput title='Last Name' inputHandler={() => {}} width={'100%'} />
      </div>
    </div>,

    <div className='flex min-w-20r flex-col items-start justify-start'>
      <div className='w-full '>
        <BasicInput title='Roll No' inputHandler={() => {}} width={'100%'} />
      </div>

      <div className='mt-4 w-full'>
        <BasicInput title='Email' inputHandler={() => {}} width={'100%'} />
      </div>
    </div>,

    <div className='flex min-w-20r flex-col items-start justify-start'>
      <div className='w-full '>
        <BasicInput title='Password' inputHandler={() => {}} width={'100%'} />
      </div>

      <div className='mt-4 w-full'>
        <BasicInput title='Confirm' inputHandler={() => {}} width={'100%'} />
      </div>

      {/* //todo: show password clicking triggering checkbox */}

      <div className='ml-1 mt-2 w-full'>
        <div className='flex items-start justify-start'>
          <div className='flex cursor-pointer'>
            <div className='flex items-center justify-center py-[0.15em]'>
              <input
                type='checkbox'
                placeholder='Show Password'
                className='cursor-pointer appearance-none rounded'
              />
            </div>
            <div className='flex items-center justify-center pl-4'>
              <span className='text-style cursor-pointer'>Show Password</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className='google-bw-bg absolute bottom-0 left-0 right-0 top-0'>
      <div className='flex h-full w-full flex-col justify-center'>
        <div className='flex-grow'></div>

        <Page {...Descriptions[pageNo]}>{Inputs[pageNo]}</Page>

        <div className='flex-grow'></div>
      </div>
    </div>
  );
};

export default SignUp;
