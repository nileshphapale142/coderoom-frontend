import { BasicInput } from '@/components/Inputs';
import { userPassword } from '@/Recoil';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

export const Page4 = () => {
  const setPassword = useSetRecoilState(userPassword);
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <div className='w-full '>
        <BasicInput
          title='Password'
          inputHandler={(pass) => {
            setPassword((prev) => {
              return { ...prev, password: pass };
            });
          }}
          inputType={showPass ? '' : 'password'}
          width={'100%'}
        />
      </div>

      <div className='mt-4 w-full'>
        <BasicInput
          title='Confirm'
          inputHandler={(pass) => {
            setPassword((prev) => {
              return { ...prev, confirmPassword: pass };
            });
          }}
          inputType={showPass ? '' : 'password'}
          width={'100%'}
        />
      </div>

      {/* //todo: show password clicking triggering checkbox */}

      <div className='ml-1 mt-2 w-full'>
        <div className='flex items-start justify-start'>
          <div className='flex cursor-pointer'>
            <div className='flex items-center justify-center py-[0.15em]'>
              <input
                type='checkbox'
                placeholder='Show Password'
                className='cursor-pointer appearance-none rounded'
                onClick={() => {
                  setShowPass((prev) => !prev);
                }}
              />
            </div>
            <div className='flex items-center justify-center pl-4'>
              <span className='text-style cursor-pointer'>Show Password</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
