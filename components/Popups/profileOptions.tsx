'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { CloseProfileOptions } from '../Buttons';
import { useRecoilState } from 'recoil';
import { isProfileOptionsOpen } from '@/Recoil';
import { useClickOutside } from '../Hooks';

export const ProfileOptions = () => {
  const [isVisible, setIsVisible] = useRecoilState(isProfileOptionsOpen);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setIsVisible(false));

  return !isVisible ? (
    <></>
  ) : (
    <div
      ref={ref}
      className='absolute right-0 top-0 mr-6 mt-[57px] h-54 max-h-calc-1 
    min-h-52 w-90 max-w-calc-1 overflow-hidden'
    >
      <div className='h-full w-full color-scheme-light'>
        <div className='h-full overflow-hidden'>
          <div className='m-0 h-full overflow-hidden '>
            <div className='absolute bottom-0 left-0 right-0 top-0 z-1 overflow-hidden'>
              <div
                className='absolute bottom-0 left-0 right-0 top-0 z-1
                block overflow-hidden contain-style'
              >
                <div className='absolute bottom-0 left-0 right-0 top-0 z-1'>
                  <div className='relative z-1 h-full'>
                    <div
                      className='relative box-border h-auto min-w-60 max-w-109 px-3
                            pb-4 pt-2'
                    >
                      <CloseProfileOptions />

                      <div
                        className='relative h-full w-full overflow-hidden
                        rounded-7 border-none bg-white-1 shadow-profile-options'
                      >
                        <div className='block h-10 w-0'></div>
                        <div className='h-full  overflow-y-auto scroll-thin scroll-color'>
                          <div
                            className='relative box-border h-auto max-h-calc-6 min-w-unset 
                            bg-none'
                          >
                            <div className='block text-center'>
                              <div
                                className='mx-4 mb-0 mt-3 overflow-hidden 
                                rounded-7.5 border-0 text-left'
                              >
                                {/* //TODO: Extract common out of following two make a component (if need to) */}

                                {/* <span className='mb-[2px] block rounded-1'>
                                  <Link
                                    href='profile'
                                    className='box-border block h-calc-1 w-full cursor-pointer overflow-hidden
                                  whitespace-nowrap rounded-tl-inherit rounded-tr-inherit border border-solid 
                                  border-transparent bg-white-2 pb-0 pl-[23px] pr-[15px] pt-2.5
                                  outline-0 '
                                  >
                                    <span
                                      className='box-border inline-block w-8 p-0 align-top text-gray-4
                                  opacity-100'
                                    >
                                      <div className='relative mx-0 my-[3px] inline-block h-8 align-top'>
                                        <Image
                                          src={
                                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVR4nO2Wzy4DURTGfy+g/gQLSuwIEpa8ARZCGjsrNoKy8BiENQ32FixoWPIGNk0aYtOu/WkJEtNUTnKaTJrOvXdmKix8yZe5OXO/+80598ydgX/8QfQDaeAKyANvyrzG1oG+Zhr2AvuAB1QtrAAnwEBc0zng1cGwnmVgNqrppmYQ1tSf/UaUTCsxTP3mzpknI5bXVPYeF+NDy0IFIAW0KOe1s02ajMsr41lMOxroJFY06DytZCDSlieXTAUzaiSc1tiCRbtmMr60iKW01GUnVRAkLNqsyfjeIq7BNe5n3mRcjpFxq0N3B6JkEUsHo/taUE5pLGXRloJtIedQrqCuvrNocybjrMOBUNQOTihTDqZV4MJkvOqwQFSumIy7gK8fMPWAbizIBIg/gFNgERgD2pTjGjvTOY20BzbTWtZPPtEnsA20O2hlzo5qavpHoJMQn0VPD5RBX3wS2ANugReljHeBCd+8IeBBty30D8EyMKJjud447OU1MKyaUWCJmHgO0UiyTU3DkWO3y5xjmowksKUHgRyV70oZn+s94zf3H/wGvgGtGnT6PQah9AAAAABJRU5ErkJggg=='
                                          }
                                          alt='Profile photo'
                                          className='round relative z-0 m-0 block size-8 border-0 bg-profile-photo'
                                          width={'30'}
                                          height={'30'}
                                        />
                                      </div>
                                    </span>

                                    <span
                                      className='ml-3 mt-2 inline-block w-calc-8 max-w-unset align-middle text-sm
                                    font-medium leading-tight tracking-normal text-black-2'
                                    >
                                      <div className='h-auto pl-0'>
                                        <div className='relative overflow-hidden text-ellipsis'>
                                          Student Name&apos;s Profile
                                        </div>
                                      </div>
                                    </span>
                                  </Link>
                                </span> */}

                                <span className='mb-[2px] block rounded-1'>
                                  <Link
                                    href='/auth/signout'
                                    className='box-border block h-calc-1 w-full cursor-pointer overflow-hidden
                                  whitespace-nowrap rounded-tl-inherit rounded-tr-inherit border border-solid 
                                  border-transparent bg-white-2 pb-0 pl-[23px] pr-[15px] pt-2.5
                                  outline-0 '
                                  >
                                    <span
                                      className='box-border inline-block w-8 p-0 align-top text-gray-4
                                  opacity-100'
                                    >
                                      <div className='relative mx-0 my-[3px] inline-block h-8 align-top'>
                                        <svg
                                          height='24'
                                          viewBox='0 0 24 24'
                                          width='24'
                                          focusable='false'
                                        >
                                          <path
                                            d='M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 
                                        0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z'
                                          ></path>
                                        </svg>
                                      </div>
                                    </span>

                                    <span
                                      className='ml-3 mt-2 inline-block w-calc-8 max-w-unset align-middle text-sm
                                    font-medium leading-tight tracking-normal text-black-2'
                                    >
                                      <div className='h-auto pl-0'>
                                        <div className='relative overflow-hidden text-ellipsis'>
                                          Sign Out
                                        </div>
                                      </div>
                                    </span>
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='block h-4 w-0'></div>
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
  );
};
