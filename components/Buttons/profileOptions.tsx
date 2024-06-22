'use client'

import { isProfileOptionsOpen } from '@/Recoil';
import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';

export const ProfileOptionsBtn = () => {

  const [_, setIsProfileOptions] = useRecoilState(isProfileOptionsOpen)
  return (
    <button
      className='box-border inline-block h-10 w-10 cursor-pointer rounded-full 
                p-1 align-middle outline-none'

      onClick={() => setIsProfileOptions((prev) => !prev)}
    >
      <Image
        src={
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVR4nO2Wzy4DURTGfy+g/gQLSuwIEpa8ARZCGjsrNoKy8BiENQ32FixoWPIGNk0aYtOu/WkJEtNUTnKaTJrOvXdmKix8yZe5OXO/+80598ydgX/8QfQDaeAKyANvyrzG1oG+Zhr2AvuAB1QtrAAnwEBc0zng1cGwnmVgNqrppmYQ1tSf/UaUTCsxTP3mzpknI5bXVPYeF+NDy0IFIAW0KOe1s02ajMsr41lMOxroJFY06DytZCDSlieXTAUzaiSc1tiCRbtmMr60iKW01GUnVRAkLNqsyfjeIq7BNe5n3mRcjpFxq0N3B6JkEUsHo/taUE5pLGXRloJtIedQrqCuvrNocybjrMOBUNQOTihTDqZV4MJkvOqwQFSumIy7gK8fMPWAbizIBIg/gFNgERgD2pTjGjvTOY20BzbTWtZPPtEnsA20O2hlzo5qavpHoJMQn0VPD5RBX3wS2ANugReljHeBCd+8IeBBty30D8EyMKJjud447OU1MKyaUWCJmHgO0UiyTU3DkWO3y5xjmowksKUHgRyV70oZn+s94zf3H/wGvgGtGnT6PQah9AAAAABJRU5ErkJggg=='
        }
        alt='Profile photo'
        className='round relative z-0 m-0 block size-8 border-0 bg-profile-photo'
        width={'30'}
        height={'30'}
      />
    </button>
  );
};
