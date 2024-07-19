'use client';

import { BasicTextArea } from '@/components/Inputs';
import { testCases } from '@/Recoil';
import React from 'react';
import { useRecoilState } from 'recoil';

export const Page3Inputs = () => {
  const [tc, setTC] = useRecoilState(testCases);
  return (
    <>
      <div className='text-style flex flex-grow flex-col items-start justify-start'>
        <span className='text-xl font-semibold text-gray-600'>Test Cases</span>
        <BasicTextArea
          inputHandler={(val: string) => {
            setTC(val);
          }}
          defaultValue={tc}
          id='testCases'
        />
      </div>
    </>
  );
};
