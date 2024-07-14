'use client';

import React from 'react';
import { Courses } from '@/components/Home';
import { CreateClassPopup, JoinClassPopUp } from '@/components/Popups';
import { useRouter } from 'next/navigation';
import Loading from './loading';
import { useRecoilValue } from 'recoil';
import { isUserTeacher } from '@/Recoil';

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();
  const isTeacher = useRecoilValue(isUserTeacher)

  React.useEffect(() => {
    if (!localStorage.getItem('access_token')) router.push('/auth/signin');
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <Courses />
      {
        isTeacher ? <CreateClassPopup /> : <JoinClassPopUp />
      }
      
    </>
  );
};

export default Home;
