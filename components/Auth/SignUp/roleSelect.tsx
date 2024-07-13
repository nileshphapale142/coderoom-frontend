'use client';

import { userRoleSelected } from '@/Recoil';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

export const RoleSelect = ({
  imgLink,
  role,
}: {
  imgLink: string;
  role: string;
}) => {
  const [userRole, setUserRole] = useRecoilState(userRoleSelected);

  return (
    <div
      className={
        `google-bw-bg box-border flex cursor-pointer flex-col items-center
        justify-around rounded-7 border border-solid  p-8 px-12 ` +
        (userRole === role ? ' border-2 border-blue-1' : ' border-gray ')
      }
      onClick={() => setUserRole(role)}
      id={role.toLowerCase()}
    >
      <div className='box-border flex items-center justify-center'>
        <div className='p-2'>
          <Image
            src={imgLink}
            alt={`${role} logo`}
            width={'50'}
            height={'50'}
          />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='text-style inline-block p-2 '>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};
