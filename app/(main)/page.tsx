import { Courses } from '@/components/Home';
import { CreateClassPopup, JoinClassPopUp } from '@/components/Popups';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function fetchCourses() {
  const cookieStore = cookies();
  if (!cookieStore.get('access_token')) {
    redirect('/auth/signin');
    return {
      props: {
        data: null,
      },
    };
  }
  try {
    const response = await axios.get('http://localhost:5000/user/getCourses', {
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
    console.log('Error message : ', err);
    return {
      props: {
        data: null,
      },
    };
  }
}

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
