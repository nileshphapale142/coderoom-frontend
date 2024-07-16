import {
  CourseInfo,
  CreateTest,
  ShortLearderboard,
  TestBox,
} from '@/components/Course';
import { CreateTestPopUp } from '@/components/Popups';
import { CourseNavFiller, MainNavFiller } from '@/components/Utils';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface Course {
  id: number;
  name: string;
  description: string;
  code: string;
  teacherId: number;
  teacher: {
    name: string;
  };
  tests: { id: number; name: string; startTime: string }[];
  leaderboard: { name: string; points: number }[];
}


export async function fetchCourseInfo(id: number) {
  const cookieStore = cookies();
  try {
    if (!cookieStore.get('access_token')) {
      redirect('/auth/signin');
      return {
        props: {
          data: null,
        },
      };
    }

    const response = await axios.get(`http://localhost:5000/course/${id}`, {
      headers: {
        Authorization: `Bearer ${cookieStore.get('access_token')?.value}`,
      },
    });

    const data = response.data;
    return {
      props: {
        data,
      },
    };
  } catch (err: any) {
    //todo: error handling
    console.error('Error fetching course data:', err?.response.message);
    return {
      props: {
        data: null,
      },
    };
  }
}

const CourseDash = async ({ params: { id } }: { params: { id: number } }) => {
  const { props } = await fetchCourseInfo(id);
  const { course }: { course: Course } = props.data;
  const isTeacher = cookies().get('is_teacher')?.value === 'true'

  return (
    <>
      <div className='visible static flex h-auto min-h-0 overflow-y-hidden opacity-100 contain-style'>
        <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
          <div className='min-h-auto relative z-auto h-auto backface-visibility-h '>
            <MainNavFiller />
            <CourseNavFiller />
            <div className='mx-auto my-0 flex w-calc-12 max-w-625r flex-col '>
              <CourseInfo
                name={course.name}
                description={course.description}
                code={course.code}
                teacher={course.teacher.name}
              />

              <div className='mt-6 flex'>
                <main className='m-[-1rem] flex-grow overflow-hidden p-4'>
                  <div>
                    <div>
                    
                      {isTeacher ? <CreateTest/> : <></>}

                      <div className='mb-8'>
                        <div>
                          <div className='relative'>
                            <div>
                              <ol>
                              {course.tests.map((test, idx)  => 
                                <TestBox key={idx}
                                  test={test}
                                  courseId={course.id}
                                />
                              )}
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>

                <ShortLearderboard leaderboard={course.leaderboard} courseId={course.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isTeacher ? <CreateTestPopUp /> : <></> }
      
    </>
  );
};

export default CourseDash;
