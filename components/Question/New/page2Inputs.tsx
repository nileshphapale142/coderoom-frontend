'use client';

import React from 'react';
import { DropDown, MyDropDown } from '@/components/Utils';
import { BasicTextArea } from '@/components/Inputs';
import { useRecoilState } from 'recoil';
import { solutionCode } from '@/Recoil';

export const Page2Inputs = () => {
  const options = [
    { id: 1, name: 'C' },
    { id: 2, name: 'C++' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'Python' },
  ];

  const [sol, setSol] = useRecoilState(solutionCode);

  return (
    <>
      <div className='text-style flex flex-col items-start justify-start'>
        <span className='text-xl font-semibold text-gray-600'>Language</span>
        <div className='py-2 '>
          <MyDropDown
            options={options}
            title='Language'
            selectHandler={(language) => {
              setSol((prev) => {
                return { ...prev, language };
              });
            }}
            defaultValue={
              sol.language.length > 0
                ? { id: 1, name: sol.language }
                : undefined
            }
          />
        </div>
      </div>
      <div className='text-style flex flex-grow flex-col items-start justify-start'>
        <span className='text-xl font-semibold text-gray-600'>
          Solution Code
        </span>
        <BasicTextArea
          inputHandler={(code) => {
            setSol((prev) => {
              return { ...prev, code };
            });
          }}
          defaultValue={sol.code}
          id='solCode'
        />
      </div>
    </>
  );
};
