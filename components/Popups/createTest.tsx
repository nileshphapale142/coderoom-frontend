'use client';

import { BasicInput } from '../Inputs';
import { BasicPopUp } from './basic';
import {
  DatePicker,
  MultiSelectDropDown,
  MyDropDown,
  TimePicker,
} from '../Utils';
import { languageOptions } from '@/Utils';
import { createTestInfo, isCreateTestInfoFilled } from '@/Recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import { createTestAction } from '@/app/action';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Loading from '@/app/loading';

interface Option {
  id: number;
  name: string;
}

export const CreateTestPopUp = ({ courseId }: { courseId: number }) => {
  //TODO: add create button color change logic (all inputs entered)

  const [testInfo, setTestInfo] = useRecoilState(createTestInfo);
  const isInfoFilled = useRecoilValue(isCreateTestInfoFilled);
  const router = useRouter();

  const languages: Option[] = languageOptions;

  const visibilities: Option[] = [
    { id: 1, name: 'Private' },
    { id: 2, name: 'Public' },
  ];

  const schemes: Option[] = [
    { id: 1, name: 'Static' },
    { id: 2, name: 'Dynamic' },
  ];

  const handleCreateTest = async () => {
    if (!isInfoFilled) return;
    try {
      const { data, status } = await createTestAction({
        ...testInfo,
        courseId,
      });

      //todo: proper error handling
      if (status === 201) {
        router.push(`/c/${courseId}/t/${data.test.id}`);
      } else if (status === 403) {
        alert('Unauthorized to create test');
      } else if (status === 401) {
        router.push('/auth/signin');
      } else {
        alert('Some problem occured');
      }
    } catch (error) {
      console.error('Error creating test:', error);
      alert('An error occurred while creating the test.');
    }
  };

  return (
    <>
      <BasicPopUp
        title='Create Test'
        isJoinValid={() => useRecoilValue(isCreateTestInfoFilled)}
        joinBtnName='Create'
        onClickHandler={handleCreateTest}
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
                    inputHandler={(name: string) => {
                      setTestInfo((prev) => {
                        return { ...prev, name };
                      });
                    }}
                    width='100%'
                  />
                </div>

                {/* //TODO: divide following rows in reusbale components */}
                <div className='my-4 flex flex-row justify-between'>
                  <div>
                    <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                      Date
                    </div>
                    <DatePicker
                      onChangeHandler={(date: string) => {
                        setTestInfo((prev) => {
                          return { ...prev, date };
                        });
                      }}
                    />
                  </div>
                </div>

                <div className='my-4 flex flex-row justify-between'>
                  <div>
                    <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                      Start Time
                    </div>
                    <TimePicker
                      onChangeHandler={(startTime: string) => {
                        setTestInfo((prev) => {
                          return { ...prev, startTime };
                        });
                      }}
                    />
                  </div>

                  <div>
                    <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                      End Time
                    </div>
                    <TimePicker
                      onChangeHandler={(endTime: string) => {
                        setTestInfo((prev) => {
                          return { ...prev, endTime };
                        });
                      }}
                    />
                  </div>
                </div>

                <div className='my-4 flex flex-row justify-between'>
                  <div>
                    <div className='mb-4 text-left text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                      Languages Allowed
                    </div>

                    <MultiSelectDropDown
                      title='Select Languages'
                      options={languages}
                      selectHandler={(languages: string[]) => {
                        setTestInfo((prev) => {
                          return { ...prev, languages };
                        });
                      }}
                    />
                  </div>
                </div>

                <div className='my-4 flex flex-row justify-between '>
                  <div>
                    <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                      Visibility
                    </div>
                    <MyDropDown
                      title='Visibility'
                      options={visibilities}
                      selectHandler={(visibility) => {
                        setTestInfo((prev) => {
                          return { ...prev, visibility };
                        });
                      }}
                    />
                  </div>

                  <div>
                    <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                      Evaluation Scheme
                    </div>
                    <MyDropDown
                      title='Evaluation Scheme'
                      options={schemes}
                      selectHandler={(evaluationScheme) => {
                        setTestInfo((prev) => {
                          return { ...prev, evaluationScheme };
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </BasicPopUp>
    </>
  );
};
