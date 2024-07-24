'use client';

import { userCode } from '@/Recoil';
import { useSetRecoilState } from 'recoil';

export const ResetCodeButton = () => {
  const setCodeEmpty = useSetRecoilState(userCode);

  return (
    <button
      className='inline-block rounded-2 p-2 hover:bg-gray-200'
      onClick={() => setCodeEmpty('')}
    >
      {/* //todo: reset code button */}
      <div className='flex items-center justify-center'>
        <svg
          width='14'
          height='14'
          data-prefix='far'
          data-icon='arrow-rotate-left'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path
            fill='currentColor'
            d='M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z'
          ></path>
        </svg>
      </div>
    </button>
  );
};
