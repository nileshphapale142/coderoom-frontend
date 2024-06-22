import React from 'react';
import { MainNavFiller, CourseNavFiller } from '@/components/Utils';
import { QuestionSideBar } from '@/components/Popups';
const QUestionPage = () => {
  return (
    <>
      <div className='visible static flex h-auto min-h-screen bg-[#f0f4f9] opacity-100 contain-style'>
        <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
          <div className='min-h-auto relative z-auto flex h-auto flex-col backface-visibility-h '>
            <MainNavFiller />
            <CourseNavFiller />
          </div>
        </div>
      </div>
      <QuestionSideBar />
    </>
  );
};

export default QUestionPage;
