'use client';

import React from 'react';
import { BasicPopUp } from './basic';
import { BasicInput, BasicTextArea } from '../Inputs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { createClassInfo, isCreateClassInfoFilled } from '@/Recoil';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Course {
  name: string;
  id: number;
  description: string;
  code: string;
  teacher: {
    name: string;
  }
}

export const CreateClassPopup = () => {
  
  //todo: error handling on class creation 
  
  const [info, setInfo] = useRecoilState(createClassInfo)
  const isInfoFilled = useRecoilValue(isCreateClassInfoFilled)
  const router = useRouter()
  
  const handleClassCreation = async () => {
    try {
      const data = {
        name: info.name,
        description: info.description
      }

      const response = await axios.post('/new/class', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })

      const resData = response.data
      const course: Course = resData.course
      router.push(`/c/${course.id}`)
      
    } catch(err:any) {
      alert('Error  ' + err?.response.message)
    }
  }
  
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
                  return {...prev, name: name}
                })
              }}
              width='100%'
              id='className'
            />

            <div className='mt-4 flex flex-col justify-start align-middle'>
              <div className='text-style'>
                <span className='font-normal'>Class Description</span>
              </div>
              <BasicTextArea width='100%' 
              inputHandler={(desc) => {
                setInfo((prev) => {
                  return {...prev, description: desc}
                })
              }}/>
            </div>
          </div>
        </div>
      </BasicPopUp>
    </>
  );
};
