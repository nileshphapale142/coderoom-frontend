import React from 'react';
import CourseBox from './courseBox';
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { isUserTeacher } from '@/Recoil';

type Teacher = {
  name: string;
};

interface Course {
  name: string;
  description: string;
  id: number;
  code: string;
  teacherId: number;
  teacher?: Teacher;
}

export const Courses = () => {
  const [courses, setCourses] = React.useState<Course[]>([]);
  const setIsTeacher = useSetRecoilState(isUserTeacher)
  const router = useRouter()

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('access_token');

      if (!token) {
        throw new Error('No access token found');
      }

      const response = await axios.get('/u/c/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      setCourses(data.courses);
      setIsTeacher(data.isTeacher)
    } catch (err:any) {
      if (err.response) {
        if (err.response.status === 401) router.push('/auth/signin')
          else if(err.response.status === 500) alert('Some problem at server') 
            else alert('error: '+ err.response.message)
      }
      else alert('Unknown Problem');
    }
  };

  React.useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className='visible static flex h-auto min-h-0 opacity-100 contain-style'>
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
                {courses.map((course) => (
                  <CourseBox {...course} teacher={course.teacher?.name} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
