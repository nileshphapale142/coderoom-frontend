'use client';

import { RoundedSmBtn } from '@/components/Buttons';
import { BasicTextArea } from '@/components/Inputs';
import { exampleTestCases } from '@/Recoil';
import React from 'react';
import { useRecoilState } from 'recoil';

interface TestCase {
  id: number;
  input: string;
  output: string;
  explaination: string;
}

const ExampleTestCase = ({
  removeHandler,
  testCase,
  onChangeHandler,
}: {
  removeHandler: (arg: number) => void;
  testCase: TestCase;
  onChangeHandler: (arg: TestCase) => void;
}) => {
  return (
    <div className='relative block p-2'>
      <div className='google-bw-bg relative flex flex-col justify-start rounded-2 p-4'>
        <div className='absolute right-0 top-0 rounded-2 p-2'>
          <button
            className='flex items-center justify-center rounded-2 transition-all hover:bg-white'
            onClick={() => {
              removeHandler(testCase.id);
            }}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 12L18 12'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-col justify-start'>
          <div>Input</div>
          <BasicTextArea
            width='20rem'
            height='4rem'
            inputHandler={(input) => {
              onChangeHandler({ ...testCase, input });
            }}
            defaultValue={testCase.input}
            id={`input${testCase.id}`}
          />
        </div>
        <div className='flex flex-col justify-start'>
          <div>Output</div>
          <BasicTextArea
            width='20rem'
            height='3rem'
            inputHandler={(output) => {
              onChangeHandler({ ...testCase, output });
            }}
            defaultValue={testCase.output}
            id={`output${testCase.id}`}
          />
        </div>
        <div className='flex flex-col justify-start'>
          <div>Explaination</div>
          <BasicTextArea
            width='20rem'
            height='6rem'
            inputHandler={(explaination) => {
              onChangeHandler({ ...testCase, explaination });
            }}
            defaultValue={testCase.explaination}
            id={`explaination${testCase.id}`}
          />
        </div>
      </div>
    </div>
  );
};

export const Page4Inputs = () => {
  const [etcs, setEtcs] = useRecoilState(exampleTestCases);

  const handleChage = (tc: TestCase) => {
    setEtcs((prev) => {
      const temp = [...prev];
      temp[tc.id] = { ...tc };
      return temp;
    });
  };

  const handleRemove = (id: number) => {
    setEtcs((prev) => prev.filter((etc) => etc.id !== id));
  };

  return (
    <>
      <div className='text-style relative flex w-full flex-grow flex-col items-center justify-start overflow-y-scroll'>
        <div className=' relative flex flex-row flex-wrap justify-center'>
          {etcs.map((etc) => (
            <ExampleTestCase
              key={etc.id}
              testCase={etc}
              removeHandler={handleRemove}
              onChangeHandler={handleChage}
            />
          ))}
        </div>
        <RoundedSmBtn
          name='Add'
          action={() => {
            setEtcs((prev) => [
              ...prev,
              { id: prev.length, input: '', output: '', explaination: '' },
            ]);
          }}
          id='addBtn'
        />
      </div>
    </>
  );
};
