import React from 'react';
import { ProfileOptionsBtn } from '../Buttons';
import { ProfileOptions } from '../Popups';

export const ProfileSign = () => {
  return (
    <div className='ml-[-36px] mr-[-20px] flex-shrink-0'>
      <div>
        <div className='static h-12 min-w-0 pr-10 transition-shadow'>
          <div
            className='float-right flex h-12 items-center justify-end text-nowrap 
                  px-1 py-0 pl-8 align-middle'
          >
            <div className='relative float-right'>
              <div className='inline-block p-1 align-middle '>
                <div className='relative'>
                  {/* <Link
                    href={'/profile&continue=localhost:3000'}
                    className='box-border inline-block h-10 w-10 cursor-pointer rounded-full 
                            p-1 align-middle outline-none'
                  >
                    <Image
                      src={
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVR4nO2Wzy4DURTGfy+g/gQLSuwIEpa8ARZCGjsrNoKy8BiENQ32FixoWPIGNk0aYtOu/WkJEtNUTnKaTJrOvXdmKix8yZe5OXO/+80598ydgX/8QfQDaeAKyANvyrzG1oG+Zhr2AvuAB1QtrAAnwEBc0zng1cGwnmVgNqrppmYQ1tSf/UaUTCsxTP3mzpknI5bXVPYeF+NDy0IFIAW0KOe1s02ajMsr41lMOxroJFY06DytZCDSlieXTAUzaiSc1tiCRbtmMr60iKW01GUnVRAkLNqsyfjeIq7BNe5n3mRcjpFxq0N3B6JkEUsHo/taUE5pLGXRloJtIedQrqCuvrNocybjrMOBUNQOTihTDqZV4MJkvOqwQFSumIy7gK8fMPWAbizIBIg/gFNgERgD2pTjGjvTOY20BzbTWtZPPtEnsA20O2hlzo5qavpHoJMQn0VPD5RBX3wS2ANugReljHeBCd+8IeBBty30D8EyMKJjud447OU1MKyaUWCJmHgO0UiyTU3DkWO3y5xjmowksKUHgRyV70oZn+s94zf3H/wGvgGtGnT6PQah9AAAAABJRU5ErkJggg=='
                      }
                      alt='Profile photo'
                      className='round bg-profile-photo relative z-0 m-0 block size-8 border-0'
                      width={'30'}
                      height={'30'}
                    />
                  </Link> */}
                  <ProfileOptionsBtn />
                </div>
              </div>
            </div>

            <ProfileOptions />
          </div>
        </div>
      </div>
    </div>
  );
};
