import React from 'react';
import { Courses } from '@/components/Home';
import { CreateClassPopup, JoinClassPopUp } from '@/components/Popups';

const Home = () => {
  return (
    <>
      <Courses />
      {/* <JoinClassPopUp /> */}
      <CreateClassPopup/>
    </>
  );
};

export default Home;
