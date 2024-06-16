import React from 'react';
import Link from 'next/link';

interface QuestionBoxProps {
  route: string;
  name: string;
  maxPts: number;
  availablePts: number;
}

export const QuestionBox = (question: QuestionBoxProps) => {
  return (
    <div className='relative mt-8 w-full'>
      {/* <Link
                    href={`/c/${params.id}/t/${params.tid}/q/1`}
                    className='absolute left-0 right-0 z-20 h-full w-full'
                  /> */}
      <div
        className='rounded-5 relative flex  flex-row justify-between border 
                  border-solid border-gray px-8 py-8 '
      >
        <div className='flex max-w-full flex-col items-start overflow-hidden'>
          <span className='text-heading mb-2 line-clamp-4 max-w-full text-gray-4'>
            {question.name}
          </span>
          <div className='text-style text-wrapping text-gray-400 '>
            <span className='mr-4 inline-block'>
              Max Points : {question.maxPts}
            </span>
            <span className='inline-block'>
              Available Points : {question.availablePts}
            </span>
          </div>
        </div>
        <div className='flex h-12 flex-row items-center '>
          <Link
            href={question.route}
            className='text-style w-30 flex 
                        h-10 rounded-2 border border-solid
                        border-black p-2 font-semibold hover:bg-[#f0f4f9]'
          >
            <span className='flex w-full items-center justify-center'>
              Solve
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
