import React from 'react';

export const Example = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative my-4 flex flex-grow border-l py-8'>
      <div
        className='mx-6 flex w-full flex-col items-start justify-start
                      rounded-2 border-2 border-solid border-gray p-4'
      >
        {children}
      </div>
    </div>
  );
};
