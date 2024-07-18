import React from 'react';

export const BasicTextArea = ({
  inputHandler,
  width = '40rem',
  height = '10rem',
  id = '',
  defaultValue = '',
}: {
  inputHandler: (str: string) => void;
  width?: string;
  height?: string;
  id?: string;
  defaultValue?: string;
}): React.ReactNode => {
  return (
    <div
      className='mt-2 flex h-auto flex-grow overflow-y-auto overflow-x-hidden'
      style={{ width: width, height: height }}
    >
      {/* //TODO: onclick border chagnae not hover */}
      <div
        className='relative flex w-full flex-grow items-start justify-start 
        overflow-y-auto overflow-x-hidden rounded-2 border border-solid border-gray hover:border-2 hover:border-blue-1'
      >
        {/* //TODO: separate component for text area */}
        <textarea
          className='h-100% text-style h-full w-full border-none p-2 
          font-normal leading-6 text-gray-700'
          value={defaultValue}
          onChange={(e) => inputHandler(e.target.value)}
          id={id}
        />
      </div>
    </div>
  );
};
