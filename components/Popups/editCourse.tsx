'use client';

import React, { useEffect } from 'react';
import { BasicInput, BasicTextArea } from '../Inputs';
import { useSetRecoilState } from 'recoil';
import { createClassInfo } from '@/Recoil';
import { SimpleButton } from '../Buttons';

interface EditCourseProps {
  name: string;
  description: string;
}

export const EditCourse = ({ name, description }: EditCourseProps) => {
  const setInfo = useSetRecoilState(createClassInfo);

  useEffect(() => {
    setInfo({
      name: name,
      description,
    });
  }, []);

  return (
    <div className='flex h-full flex-col'>
      <div className='block h-auto flex-grow'></div>
      <div className='relative mx-auto rounded-3 bg-white p-4'>
        <div className='flex flex-col px-2'>
          <div className='text-style text-heading py-2'>
            <span className='text-2xl font-semibold'>Edit Class</span>
          </div>

          <div className='flex items-center justify-center  py-2'>
            <BasicInput
              title='Class Name'
              inputHandler={(name) => {
                setInfo((prev) => {
                  return { ...prev, name };
                });
              }}
              defaultInput={name}
              width='25rem'
            />
          </div>

          <div className='flex flex-col justify-start  py-2'>
            <div className='text-style text-base font-normal'>
              <span className='font-normal'>Description</span>
            </div>
            <BasicTextArea
              inputHandler={(description) => {
                setInfo((prev) => {
                  return { ...prev, description };
                });
              }}
              defaultValue={description}
              width='25rem'
            />
          </div>

          <div className='flex items-center justify-center py-2 pt-4'>
            <SimpleButton name='Edit' action={() => {}} />
          </div>
        </div>
      </div>
      <div className='block h-auto flex-grow'></div>
    </div>
  );
};
