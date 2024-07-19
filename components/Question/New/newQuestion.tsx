'use client';

import React, { useState } from 'react';
import { NewQPage1, NewQPage2, NewQPage3, NewQPage4 } from './';
import { SimpleButton } from '@/components/Buttons';
import { useRecoilValue } from 'recoil';
import {
  exampleTestCases,
  isExampleTestCasesFilled,
  isQueInfoFilled,
  isSolutinCodeFilled,
  isTestCasesFilled,
  newQuestion,
  solutionCode,
  testCases,
} from '@/Recoil';
import { createQuestionAction } from '@/app/action';
import { useRouter } from 'next/navigation';

interface ExampleTestCase {
  input: string;
  ouput: string;
  explaination: string;
}

interface Code {
  language: string;
  code: string;
}

interface Question {
  name: string;
  description: string;
  points: number;
  testCases: string; //base64
  solutionCode: Code; //base64 code
  exampleTestCases: ExampleTestCase[];
  testId: number;
}

export const NewQuestion = ({ cid, tid }: { cid: number; tid: number }) => {
  const [pageNo, setPageNo] = useState(0);

  const que = useRecoilValue(newQuestion);
  const code = useRecoilValue(solutionCode);
  const tcs = useRecoilValue(testCases);
  const etcs = useRecoilValue(exampleTestCases);

  const router = useRouter();

  const pages: React.ReactNode[] = [
    <NewQPage1 />,
    <NewQPage2 />,
    <NewQPage3 />,
    <NewQPage4 />,
  ];

  const validInputs = [
    useRecoilValue(isQueInfoFilled),
    useRecoilValue(isSolutinCodeFilled),
    useRecoilValue(isTestCasesFilled),
    useRecoilValue(isExampleTestCasesFilled),
  ];

  const incrementPageNo = () => {
    if (!validInputs[pageNo]) alert('fill the fields with valid values');
    else setPageNo((prev) => prev + 1);
  };

  const decrementPageNo = () => {
    setPageNo((prev) => prev - 1);
  };

  const handleCreation = async () => {
    if (!validInputs[pageNo]) {
      alert('fill all the fields or atleast add one test case');
      return;
    }

    const question: Question = {
      name: que.name,
      description: que.description,
      points: parseInt(que.points),
      testCases: btoa(tcs),
      solutionCode: {
        language: code.language,
        code: btoa(code.code),
      },
      exampleTestCases: etcs.map((etc) => {
        return {
          input: etc.input,
          ouput: etc.output,
          explaination: etc.explaination,
        };
      }),
      testId: tid,
    };

    const { data, status } = await createQuestionAction(question);

    if (status === 201) router.push(`/c/${cid}/t/${tid}`);
    else if (status === 400) alert('data format not correct');
    else if (status === 401) router.push(`/auth/signin`);
    else if (status === 500) router.push('/');
    else {
      alert('some error occured');
      router.push(`/c/${cid}/t/${tid}`);
    }
  };

  //TODO: rethink on what inputs to be taken for new question especially template code and test cases

  return (
    <div className='relative left-0 top-0 block bg-[#f0f4f9]'>
      <div className='relative mx-auto my-0 flex w-calc-24r max-w-70r flex-col px-4 py-6'>
        <div
          className='relative mt-4 flex h-30r w-full  flex-col rounded-7
                border-none bg-white'
        >
          {pages[pageNo]}
        </div>

        <div className='mt-5 flex w-full flex-grow items-center justify-center'>
          <div className='flex w-1/2 flex-row items-center justify-evenly p-4'>
            {pageNo != 0 && (
              <SimpleButton name={'Back'} action={decrementPageNo} />
            )}

            {pageNo !== pages.length - 1 ? (
              <SimpleButton name={'Next'} action={incrementPageNo} id='next' />
            ) : (
              <SimpleButton
                name={'Submit'}
                action={handleCreation}
                id='submit'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
