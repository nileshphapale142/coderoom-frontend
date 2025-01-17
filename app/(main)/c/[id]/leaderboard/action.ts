'use server';

import { backendApi } from '@/api';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const fetchLeaderboard = async (cid: number) => {
  try {
    if (!cookies().get('access_token')) {
      redirect('/auth/signin');
      return {
        data: null,
      };
    }

    const response = await backendApi.get(
      `/course/${cid}/leaderboard`, 
      {
        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
        withCredentials: true
      }
    );

    const data = response.data;

    return {
      data,
    };
  } catch (err: any) {
    console.log('err : ', err);
    return {
      data: null,
    };
  }
};
