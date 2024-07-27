'use client';

import { isFullScreenPopUpOpen } from '@/Recoil';
import { useRecoilState } from 'recoil';
import { CloseBtn } from '../Buttons';
import { MainNavFiller } from '../Utils';

export const FullScreenPopUp = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useRecoilState(isFullScreenPopUpOpen);

  return isOpen ? (
    <div className='google-bw-bg fixed bottom-0 left-0 right-0 top-0 z-[999]'>
      <div className='flex h-full flex-col'>
        <MainNavFiller />

        <div className='flex h-12 w-full justify-end'>
          <div className='mr-8 h-10 w-10 rounded-full hover:bg-gray-200'>
            <CloseBtn action={() => setIsOpen(false)} />
          </div>
        </div>

        <div className='relative flex-grow'>{children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};
