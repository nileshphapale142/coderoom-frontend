'use client';

import { CodeBlock } from '@/components/Utils';
import { useState } from 'react';


export const Submission = ({
  message,
  lang,
  time,
  code,
  isDanger,
}: {
  message: string;
  lang: string;
  code: string;
  time: string;
  isDanger: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //todo: submitted code section on button click

    <div className='mt-2 rounded-3 border border-solid border-gray overflow-hidden w-auto transition-all'>
      <button
        className={`text-style  flex w-full
           flex-row  p-2 hover:bg-gray-200 ` + (isOpen ? 'border-b-0625 border-b-stone-300' : '') }
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`flex w-2/5 items-start justify-start text-base 
            font-semibold text-${isDanger ? 'red' : 'green'}-600`}
        >
          <span>{message}</span>
        </div>

        <div
          className='inline-block w-1/5 text-base 
            font-medium text-gray-700'
        >
          <span>{lang}</span>
        </div>

        <div
          className='inline-block w-2/5 text-base
            font-normal text-gray-600'
        >
          <span>{time}</span>
        </div>
      </button>
      {isOpen && (
        <div>
          <CodeBlock value={code} language={lang}/>
        </div>
      )}
    </div>
  );
};
