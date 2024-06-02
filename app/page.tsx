import React from 'react';
import { Courses } from '@/components/Home';
import { JoinClassPopUp } from '@/components/Popups';

const Home = () => {
  return (
    <>
      <Courses />
      <JoinClassPopUp />
    </>
  );
};

export default Home;
