'use server';

import { backendApi } from '@/api';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const fetchLeaderboard = async (cid: number, tid: number) => {
  try {
    if (!cookies().get('access_token')) {
      redirect('/auth/signin');
      return {
        data: null,
      };
    }

    const response = await backendApi.get(
      `/test/${tid}/leaderboard`,
      {
      withCredentials: true,
        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

    const data = response.data;

    return {
      data,
    };
  } catch (err: any) {
    console.log('error: ', err);
    if (err.response.status === 404) redirect('/not-found');
    else if (err.response.status === 401) redirect(`/c/${cid}`);
    else if (err.response.status === 500) redirect(`/c/${cid}`);

    return {
      data: null,
      status: err.response.status,
    };
  }
};
