import React from 'react';
import { JoinCourse } from '../Buttons';

export const PlusSign = () => {
  return (
    <div className='mr-2 flex h-6 shrink-0 flex-row items-center'>
      <div>
        <div className='my-0 ml-2 mr-4'>
          <span>
            <JoinCourse/>
          </span>
        </div>
      </div>
    </div>
  );
};