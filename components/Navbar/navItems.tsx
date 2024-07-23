'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { AnchorIcon } from '../Icons';
import Link from 'next/link';
import { getCourseName, getTestName } from '@/app/action';

export const NavItems = () => {
  const path = usePathname();
  const [courseName, setCourseName] = useState<string | null>(null);
  const [testName, setTestName] = useState<string | null>(null);

  const pathArray = useMemo(
    () =>
      path
        .split('/')
        .filter((val) => val.length !== 0 && val !== 'c' && val !== 't')
        .map((val) => parseInt(val)),
    [path]
  );

  useEffect(() => {
    if (pathArray.length === 0) {
      setCourseName(null);
      setTestName(null);
      return;
    }

    getCourseName(pathArray[0])
      .then(({ name, status }) => {
        if (status === 200) {
          setCourseName(name);
          return;
        }
      })
      .catch((err) => console.log(err));

    if (pathArray.length === 1) return;

    getTestName(pathArray[1])
      .then(({ name, status }) => {
        if (status === 200) {
          setTestName(name);
          return;
        }
      })
      .catch((err) => console.log(err));
  }, [pathArray]);

  if (pathArray.length == 0) return <></>;

  return (
    <>
      {courseName && (
        <>
          <span className='mx-2 flex items-center fill-black text-black'>
            <AnchorIcon />
          </span>
          <Link
            className='mx-2 ml-[.125rem] flex max-w-96 flex-col justify-center
          overflow-hidden text-black transition-all hover:text-blue-900 hover:underline
          '
            href={'/c/1'}
          >
            <span className='text-style block overflow-hidden text-ellipsis whitespace-nowrap text-lg font-normal'>
              {courseName}
            </span>
          </Link>
        </>
      )}

      {testName && (
        <>
          <span className='mx-2 flex items-center fill-black text-black'>
            <AnchorIcon />
          </span>
          <Link
            className='mx-2 ml-[.125rem] flex max-w-96 flex-col justify-center overflow-hidden
          text-black transition-all hover:text-blue-900 hover:underline'
            href={'/c/1/t/1'}
          >
            <span className='text-style block overflow-hidden text-ellipsis whitespace-nowrap text-lg font-normal  '>
              {testName}
            </span>
          </Link>
        </>
      )}
    </>
  );
};
