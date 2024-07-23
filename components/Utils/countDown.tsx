'use client';

import React, { useState, useEffect } from 'react';

interface TimerProps {
  endTime: Date;
}

const Count = ({ time, type }: { time: string; type: string }) => {
  return (
    <div className='google-bw-bg mx-1 inline-block w-24 rounded-3 p-4 '>
      <div className='text-style block p-1'>
        <div className='flex items-center justify-center text-3xl'>{time}</div>
        <div className=' flex items-center justify-center'>{type}</div>
      </div>
    </div>
  );
};

export const CountDown: React.FC<TimerProps> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(
          `${days.toString().padStart(2, '0')}:${hours
            .toString()
            .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`
        );
      } else {
        setTimeLeft('00:00:00:00');
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const times = timeLeft.split(':');

  return (
    <div className='flex w-full justify-center'>
      <div className='w-full'>
        <Count time={times[0]} type='days' />
        <Count time={times[1]} type='hours' />
        <Count time={times[2]} type='minutes' />
        <Count time={times[3]} type='seconds' />
      </div>
    </div>
  );
};
