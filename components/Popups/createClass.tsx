'use client';

import React from 'react';
import { BasicPopUp } from './basic';
import { BasicInput, BasicTextArea } from '../Inputs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { createClassInfo, isCreateClassInfoFilled } from '@/Recoil';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { cookies } from 'next/headers';
import { createClassAction } from '@/app/action';

interface Course {
  name: string;
  id: number;
  description: string;
  code: string;
  teacher: {
    name: string;
  };
}

export const CreateClassPopup = () => {
  //todo: error handling on class creation

  const [info, setInfo] = useRecoilState(createClassInfo);
  const isInfoFilled = useRecoilValue(isCreateClassInfoFilled);
  const router = useRouter();

  const handleClassCreation = async () => {
    const { data, status } = await createClassAction(info);

    if (status === 201) {
      router.push(`/c/${data.course.id}`);
    } else if (status === 401) router.push('/auth/sigin');
    else if (status === 400) alert('bad request');
    else if (status === 500) alert('server problem');
    else alert('unknown problem');
  };

  return (
    <>
      <BasicPopUp
        title='Create Class'
        joinBtnName='Create'
        isJoinValid={() => {
          return isInfoFilled;
        }}
        onClickHandler={handleClassCreation}
      >
        <div className='block px-6'>
          <div className='border-gray-600 flex flex-col justify-start rounded-2 border p-8 align-middle'>
            <BasicInput
              title='Class Name'
              inputHandler={(name) => {
                setInfo((prev) => {
                  return { ...prev, name: name };
                });
              }}
              width='100%'
              id='className'
            />

            <div className='mt-4 flex flex-col justify-start align-middle'>
              <div className='text-style'>
                <span className='font-normal'>Class Description</span>
              </div>
              <BasicTextArea
                width='100%'
                inputHandler={(desc) => {
                  setInfo((prev) => {
                    return { ...prev, description: desc };
                  });
                }}
                defaultValue={info.description}
              />
            </div>
          </div>
        </div>
      </BasicPopUp>
    </>
  );
};
