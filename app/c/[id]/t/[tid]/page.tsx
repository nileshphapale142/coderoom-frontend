import React from 'react';
import { MainNavFiller, CourseNavFiller } from '@/components/Utils';
import Link from 'next/link';
import { QuestionBox } from '@/components/Test';

const TestHome = ({ params }: { params: { id: string; tid: string } }) => {
  return (
    <div className='visible static flex h-auto min-h-0 overflow-y-hidden opacity-100 contain-style'>
      <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
        <div className='min-h-auto relative z-auto h-auto backface-visibility-h '>
          <MainNavFiller />
          <CourseNavFiller />
          <div className='relative left-0 top-0 block bg-[#f0f4f9]'>
            <div className='max-w-50r relative mx-auto my-0 flex w-calc-12 px-4 py-6'>
              <div
                className='relative flex w-full flex-col rounded-7 border-none bg-white
                px-8'
              >
                <QuestionBox
                  name={'Question Name'}
                  maxPts={100}
                  availablePts={98}
                  route={`/c/${params.id}/t/${params.tid}/q/1`}
                />
                <QuestionBox
                  name={'Question Name'}
                  maxPts={100}
                  availablePts={98}
                  route={`/c/${params.id}/t/${params.tid}/q/1`}
                />
                <QuestionBox
                  name={'Question Name'}
                  maxPts={100}
                  availablePts={98}
                  route={`/c/${params.id}/t/${params.tid}/q/1`}
                />

                {/* //TODO: add question button/link */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestHome;
