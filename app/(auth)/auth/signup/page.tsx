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
import { Page, Page1, Page2, Page3, Page4 } from '@/components/Auth';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import { SignUpAction } from './action';

interface SignUpDto {
  name: string;
  email: string;
  password: string;
  isTeacher: boolean;
  enrollmentId?: string;
}

//todo: optimize load time for the page

const SignUp = () => {
  const pageNo = useRecoilValue(signUpPageNo);
  const isStudent = useRecoilValue(isUserStudent);
  const name = useRecoilValue(userName);
  const email = useRecoilValue(userEmail);
  const rollNo = useRecoilValue(userRollNo);
  const password = useRecoilValue(userPassword);

  const isPasswordFilled = useRecoilValue(isUserPasswordFilled);

  const router = useRouter();

  const handleUserCreation = async () => {
    if (!isPasswordFilled) {
      alert('Fill the password');
      return;
    }

    const data: SignUpDto = {
      name: name.first + ' ' + name.last,
      email: email,
      password: password.password,
      isTeacher: !isStudent,
    };

    if (isStudent) data.enrollmentId = rollNo;
    
    const { status } = await SignUpAction(data);
        
    if (status === 201) router.push('/');
    else if (status === -1) alert('Unknown problem');
    else if (status === 400) alert('Data not in correct format');
    else if (status === 500) alert('Server error');
    else if (status === 403) alert('User already exists');
    else if (status === 406) {
      alert('Your request for teacher role has been sent to the admin.\nOnce approved you can sign-in to your account.');
      //send user to the signin page after clicking OK on the alert message
    }
    else alert('Unknown problem');
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
    <Page1 key={0} />,
    <Page2 key={1} />,
    <Page3 key={2} />,
    <Page4 key={3} />,
  ];

  const checkInputs: boolean[] = [
    useRecoilValue(isRoleSelected),
    useRecoilValue(isUserNameFilled),
    useRecoilValue(isEmailAndRollNoFilled),
    isPasswordFilled,
  ];

  return (
    <div className='google-bw-bg absolute bottom-0 left-0 right-0 top-0'>
      <div className='flex h-full w-full flex-col justify-center'>
        <div className='flex-grow'></div>

        <div className='mx-auto w-70r rounded-7 border-none bg-white p-9 py-12 '>
          <div className='flex flex-grow flex-row'>
            <div className='flex flex-grow flex-row flex-wrap'>
              <Page
                {...Descriptions[pageNo]}
                inputsFilled={checkInputs[pageNo]}
                handleSubmit={handleUserCreation}
              >
                {Inputs[pageNo]}
              </Page>
            </div>
          </div>
        </div>

        <div className='flex-grow'></div>
      </div>
    </div>
  );
};

export default SignUp;
