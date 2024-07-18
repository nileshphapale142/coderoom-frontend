'use client';

export const SubmitBtn = () => {
  return (
    <div
      className='flex w-[5rem] items-center justify-center   rounded-br-2 rounded-tr-2 bg-gray-300 text-green-600
                      transition-all hover:bg-green-600 hover:text-gray-300'
    >
      <button className='flex w-full items-center justify-center p-2'>
        Submit
      </button>
    </div>
  );
};
