'use client';

import { isFullScreenPopUpOpen } from '@/Recoil';
import { useRecoilState } from 'recoil';
import { CloseBtn } from '../Buttons';
import { usePathname } from 'next/navigation';
import { EditCourse } from './editCourse';
import { MainNavFiller } from '../Utils';
import { EditTest } from './editTest';

interface Test {
  name: string;
  id: number;
  startTime: string;
  endTime: string;
  allowedLanguages: string[];
  evaluationScheme: string;
  visibility: string;
  courseId: number;
}

interface FullScreenPopUpProps {
  course?: {
    id: number;
    name: string;
    description: string;
  };
  test?: Test;
}

export const FullScreenPopUp = (props: FullScreenPopUpProps) => {
  const [isOpen, setIsOpen] = useRecoilState(isFullScreenPopUpOpen);
  const path = usePathname();

  return (
    isOpen && (
      <div className='google-bw-bg fixed bottom-0 left-0 right-0 top-0 z-[999]'>
        <div className='flex h-full flex-col'>
          <MainNavFiller />

          <div className='flex h-12 w-full justify-end'>
            <div className='mr-8 h-10 w-10 rounded-full hover:bg-gray-200'>
              <CloseBtn action={() => setIsOpen(false)} />
            </div>
          </div>

          <div className='relative flex-grow'>
            {path.includes('t') ? (
              props.test && <EditTest test={props.test} />
            ) : (
              props.course && 
              <EditCourse
                id={props.course.id}
                name={props.course.name}
                description={props.course.description}
              />
            )}
          </div>
        </div>
      </div>
    )
  );
};
