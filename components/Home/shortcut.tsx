import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ShortcutProps {
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const Shortcut = (props: ShortcutProps) => {
  return (
    <span>
      <div
        className='relative z-0 box-border inline-block h-12 
                      w-12 cursor-pointer select-none overflow-visible border-none bg-transparent
                      fill-inherit p-3 text-2xl text-inherit no-underline outline-none will-change-t-o'
      >
        <div
          className='pointer-events-none absolute left-0 top-0 z-[-1] 
                        h-full w-full'
        ></div>
        <span>
          <Image
            width='24'
            height='24'
            src={props.imageSrc}
            alt={props.imageAlt}
          />
        </span>

        <Link
          href={props.href}
          className='absolute left-0 top-0 h-full w-full 
                        text-[#2962ff] no-underline outline-none'
        />
      </div>
    </span>
  );
};

export default Shortcut;
