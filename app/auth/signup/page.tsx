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
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface SignUpDto {
  name: string;
  email: string;
  password: string;
  isTeacher: boolean;
  enrollementId?: string;
}

//todo: optimize load time for the page

const SignUp = () => {
  const pageNo = useRecoilValue(signUpPageNo);
  const isStudent = useRecoilValue(isUserStudent);
  const name = useRecoilValue(userName);
  const email = useRecoilValue(userEmail);
  const rollNo = useRecoilValue(userRollNo);
  const password = useRecoilValue(userPassword);
  
  const isPasswordFilled = useRecoilValue(isUserPasswordFilled)
  
  const router = useRouter();

  const handleUserCreation = async () => {
    if (!isPasswordFilled) {
      alert('Fill the password')
      return;
    }
    
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
