import {
  CourseInfo,
  CreateTest,
  ShortLearderboard,
  TestBox,
} from '@/components/Course';
import React from 'react';

const CourseDash: React.FC = () => {
  return (
    <div className='visible static flex h-auto min-h-0 overflow-y-hidden opacity-100 contain-style'>
      <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
        <div className='min-h-auto relative z-auto h-auto backface-visibility-h '>
          <div className='h-16 '></div>
          <div className='h-12'></div>
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
                              {/*// TODO: separate this into component */}
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
  );
};

export default CourseDash;
