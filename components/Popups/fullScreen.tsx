'use client';

import { isFullScreenPopUpOpen } from '@/Recoil';
import { useRecoilState } from 'recoil';
import { CloseBtn } from '../Buttons';
import { usePathname } from 'next/navigation';
import { EditCourse } from './editCourse';
import { MainNavFiller } from '../Utils';

interface FullScreenPopUpProps {
  course?: {
    name: string;
    description: string;
  };
  test?: {
    name: string;
  };
}

export const FullScreenPopUp = (props: FullScreenPopUpProps) => {
  const [isOpen, setIsOpen] = useRecoilState(isFullScreenPopUpOpen);
  const path = usePathname();

  return (
    isOpen && (
      <div className='google-bw-bg fixed bottom-0 left-0 right-0 top-0 z-[999]'>
        <div className='flex h-full flex-col'>
          <MainNavFiller/>
          
          <div className='flex w-full justify-end h-12'>
            <div className='w-10 h-10 rounded-full hover:bg-gray-200 mr-8'>
              <CloseBtn action={() => setIsOpen(false)} />
            </div>
          </div>
          
          <div className='relative flex-grow'>
            {path.includes('t') ? (
              <></>
            ) : (
              <EditCourse
                name={props.course?.name || ''}
                description={props.course?.description || ''}
              />
            )}
          </div>
        </div>
      </div>
    )
  );
};
