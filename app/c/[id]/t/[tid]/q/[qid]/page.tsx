'use client';

import React from 'react';
import { MainNavFiller, MyDropDown } from '@/components/Utils';
import { QuestionSideBar } from '@/components/Popups';
import { Editor } from '@monaco-editor/react';
import { useRecoilValue } from 'recoil';
import { currLanguage } from '@/Recoil';

const SubNavBarItem = ({
  name,
  color,
  action,
  selected = false,
}: {
  name: string;
  color: string;
  action: () => void;
  selected?: boolean;
}) => {
  return (
    <div
      className={
        `text-style inline-block h-full  w-30 cursor-pointer select-none 
        border-r border-r-gray text-${color} rounded-tr-1` +
        (selected ? ' google-bw-bg ' : ' hover:bg-gray-200 ')
      }
    >
      <button className='h-full w-full p-2 px-4' onClick={action}>
        <div className='flex w-full items-center justify-center'>{name}</div>
      </button>
    </div>
  );
};

const Description = () => {
  return (
    <div className='h-full w-full overflow-x-auto overflow-y-visible'>
      <div className='text-style flex flex-col justify-start border-none p-4 font-normal outline-none'>
        <div className='flex flex-col items-start justify-start'>
          <div className='text-heading w-full cursor-default text-2xl text-gray-800'>
            <span className='line-clamp-3 block max-w-full'>Two Sum</span>
          </div>
          <div className='font-semibold text-gray-400'>
            <span className='mr-2 inline-block'>Maximum Point: 100</span>
            <span className='inline-block'>Available Point: 100</span>
          </div>
        </div>

        <div className='mt-6 flex w-full flex-col items-start justify-start text-base '>
          <span className='block'>
            Given an array of integers nums and an integer target, return
            indices of the two numbers such that they add up to target.
          </span>
          <span className='mt-2 block'>
            You may assume that each input would have exactly one solution, and
            you may not use the same element twice.
          </span>
          <span className='mt-2 block'>
            You can return the answer in any order.
          </span>
        </div>

        <div className='mt-6 flex w-full flex-col items-start justify-start text-base'>
          <div className='block w-full '>
            {/* //todo: divide these into components (decide when clear about test cases) */}
            <div
              className='flex w-full flex-col items-start justify-start rounded-2 border-none
                        bg-white px-1 py-2'
            >
              <div className=''>
                <span className='mr-1 inline-block font-semibold text-gray-800'>
                  Input:
                </span>
                <span className='inline-block font-normal text-gray-500'>
                  nums = [2,7,11,15], target = 9
                </span>
              </div>

              <div className=''>
                <span className='mr-1 inline-block font-semibold text-gray-800'>
                  Output:
                </span>
                <span className='inline-block font-normal text-gray-500'>
                  [0,1]
                </span>
              </div>

              <div className=''>
                <span className='mr-1 inline-block font-semibold text-gray-800'>
                  Explaination:
                </span>
                <span className='font-normal text-gray-500'>
                  Because nums[0] + nums[1] == 9, we return [0, 1].
                </span>
              </div>
            </div>

            <div
              className='mt-1 flex w-full flex-col items-start justify-start rounded-2
                        border-none bg-white px-1 py-2'
            >
              <div className=''>
                <span className='mr-1 inline-block font-semibold text-gray-800'>
                  Input:
                </span>
                <span className='inline-block font-normal text-gray-500'>
                  nums = [3,2,4], target = 6
                </span>
              </div>

              <div className=''>
                <span className='mr-1 inline-block font-semibold text-gray-800'>
                  Output:
                </span>
                <span className='inline-block font-normal text-gray-500'>
                  [1, 2]
                </span>
              </div>
            </div>

            <div
              className='mt-1 flex w-full flex-col items-start justify-start rounded-2
                        border-none bg-white px-1 py-2'
            >
              <div className=''>
                <span className='mr-1 inline-block font-semibold text-gray-800'>
                  Input:
                </span>
                <span className='inline-block font-normal text-gray-500'>
                  nums = [3,3], target = 6
                </span>
              </div>

              <div className=''>
                <span className='mr-1 inline-block font-semibold text-gray-800'>
                  Output:
                </span>
                <span className='inline-block font-normal text-gray-500'>
                  [0,1]
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex w-full flex-col items-start justify-start'>
          <div className='text-base font-semibold'>
            <span>Constraints:</span>
          </div>

          <div className='mt-2 flex flex-col font-normal'>
            {/* //todo: these contraints has to come from sever so may to make them <li> */}

            <div className='mt-1'>
              <span className='mr-1 inline-block'>•</span>
              <span>
                2 {'<'}= nums.length {'<'}= 10<sup>4</sup>
              </span>
            </div>

            <div className='mt-1'>
              <span className='mr-1 inline-block'>•</span>
              <span>
                -10<sup>9</sup> {'<'}= nums[i] {'<'}= 10<sup>9</sup>
              </span>
            </div>

            <div className='mt-1'>
              <span className='mr-1 inline-block'>•</span>
              <span>
                -10<sup>9</sup> {'<'}= target {'<'}= 10<sup>9</sup>
              </span>
            </div>

            <div className='mt-1'>
              <span className='mr-1 inline-block'>•</span>
              <span className='font-medium'>Only one valid answer exists.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Submission = ({
  message,
  lang,
  time,
  isDanger,
}: {
  message: string;
  lang: string;
  time: string;
  isDanger: boolean;
}) => {
  return (
    //todo: submitted code section on button click

    <button
      className='text-style mt-2 flex flex-row 
          rounded-2 border border-solid border-gray p-2 hover:bg-gray-200'
    >
      <div
        className={`flex w-2/5 items-start justify-start text-base 
            font-semibold text-${isDanger ? 'red' : 'green'}-600`}
      >
        <span>{message}</span>
      </div>

      <div
        className='inline-block w-1/5 text-base 
            font-medium text-gray-700'
      >
        <span>{lang}</span>
      </div>

      <div
        className='inline-block w-2/5 text-base
            font-normal text-gray-600'
      >
        <span>{time}</span>
      </div>
    </button>
  );
};

const Submissions = () => {
  return (
    <div className='h-full w-full overflow-x-auto overflow-y-visible'>
      <div className='p-4'>
        <div className='flex flex-col rounded-2 bg-white p-4 pt-2'>
          <Submission
            time='June 01, 2024 at 09:34PM'
            lang='C++'
            isDanger={false}
            message='Accepted'
          />
          <Submission
            time='June 01, 2024 at 09:34PM'
            lang='C++'
            isDanger={true}
            message='Wrong answer'
          />
          <Submission
            time='June 01, 2024 at 09:34PM'
            lang='C++'
            isDanger={true}
            message='Memory Limit Exceeded'
          />
          <Submission
            time='June 01, 2024 at 09:34PM'
            lang='C++'
            isDanger={true}
            message='Time Limit Exceeded'
          />
        </div>
      </div>
    </div>
  );
};

const QuestionPage = () => {
  //todo: make separate directory for all the components
  //todo: test, test result and current submission result page to be added
  //todo: fucking separate into components

  const [selected, setSelected] = React.useState(1);
  const language = useRecoilValue(currLanguage);

  const pages: React.ReactNode[] = [
    <Description />,
    <Submissions />,
    <></>,
    <></>,
    <></>,
  ];

  const defaulCode = `class Solution {
  public:
  
  int twoSum(vector<int> &num, int target) {

  }
};`;

  const requestFullScreen = () => {
    const element = document.documentElement; // full-screen the entire document
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  return (
    <>
      <div className='visibl ṇ n  be relative bottom-0 left-0 right-0 top-0 flex h-auto bg-[#f0f4f9] bg-white opacity-100 contain-style'>
        <div className='relative z-auto block h-full  flex-1-auto'>
          <div className='relative z-auto flex h-full flex-col backface-visibility-h '>
            <MainNavFiller />
            <div className='h-14'></div>
            <div className='relative flex h-[calc(100vh-120px)] flex-row overflow-hidden'>
              <div
                className='google-bw-bg relative  m-[0.1rem] flex w-45p flex-col
              overflow-hidden rounded-2 border border-solid border-gray'
              >
                <div className='relative h-10 rounded-2 '>
                  <div className='block h-full bg-gray-300'>
                    <SubNavBarItem
                      name='Description'
                      color='blue-500'
                      // id={1}
                      action={() => setSelected(1)}
                      selected={1 === selected}
                    />
                    <SubNavBarItem
                      name='Submissions'
                      color='yellow-500'
                      // id={2}
                      action={() => setSelected(2)}
                      selected={2 === selected}
                    />
                    <SubNavBarItem
                      name='Test'
                      color='green-500'
                      // id={3}
                      action={() => setSelected(3)}
                      selected={3 === selected}
                    />
                    <SubNavBarItem
                      name='Test Result'
                      color='green-500'
                      // id={4}
                      action={() => setSelected(4)}
                      selected={4 === selected}
                    />
                  </div>
                </div>

                {pages[selected - 1]}
              </div>

              {/* //todo: add slider if want to */}
              {/* <div className='h-full w-2 bg-black'>{'||'}</div> */}

              <div
                className='google-bw-bg relative m-[0.1rem]  flex flex-1-auto flex-col
              overflow-hidden rounded-2 border border-solid border-gray'
              >
                <div className='relative h-10 rounded-2 '>
                  <div className='block h-full bg-gray-300'>
                    <SubNavBarItem
                      name='Code'
                      color='green-700'
                      selected={true}
                      action={() => {}}
                    />
                  </div>
                </div>

                <div className='z-100 h-8 w-full border-b border-b-stone-400'>
                  <div className='flex h-full flex-row items-center justify-between px-2'>
                    <MyDropDown />
                    <div className='block py-2'>
                      {/* //todo: separate the buttons into components */}

                      <button className='inline-block rounded-2 p-2 hover:bg-gray-200'>
                        {/* //todo: reset code button */}
                        <div className='flex items-center justify-center'>
                          <svg
                            width='14'
                            height='14'
                            data-prefix='far'
                            data-icon='arrow-rotate-left'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z'
                            ></path>
                          </svg>
                        </div>
                      </button>

                      <button
                        className='inline-block rounded-2 p-2 hover:bg-gray-200 '
                        onClick={requestFullScreen}
                      >
                        <div className='flex items-center justify-center '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='14'
                            height='14'
                            fill='currentColor'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M6.414 19H10a1 1 0 110 2H4a1 1 0 01-1-1v-6a1 1 0 112 0v3.586l4.293-4.293a1 1 0 011.414 1.414L6.414 19zM17.586 5H14a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0V6.414l-4.293 4.293a1 1 0 01-1.414-1.414L17.586 5z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className='z-1 flex h-full'>
                  <Editor
                    width={`100%`}
                    height={'100%'}
                    language={language.value}
                    // value={value}
                    theme={'oceanic-next'}
                    defaultValue={defaulCode}
                    onChange={() => {}}
                    options={{
                      scrollbar: {
                        vertical: 'auto',
                        horizontal: 'auto',
                      },
                      minimap: {
                        enabled: false,
                      },
                      scrollBeyondLastLine: false,
                      overviewRulerLanes: 0,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuestionSideBar />
    </>
  );
};

export default QuestionPage;
