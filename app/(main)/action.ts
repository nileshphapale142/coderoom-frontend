'use server';

import { backendApi } from '@/api';
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
        status: -1
      }
    };
  }
  try {
    const response = await backendApi.get('/user/getCourses', {
      withCredentials: true,

      headers: {
        Authorization: `Bearer ${cookieStore.get('access_token')?.value}`,
      },
    });

    const data = response.data;

    return {
      props: {
        data,
        status: 200
      },
    };
  } catch (err: any) {
    //todo: error handling
    console.log('Error message : ', err);
    return {
      props: {
        data: null,
        status: err?.response?.status
      },
    };
  }
}
