'use client'

import { BasicInput } from '@/components/Inputs'
import Link from 'next/link';
import React from 'react'    

const SignIn = () => {
  //todo: add modularity 
  return (
    <div className='google-bw-bg absolute bottom-0 left-0 right-0 top-0'>
      <div className='mx-auto flex h-full flex-col items-center justify-center'>
        <div className='w-full flex-grow'></div>
        <div className='flex w-30r flex-col rounded-4 bg-white px-8'>
          <div className='text-heading border-b py-4'>
            <div className='flex w-full justify-start'>
              <span className='font-semibold text-gray-800'>Sign In</span>
            </div>
          </div>

          <div className='mt-4 flex flex-col items-start justify-start '>
            <div>
              <BasicInput
                title='Email'
                inputHandler={(arg: string) => {}}
                width={'26rem'}
              />
            </div>
            <div className='mt-4'>
              <BasicInput
                title='Password'
                inputHandler={(arg: string) => {}}
                width={'26rem'}
              />
            </div>

            <div className='mt-2'>
              <div className='text-style cursor-pointer pl-2 text-xs font-normal text-blue-600'>
                <span>Forgot password?</span>
              </div>
            </div>

            <div className='mt-4 w-full'>
              <div className='flex w-full items-center justify-center'>
                <div className=''>
                  <div className='text-style text-white'>
                    <button
                      className='flex h-10 w-auto items-center justify-center rounded-2 border-none bg-blue-600 px-4
                py-2 opacity-100 transition-opacity hover:opacity-90'
                      onClick={() => {}}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-4 w-full py-4'>
            <div className='flex flex-row justify-center'>
              <div className='flex-grow -translate-y-2 border-b'></div>
              <div className='text-style flex justify-center px-2 font-normal text-blue-700'>
                <Link href={'/auth/signup'}>Don't have an account?</Link>
              </div>
              <div className='flex-grow -translate-y-2 border-b'></div>
            </div>
          </div>
        </div>
        <div className='w-full flex-grow'></div>
      </div>
    </div>
  );
}

export default SignIn