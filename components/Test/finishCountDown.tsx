'use client';

import React from 'react';
import { useTimer } from '../Hooks';

interface TimerProps {
  endTime: Date;
}

const Count = ({ time }: { time: string; }) => {
  return (
    <div className='google-bw-bg mx-1 inline-block w-auto rounded-3 p-3 '>
      <div className='text-style block '>
        <div className='flex items-center justify-center text-lg'>{time}</div>
      </div>
    </div>
  );
};

export const FinishCountDown: React.FC<TimerProps> = ({ endTime }) => {
  const timeLeft = useTimer(endTime);

  const times = timeLeft.split(':');
  

  return (
    <div className='flex w-full justify-center'>
      <div className='w-full'>
        <Count time={times[1]} />
        <span className='text-style text-heading'>:</span>
        <Count time={times[2]} />
        <span className='text-style text-heading'>:</span>
        <Count time={times[3]} />
      </div>
    </div>
  );
};
