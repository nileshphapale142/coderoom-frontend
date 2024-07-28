'use server';

import { backendApi } from '@/api';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const fetchQuestion = async (qid: number) => {
  if (!cookies().get('access_token')) {
    redirect('/auth/signin');
    return {
      data: null,
    };
  }

  try {
    const response = await backendApi.get(`/question/${qid}`, {
      withCredentials: true,

      headers: {
        Authorization: `Bearer ${cookies().get('access_token')?.value}`,
      },
    });

    const data = response.data;
    return { data };
  } catch (err) {
    console.log(err);
    // todo: error handling
    return { data: null };
  }
};
