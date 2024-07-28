'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function fetchCourseInfo(id: number) {
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
    const response = await axios.get(`https://coderoom-backend.onrender.com/course/${id}`, {
    withCredentials: true,
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
