'use client';

import React from 'react';
import { MainNavFiller } from '@/components/Utils';
import { QuestionSideBar } from '@/components/Popups';

const SubNavBarItem = ({
  name,
  color,
  // id,
  action,
  selected = false,
}: {
  name: string;
  color: string;
  // id:number;
  action: () => void;
  selected?: boolean;
}) => {
  // 'use client'

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
}



const QuestionPage = () => {
  const [selected, setSelected] = React.useState(1);

  return (
    <>
      <div className='visible relative bottom-0 left-0 right-0 top-0 flex h-auto bg-[#f0f4f9] bg-white opacity-100 contain-style'>
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

                <Description/>

              </div>

              <div className='h-full w-2 bg-black'>{'||'}</div>
              <div className='flex-shrink-0 flex-grow border-solid border-gray'>
                2
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
