'use client';

import React from 'react';
import { BasicInput } from '../Inputs';
import { BasicPopUp } from './basic';
import { DatePicker, DropDown, TimePicker } from '../Utils';

export const CreateTestPopUp = () => {
  //TODO: add create button color change logic (all inputs entered)
  return (
    <BasicPopUp
      title='Create Test'
      isJoinValid={() => false}
      joinBtnName='Create'
    >
      <span
        className='display relative block flex-shrink-[2] flex-grow-[2] overflow-y-auto 
            px-5 py-0 text-sm font-normal leading-5 tracking-[0.2px] outline-none'
      >
        <div>
          <div className='flex flex-col  items-center'>
            <div
              className='border-box mt-4 flex w-full max-w-[32.25rem] flex-col justify-between overflow-hidden 
              rounded-2 border-0625 border-solid border-[#dadce0] bg-white p-6'
            >
              <div>
                <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                  Test Name
                </div>
                <BasicInput
                  title={'Test Name'}
                  inputHandler={(input: string) => {}}
                />
              </div>

              {/* //TODO: divide following rows in reusbale components */}
              <div className='my-4 flex flex-row justify-between'>
                <div>
                  <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    Start Date
                  </div>
                  <DatePicker />
                </div>

                <div>
                  <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    Start Time
                  </div>
                  <TimePicker />
                </div>
              </div>

              <div className='my-4 flex flex-row justify-between'>
                <div>
                  <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    End Date
                  </div>
                  <DatePicker />
                </div>

                <div>
                  <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    End Time
                  </div>
                  <TimePicker />
                </div>
              </div>

              <div className='my-4 flex flex-row justify-between'>
                <div>
                  <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    Evaluation Scheme
                  </div>
                  <DropDown
                    name='Evaluation Scheme'
                    options={['Static', 'Dynamic']}
                  />
                </div>

                <div>
                  <div className='mb-4 text-right text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    Languaged Allowed
                  </div>
                  {/* //TODO: add multi select dropdown */}
                  <DropDown
                    name='Languages allowed'
                    options={['C', 'C++', 'Java', 'Python']}
                  />
                </div>
              </div>

              <div className='my-4 flex flex-row justify-between '>
                <div>
                  <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    Visibility
                  </div>
                  <DropDown name='Visibility' options={['Public', 'Private']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </BasicPopUp>
  );
};
