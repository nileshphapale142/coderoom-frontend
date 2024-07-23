'use client';

import { testCasesOutput } from '@/Recoil';
import { useRecoilValue } from 'recoil';

export const TestResult = () => {
  const testRes = useRecoilValue(testCasesOutput);

  return (
    <div className='relative flex w-full items-center justify-start px-8 pt-4'>
      <div className='relative flex w-full flex-col'>
        {testRes.error ? (
          <div className='relative mb-4 flex h-auto max-h-48 w-full overflow-scroll rounded-3 bg-white'>
            <div className='flex justify-start p-4'>
              <div className='text-style text-red-500'>
                <ol>
                  {testRes.error.split('\n').map((line, idx) => (
                    <li key={idx}>
                      <span className='inline-block'>{line}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className='relative flex h-80 w-full overflow-scroll rounded-3 bg-white'>
          <div className=' flex justify-start p-4'>
            <div>
              <ol>
                {testRes.output
                  ?.split('\n')
                  .map((res, idx) => <li key={idx}>{res}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
