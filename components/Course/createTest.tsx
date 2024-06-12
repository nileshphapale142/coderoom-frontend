import React from 'react';

export const CreateTest = () => {
  return (
    <div className='flex items-center justify-center screen120:mb-4'>
      <div className='h-12 w-full'>
        <div className='relative overflow-visible'>
          <div>
            <div className='inline'>
              {/* // TODO: add font styles here */}
              <button
                className='m-0 h-12 w-full rounded-25 bg-violet-500 py-0 pl-4 pr-5 font-normal
                              text-white shadow-lg transition-all duration-300 hover:bg-violet-600'
              >
                <span className='relative'>Create new test</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
