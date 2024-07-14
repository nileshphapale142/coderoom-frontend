import React from 'react';

export const BasicTextArea = ({ width = '40rem', height= "10rem"}: { width?: string, height?:string }) => {
  return (
    <div className='mt-2 flex h-auto flex-grow overflow-y-auto overflow-x-hidden'
    style={{width: width, height:height}}>
      {/* //TODO: onclick border chagnae not hover */}
      <div
        className='border-gray relative flex w-full flex-grow items-start 
                      justify-start overflow-y-auto overflow-x-hidden rounded-2 border border-solid hover:border-2 hover:border-blue-1'
      >
        {/* //TODO: separate component for text area */}
        <textarea
          className='h-100% text-style h-full w-full border-none p-2 
          font-normal leading-6 text-gray-700'
        />
      </div>
    </div>
  );
};
