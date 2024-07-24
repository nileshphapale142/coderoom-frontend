'use client';

import { useState } from 'react';

export const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const requestFullScreen = async () => {
    const element = document.documentElement; // full-screen the entire document
    if (!isFullScreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
        setIsFullScreen(true);
      }
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <button
      className='inline-block rounded-2 p-2 hover:bg-gray-200 '
      onClick={requestFullScreen}
    >
      <div className='flex items-center justify-center '>
        {isFullScreen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='1em'
            height='1em'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.586 15H4a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0v-3.586l-4.293 4.293a1 1 0 01-1.414-1.414L7.586 15zm8.828-6H20a1 1 0 110 2h-6a1 1 0 01-1-1V4a1 1 0 112 0v3.586l4.293-4.293a1 1 0 111.414 1.414L16.414 9z'
              clipRule='evenodd'
            ></path>
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='14'
            height='14'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M6.414 19H10a1 1 0 110 2H4a1 1 0 01-1-1v-6a1 1 0 112 0v3.586l4.293-4.293a1 1 0 011.414 1.414L6.414 19zM17.586 5H14a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0V6.414l-4.293 4.293a1 1 0 01-1.414-1.414L17.586 5z'
              clipRule='evenodd'
            ></path>
          </svg>
        )}
      </div>
    </button>
  );
};
