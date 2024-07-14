'use client';

import React from 'react';
import { BasicPopUp } from './basic';
import { BasicInput, BasicTextArea } from '../Inputs';

export const CreateClassPopup = () => {
  return (
    <>
      <BasicPopUp
        title='Create Class'
        joinBtnName='Create'
        isJoinValid={() => {
          return true;
        }}
      >
        <div className='block px-6'>
          <div className='p-8 flex flex-col justify-start border rounded-2 border-gray-600 align-middle'>
            <BasicInput
              title='Class Name'
              inputHandler={() => {}}
              width='100%'
            />

            <div className='mt-4 flex flex-col justify-start align-middle'>
              <div className='text-style'>
                <span className='font-normal'>Class Description</span>
              </div>
              <BasicTextArea width='100%' />
            </div>
          </div>
        </div>
      </BasicPopUp>
    </>
  );
};
