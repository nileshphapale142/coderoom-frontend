import { Courses } from '@/components/Home';
import { CreateClassPopup, JoinClassPopUp } from '@/components/Popups';
import { cookies } from 'next/headers';
import { fetchCourses } from './action';



const Home = async () => {
  const { props } = await fetchCourses();
  const courses = props.data?.courses;

  return (
    <>
      <Courses courses={courses} />

      {cookies().get('is_teacher')?.value === 'true' ? (
        <CreateClassPopup />
      ) : (
        <JoinClassPopUp />
      )}
    </>
  );
};

export default Home;
