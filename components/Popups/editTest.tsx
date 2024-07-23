'use client';

import { createTestInfo } from '@/Recoil';
import { useRecoilState } from 'recoil';
import { BasicInput } from '../Inputs';
import {
  DatePicker,
  TimePicker,
  MultiSelectDropDown,
  MyDropDown,
} from '../Utils';
import { languageOptions } from '@/Utils';
import { useEffect } from 'react';
import { SimpleButton } from '../Buttons';

interface Test {
  name: string;
  id: number;
  startTime: string;
  endTime: string;
  allowedLanguages: string[];
  evaluationScheme: string;
  visibility: string;
}

interface Option {
  id: number;
  name: string;
}

export const EditTest = ({ test }: { test: Test }) => {
  const [testInfo, setTestInfo] = useRecoilState(createTestInfo);

  const languages: Option[] = languageOptions;
  const visibilities: Option[] = [
    { id: 1, name: 'Private' },
    { id: 2, name: 'Public' },
  ];

  const schemes: Option[] = [
    { id: 1, name: 'Static' },
    { id: 2, name: 'Dynamic' },
  ];

  useEffect(() => {
    setTestInfo({
      name: test.name,
      date: new Date(test.startTime).toISOString().split('T')[0],
      startTime: new Date(test.startTime).toTimeString().slice(0, 5),
      endTime: new Date(test.endTime).toTimeString().slice(0, 5),
      languages: test.allowedLanguages,
      evaluationScheme: test.evaluationScheme,
      visibility: test.visibility,
    });
  }, []);

  return (
    <div className=''>
      <span
        className='display relative block flex-shrink-[2] flex-grow-[2] overflow-y-auto 
            px-5 py-0 text-sm font-normal leading-5 tracking-[0.2px] outline-none'
      >
        <div>
          <div className='flex flex-col  items-center'>
            <div
              className='border-box mt-4 flex w-auto flex-col justify-between overflow-hidden 
              rounded-3 bg-white p-6'
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
                  defaultInput={test.name}
                  width='100%'
                />
              </div>

              {/* //TODO: divide following rows in reusbale components */}
              <div className='my-4 flex flex-row justify-between'>
                <div className='pr-4'>
                  <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    Date
                  </div>
                  <DatePicker
                    onChangeHandler={(date: string) => {
                      setTestInfo((prev) => {
                        return { ...prev, date };
                      });
                    }}
                    defaultValue={
                      new Date(test.startTime).toISOString().split('T')[0]
                    }
                  />
                </div>

                <div className='pr-4'>
                  <div className='mb-4 text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    Start Time
                  </div>
                  <TimePicker
                    onChangeHandler={(startTime: string) => {
                      setTestInfo((prev) => {
                        return { ...prev, startTime };
                      });
                    }}
                    defaultValue={new Date(test.startTime)
                      .toTimeString()
                      .slice(0, 5)}
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
                    defaultValue={new Date(test.endTime)
                      .toTimeString()
                      .slice(0, 5)}
                  />
                </div>
              </div>
      
              <div className='my-4 flex flex-row justify-start'>
                <div>
                  <div className='mb-4 text-left text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                    Languages Allowed
                  </div>

                  <div className='max-w-64'>
                  <MultiSelectDropDown
                    title='Select Languages'
                    options={languages}
                    selectHandler={(languages: string[]) => {
                      setTestInfo((prev) => {
                        return { ...prev, languages };
                      });
                    }}
                    defaultValues={test.allowedLanguages}
                    />
                  </div>
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
                    defaultValue={{
                      name: test.visibility,
                      id: 1,
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
                    defaultValue={{
                      name: test.evaluationScheme,
                      id: 1,
                    }}
                  />
                </div>
              </div>


            </div>
          <div className='w-full py-4 flex justify-center items-center'>
            <SimpleButton name='Edit'
            action={() => {}}/>
          </div>
          </div>
        </div>
      </span>
    </div>
  );
};