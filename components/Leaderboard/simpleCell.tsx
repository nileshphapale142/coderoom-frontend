import React from 'react';

export const SimpleCell = ({
  name,
  widthReq = false,
  isNumber = false,
  color = 'gray-900',
}: {
  name: string;
  widthReq?: boolean;
  isNumber?: boolean;
  color?: string;
}) => {
  return (
    <th className='z-3 relative h-full translate-x-0 p-0'>
      <div
        className={
          'text-style table-box box-border flex items-end ' +
          ' justify-center font-normal tracking-just-sm text-gray-500 ' +
          (widthReq ? ' w-[8.0625rem] ' : ' ')
        }
      >
        <div className='px-6'>
          <div
            className={
              'relative h-auto min-w-10 max-w-70 whitespace-nowrap ' +
              '  py-2 text-center text-sm leading-5 outline-none ' +
              (isNumber
                ? ` text-${color} font-bold `
                : ` text-${color} font-normal`)
            }
          >
            <span className='relative flex w-full justify-center overflow-hidden leading-8'>
              {name}
            </span>
          </div>
        </div>
      </div>
    </th>
  );
};
