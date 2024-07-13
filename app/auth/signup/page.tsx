'use client';

import {
  isEmailAndRollNoFilled,
  isRoleSelected,
  isUserNameFilled,
  isUserPasswordFilled,
  isUserStudent,
  signUpPageNo,
  userEmail,
  userName,
  userPassword,
  userRollNo,
} from '@/Recoil';
import { Page1, Page2, Page3, Page4 } from '@/components/Auth';
import { RoundedSmBtn } from '@/components/Buttons';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface SignUpDto {
  name: string;
  email: string;
  password: string;
  isTeacher: boolean;
  enrollementId?: string;
}

const Page = ({
  title,
  subtitle,
  children,
  inputsFilled,
  handleSubmit = () => {},
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  inputsFilled: boolean;
  handleSubmit?: () => void;
}) => {
  const [pageNo, setPageNo] = useRecoilState(signUpPageNo);

  const displayMsg = () => {
    if (!inputsFilled) alert('Fill all the fields');
  };

  const nextPageHandler = () => {
    if (inputsFilled) setPageNo((prev) => prev + 1);
    else alert('Fill all the fields');
  };

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
          <div className='min-h-10r max-w-50p flex-grow pl-6 '>
            <div className='flex min-w-20r flex-col items-start justify-start'>
              {children}
            </div>
          </div>

          {/* //todo: button click logic: check for empty inputs */}

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
                <RoundedSmBtn name={'Next'} action={nextPageHandler} />
              ) : (
                <RoundedSmBtn name={'Create'} action={handleSubmit} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUp = () => {
  const pageNo = useRecoilValue(signUpPageNo);
  const isStudent = useRecoilValue(isUserStudent);
  const name = useRecoilValue(userName);
  const email = useRecoilValue(userEmail);
  const rollNo = useRecoilValue(userRollNo);
  const password = useRecoilValue(userPassword);

  const router = useRouter();
  const handleUserCreation = async () => {
    const data: SignUpDto = {
      name: name.first + ' ' + name.last,
      email: email,
      password: password.password,
      isTeacher: !isStudent,
    };

    if (isStudent) data.enrollementId = rollNo;
     
    try {
      const response = await axios.post('/signup', data);
      const resData = response.data;

      localStorage.setItem('access_token', resData.access_token);
      router.push('/');
    } catch (err: any) {
      if (err.response) {
        if (err.response?.status === 400) alert('Data validation unsuccessful');
        else if (err.response?.status === 403) alert('User already exists');
        else if (err.response?.status === 500) alert('Problem at server');
        else alert(err.response?.message);
      } else alert('Unknown problem');
    }
  };

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
    <Page1 />,
    <Page2 />,
    <Page3 />,
    <Page4 />,
  ];

  const checkInputs: boolean[] = [
    useRecoilValue(isRoleSelected),
    useRecoilValue(isUserNameFilled),
    useRecoilValue(isEmailAndRollNoFilled),
    useRecoilValue(isUserPasswordFilled),
  ];

  return (
    <div className='google-bw-bg absolute bottom-0 left-0 right-0 top-0'>
      <div className='flex h-full w-full flex-col justify-center'>
        <div className='flex-grow'></div>

        <Page
          {...Descriptions[pageNo]}
          inputsFilled={checkInputs[pageNo]}
          handleSubmit={handleUserCreation}
        >
          {Inputs[pageNo]}
        </Page>

        <div className='flex-grow'></div>
      </div>
    </div>
  );
};

export default SignUp;
