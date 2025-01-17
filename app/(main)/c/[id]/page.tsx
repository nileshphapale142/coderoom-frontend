import {
  CourseInfo,
  CreateTest,
  ShortLearderboard,
  TestBox,
} from '@/components/Course';
import {
  CreateTestPopUp,
  EditCourse,
  FullScreenPopUp,
} from '@/components/Popups';
import { CourseNavFiller, MainNavFiller } from '@/components/Utils';
import { cookies } from 'next/headers';
import { fetchCourseInfo } from './action';
import Loading from '../loading';

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

const CourseDash = async ({ params: { id } }: { params: { id: number } }) => {
  const { props } = await fetchCourseInfo(id);

  if (!props.data?.course) return <></>;

  const { course }: { course: Course } = props.data;

  const isTeacher = cookies().get('is_teacher')?.value === 'true';

  course.tests.sort(
    (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
  );

  return (
    <>
      <div className='google-bw-bg visible absolute flex min-h-full w-full contain-style'>
        <div className='relative z-auto block min-h-full min-w-0 flex-1-auto'>
          <div className='min-h-auto relative z-auto flex h-auto flex-col backface-visibility-h'>
            <MainNavFiller />
            <CourseNavFiller />
            <div className='mx-auto my-0 flex h-full w-calc-12 max-w-625r flex-col'>
              <CourseInfo
                name={course.name}
                description={course.description}
                code={course.code}
                teacher={course.teacher.name}
              />

              <div className='mt-6 flex h-full'>
                <main className='m-[-1rem] h-full flex-grow p-4 '>
                  <div>
                    <div>
                      {isTeacher ? <CreateTest /> : <></>}

                      <div className='mb-8'>
                        <div>
                          <div className='relative h-full'>
                            <div>
                              <ol className='h-full'>
                                {course.tests.map((test, idx) => (
                                  <TestBox
                                    key={idx}
                                    test={test}
                                    courseId={course.id}
                                    isTeacher={isTeacher}
                                  />
                                ))}
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>

                <ShortLearderboard
                  leaderboard={course.leaderboard}
                  courseId={course.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isTeacher ? <CreateTestPopUp courseId={id} /> : <></>}
      <FullScreenPopUp>
        <EditCourse
          id={course.id}
          name={course.name}
          description={course.description}
        />
      </FullScreenPopUp>
    </>
  );
};

export default CourseDash;
