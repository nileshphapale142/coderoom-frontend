import React from 'react';
import CourseBox from './courseBox';

interface Course {
  name: string;
  description: string;
  id: number;
  code: string;
  teacherId: number;
  teacher?: {
    name: string;
  };
}

export const Courses = ({ courses }: { courses: Course[] }) => {
  return (
    <div className='google-bw-bg absolute visible flex h-auto min-h-full w-full opacity-100 contain-style'>
      <div
        className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full 
        min-w-0 flex-1-auto '
      >
        <div className='relative z-auto h-auto min-h-full '>
          {/* // TODO: add backface-visibility: hidden */}

          <div className='h-[4.0625rem] flex-shrink-0'></div>

          <div>
            <div>
              <ol className='flex flex-wrap pl-6 pt-6 '>
                {courses?.map((course, id) => (
                  <CourseBox
                    key={id}
                    {...course}
                    teacher={course.teacher?.name}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
