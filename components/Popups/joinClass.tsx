'use client';

import React from 'react';
import { CourseCode } from '../Inputs';
import { Cancel, CancelJoinClass } from '../Buttons';
import { JoinClass } from '../Buttons/joinClass';
import { useRecoilState, useRecoilValue } from 'recoil';
import { courseCodeInput, isBasicPopUpOpen } from '@/Recoil';
import { useClickOutside } from '../Hooks';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { joinClassAction } from '@/app/action';

// TODO: Separate the input into separate component

export const JoinClassPopUp = () => {
  const [isOpen, setIsOpen] = useRecoilState(isBasicPopUpOpen);
  const courseCode = useRecoilValue(courseCodeInput);
  const router = useRouter();

  const ref = React.useRef<HTMLDivElement>(null);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleJoin = async () => {
    const info = {
      courseCode: courseCode,
    };

    const { data, status } = await joinClassAction(info);

    if (status === 201) router.push(`/c/${data.course.id}`);
    else if (status === 401) router.push('/auth/sigin');
    else if (status === 500) alert('serve error');
    else if (status === 400) alert('bad request');
    else alert('unknown problem');
  };

  useClickOutside(ref, () => setIsOpen(false));

  return (
    // TODO: Add transition to open and close
    // todo: try to warp it inside basicPopup component
    !isOpen ? (
      <></>
    ) : (
      <div
        className={
          'fixed bottom-0 left-0 right-0 top-0 z-[1191] bg-[rgba(0,0,0,.5)] transition-opacity duration-[50ms] '
        }
      >
        <div
          className='absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center px-[5%] py-0 
      transition-transform duration-[.4s]'
        >
          <div className='block h-20 flex-grow'></div>
          <div
            ref={ref}
            className='relative flex max-h-full w-[544px] max-w-full flex-shrink flex-col items-stretch 
        overflow-hidden rounded-2 bg-white shadow-custom transition-transform duration-[.225s] 
        ease-bezier0021'
          >
            <div className='flex flex-shrink text-lg font-medium leading-6 tracking-[0.1px]'>
              <div className='mx-6 mb-4 mt-[18px] min-w-0 flex-shrink flex-grow text-nowrap'>
                Join Class
              </div>
            </div>

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
                    <div className='text-875 font-medium leading-5 tracking-sm text-[#3c4043]'>
                      Class Code
                    </div>
                    <p className='mb-4 text-875 font-normal leading-5 tracking-sm text-gray-1'>
                      Ask your teacher for the class code, then enter it here.
                    </p>

                    <CourseCode />
                  </div>
                </div>
              </div>
            </span>

            <div className='flex flex-shrink-0 justify-end pb-4 pl-6 pr-2 pt-4 leading-0'>
              {/* <CancelJoinClass /> */}
              <Cancel handleOnClick={handleCancel} />
              <JoinClass handleOnClick={handleJoin} />
            </div>
          </div>

          <div className='block h-20 flex-grow'></div>
        </div>
      </div>
    )
  );
};
