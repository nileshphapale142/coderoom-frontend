import {
  CourseInfo,
  CreateTest,
  ShortLearderboard,
  TestBox,
} from '@/components/Course';
import { SecondNavbar } from '@/components/Navbar';
import { CreateTestPopUp } from '@/components/Popups';
import { CourseNavFiller, MainNavFiller } from '@/components/Utils';
import React from 'react';

interface CoursePageProps {
  params: {
    id: string;
  };
}

const CourseDash = ({params}: CoursePageProps) => {
  
  const {id} = params

  return (
    <>
    
      <div className='visible static flex h-auto min-h-0 overflow-y-hidden opacity-100 contain-style'>
        <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
          <div className='min-h-auto relative z-auto h-auto backface-visibility-h '>
            <MainNavFiller />
            <CourseNavFiller />
            <div className='mx-auto my-0 flex w-calc-12 max-w-625r flex-col '>
              <CourseInfo />

              <div className='mt-6 flex'>
                <main className='m-[-1rem] flex-grow overflow-hidden p-4'>
                  <div>
                    <div>
                      {/* Create test */}
                      <CreateTest />

                      <div className='mb-8'>
                        <div>
                          <div className='relative'>
                            <div>
                              <ol>
                                {/* // TODO: Can add pagination for viewing test */}
                                <TestBox />
                                <TestBox />
                                <TestBox />
                                <TestBox />
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>

                <ShortLearderboard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateTestPopUp />
    </>
  );
};

export default CourseDash;
