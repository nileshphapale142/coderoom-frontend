import Image from 'next/image';
import React from 'react';

const TestBox = () => {
  return (
    <li
      className='hover:shadow-test-box box-border bg-transparent transition-all 
                 duration-300 hover:overflow-hidden hover:rounded-2'
    >
      <div
        className='h-15 relative z-0 box-border flex 
                  cursor-pointer flex-row items-center border-b-[0.0625rem] border-solid border-transparent 
                  border-b-gray transition-all hover:border-none hover:bg-white
                  duration-300'
                
      >
        {/* // TODO:  add color to this div if required */}
        <div
          className='ml-6 mr-4 flex h-9 w-9 shrink-0 items-center justify-center
                                  rounded-full fill-white text-center text-base leading-8 text-white'
        >
          <Image
            src='https://img.icons8.com/ios-filled/50/test-partial-passed.png'
            width='24'
            height='24'
            alt='Test icon logo'
          />
        </div>

        <div className='w-calc-33 flex h-full flex-row items-center'>
          <div className='flex-51 flex min-w-0 flex-col'>
            <div className='text-style flex-row-container w-full text-gray-700'>
              <span className='block overflow-hidden text-ellipsis whitespace-nowrap'>
                Test name comes here
              </span>
            </div>
          </div>

          <span className='flex-20 ml-4 min-w-0 text-sm font-normal leading-4 tracking-wide'>
            <div className='text-wrapping w-full'></div>
          </span>

          <div
            className='text-style-1 text-wrapping text-black-3 flex-30 ml-4 
                                    mr-[-.25rem] box-border min-w-0 pr-1 text-right'
          >
            Test date and time
          </div>
        </div>
      </div>
    </li>
  );
};

const CourseDash: React.FC = () => {
  return (
    <div className='visible static flex h-auto min-h-0 overflow-y-hidden opacity-100 contain-style'>
      <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
        <div className='min-h-auto relative z-auto h-auto backface-visibility-h '>
          <div className='h-16 '></div>
          <div className='h-12'></div>
          <div className='mx-auto my-0 flex w-calc-12 max-w-625r flex-col '>
            {/* course info */}
            <div className='mt-6 w-full overflow-hidden rounded-2 bg-violet-500 '>
              <div className='relative h-60 w-full '>
                <div className='absolute left-0 top-0 h-full w-full bg-cover bg-no-repeat'>
                  <div className='absolute left-0 top-0 block h-full w-full opacity-80'></div>
                </div>

                <div className='absolute left-0 right-0 px-6 py-4 text-white'>
                  <h1
                    className='block overflow-hidden text-ellipsis whitespace-nowrap pr-8 text-4xl 
                  font-medium'
                  >
                    Course Name comes here
                  </h1>
                  <div className='my-1 pr-8 text-1375 font-normal leading-7 text-white'>
                    Course description goes here
                  </div>
                </div>

                <div className='absolute bottom-0 left-0 right-0 px-6 py-4 text-white'>
                  <h3
                    className='block overflow-hidden text-ellipsis whitespace-nowrap pr-8 text-2xl 
                  font-medium'
                  >
                    Teacher Name comes here
                  </h3>
                  <div className='my-1 pr-8 text-1375 font-normal leading-7 text-black'>
                    Course Code comes here
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 flex'>
              <main className='m-[-1rem] flex-grow overflow-hidden p-4'>
                <div>
                  <div>
                    {/* Create test */}
                    <div className='flex items-center justify-center screen120:mb-4'>
                      <div className='h-12 w-full'>
                        <div className='relative overflow-visible'>
                          <div>
                            <div className='inline'>
                              {/*TODO: add font styles here */}
                              <button
                                className='m-0 h-12 w-full rounded-25 bg-violet-500 py-0 pl-4 pr-5 font-normal
                              text-white shadow-lg transition-all duration-300 hover:bg-violet-600'
                              >
                                <span className='relative'>
                                  Create new test
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='mb-8'>
                      <div>
                        <div className='relative'>
                          <div>
                            <ol>
                              {/*// TODO: separate this into component */}

                              <TestBox/>
                              <TestBox/>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDash;
