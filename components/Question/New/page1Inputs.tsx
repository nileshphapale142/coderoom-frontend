'use client';

import React from 'react';
import { BasicInput, BasicTextArea } from '@/components/Inputs';
import { useRecoilState } from 'recoil';
import { newQuestion } from '@/Recoil';

export const Page1Inputs = () => {
  const [que, setQue] = useRecoilState(newQuestion);

  return (
    <>
      <div className='text-style flex w-full flex-col items-start justify-start'>
        <div className='flex w-full flex-row justify-between'>
          <div>
            <span className='text-xl font-semibold text-gray-600'>
              Question Name
            </span>

            <div className='py-2 '>
              <BasicInput
                title='Question Name'
                defaultInput={que.name}
                inputHandler={(name) => {
                  setQue((prev) => {
                    return { ...prev, name };
                  });
                }}
                width={'22rem'}
                id='queName'
              />
            </div>
          </div>
          <div>
            <span className='text-xl font-semibold text-gray-600'>Points</span>

            <div className='py-2 '>
              <BasicInput
                title='Points'
                defaultInput={que.points}
                inputHandler={(points) => {
                  setQue((prev) => {
                    return { ...prev, points };
                  });
                }}
                width={'10rem'}
                id='points'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='text-style flex flex-grow flex-col items-start justify-start'>
        <span className='text-xl font-semibold text-gray-600'>
          Question Description
        </span>
        <BasicTextArea
          defaultValue={que.description}
          inputHandler={(description) => {
            setQue((prev) => {
              return { ...prev, description };
            });
          }}
          id='queDesc'
        />
      </div>
    </>
  );
};
