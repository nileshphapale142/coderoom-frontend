'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CloseBtn } from '../Buttons';
import { useRecoilState } from 'recoil';
import { isProblemListOpen } from '@/Recoil';
import { useClickOutside } from '../Hooks';
import { fetchQuestionList } from '@/app/action';

interface Question {
  id: number;
  name: string;
  points: number;
}

interface Test {
  name: string;
  id: number;
  questions: Question[];
}

const QuestionLink = ({ name, link }: { name: string; link: string }) => {
  return (
    <div
      className='relative mt-4 flex cursor-pointer justify-start rounded-2 border 
            border-gray hover:bg-gray-200'
    >
      <Link href={link} className='absolute left-0 top-0 h-full w-full' />
      <span className='w-full p-4'>{name}</span>
    </div>
  );
};

export const QuestionSideBar = ({ tid }: { tid: number }) => {
  //todo: separete the components

  const [isOpen, setIsOpen] = useRecoilState(isProblemListOpen);
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {
    //todo: error handling
    const { data, status } = await fetchQuestionList(tid);
    const { test }: { test: Test } = data;
    setQuestions(test.questions);
  };

  useEffect(() => {
    setIsOpen(false);
    fetchQuestions();
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className=''>
      <div
        className={
          `trasn fixed bottom-0 left-0 right-0 top-0 z-[1000] h-screen 
      w-full bg-[rgba(0,0,0,.5)] transition-all duration-300 ` +
          (isOpen ? ' visible scale-100 ' : ' hidden scale-0 ')
        }
      ></div>
      <div
        className={
          `fixed left-0 top-0 z-[1024] block h-screen w-auto 
         transition-transform duration-300 ease-linear  ` +
          (isOpen ? ' translate-x-0  ' : ' -translate-x-full ')
          // (isVisible ? ' visible ' : ' hidden ')
        }
        ref={ref}
      >
        <div className='h-full w-30r rounded-r-2 border-none bg-white-3'>
          <div
            className='flex items-center justify-between border-b border-solid 
          border-b-black p-4 pl-8'
          >
            <div
              className='text-heading flex  items-center justify-start 
            p-1 text-2xl text-gray-2'
            >
              <Link
                href={`/t/${tid}`}
                className='transition-all hover:text-black hover:underline'
              >
                Home
              </Link>
            </div>

            <div className=''>
              <CloseBtn
                action={() => {
                  setIsOpen(false);
                }}
              />
            </div>
          </div>

          <div
            className='flex max-h-full w-full flex-col justify-start overflow-x-hidden overflow-y-visible 
            p-4 pl-8 pt-4'
          >
            {questions.map((que) => (
              <QuestionLink
                key={que.id}
                name={que.name}
                link={`/t/${tid}/q/${que.id}`}
              />
            ))}

            <div className='p-10'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
