import React from 'react';
import { MainNavFiller, CourseNavFiller } from '@/components/Utils';
import { BasicInput } from '@/components/Inputs';

const NewQuestionPage = () => {
  const inputHanlde = async (input: string) => {
    'use server';
  };


  // TODO: add navigation button at the bottom (back and next)
  // TODO: pagination
  
  return (
    <>
      <div className='visible static flex h-auto min-h-screen bg-[#f0f4f9] opacity-100 contain-style'>
        <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
          <div className='min-h-auto relative z-auto flex h-auto flex-col backface-visibility-h '>
            <MainNavFiller />
            <CourseNavFiller />
            <div className='relative left-0 top-0 block bg-[#f0f4f9]'>
              <div className='max-w-70r w-calc-24r relative mx-auto my-0 flex px-4 py-6'>
                <div
                  className='relative mt-8 flex w-full flex-col rounded-7 border-none
                bg-white '
                >
                  <div className='flex flex-row justify-between'>

                    <div className='flex flex-col items-start justify-center p-8'>
                      {/* // TODO: Separate into another component */}
                      <div className='text-heading flex items-start justify-start'>
                        <span className='text-3xl font-normal text-gray-800'>
                          Name and description of the question
                        </span>
                      </div>
                      <div className='h-12'></div>
                      <div className='text-style flex flex-col items-start justify-start'>
                        <span className='text-xl font-semibold text-gray-600'>
                          Question Name*
                        </span>
                        <div className='py-2 '>
                          <BasicInput
                            title='Question Name'
                            inputHandler={inputHanlde}
                            width={30}
                          />
                        </div>
                      </div>
                      <div className='text-style flex flex-col items-start justify-start'>
                        <span className='text-xl font-semibold text-gray-600'>
                          Question Description*
                        </span>
                        <div className='w-40r mt-2 h-auto overflow-y-auto overflow-x-hidden'>
                          {/* //TODO: onclick border chagnae not hover */}
                          <div
                            className='border-gray-600 relative flex h-54 w-full items-start 
                          justify-start overflow-y-auto overflow-x-hidden rounded-2 border border-solid hover:border-2 hover:border-blue-1'
                          >
                            {/* //TODO: separate component for text area */}
                            <textarea
                              className='h-100% text-style h-full w-full border-none p-2 
                            font-normal leading-6 text-gray-700'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='relative flex flex-row items-center justify-center my-4  flex-grow border-l py-8'>
                      <div
                        className='mx-6 flex flex-col items-start justify-start rounded-2
                      border-2 border-solid border-gray p-4'
                      >
                        <div className='flex w-full flex-col border-b pb-3'>
                          <span className='text-heading text-xl text-gray-600'>
                            Questin Name
                          </span>
                          <div>
                            <span className='text-style font-normal text-gray-600'>
                              Target Sum
                            </span>
                          </div>
                        </div>
                        <div className='mt-4 flex w-full flex-col'>
                          <span className='text-heading text-xl text-gray-600'>
                            Description
                          </span>
                          <div>
                            <span className='text-style flex flex-col font-normal text-gray-600'>
                              <span>
                                Given an array of integers, return indices of
                                the two numbers such that they add up to a
                                specific target. You may assume that each input
                                would have exactly one solution, and you may not
                                use the same element twice.
                              </span>
                              <span className='mt-2'>
                                Example: Given nums = [2, 7, 11, 15], target =
                                9, Because nums[0] + nums[1] = 2 + 7 = 9, return
                                [0, 1].
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='stikcy left-0 right-0 bottom-0 mx-auto h-12 w-12 bg-black'>hell</div> */}
      </div>
    </>
  );
};

export default NewQuestionPage;
