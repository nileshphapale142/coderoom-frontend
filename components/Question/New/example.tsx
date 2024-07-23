import React from 'react';

export const Example = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative  flex flex-grow border-l py-8'>
      <div
        className='mx-6 flex w-full flex-col items-start justify-start
                      overflow-y-scroll rounded-2 border-2 border-solid border-gray
                      p-4'
      >
        {children}
      </div>
    </div>
  );
};
