'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

interface Test {
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  visibility: string;
  evaluationScheme: string;
  languages: string[];
  courseId: number;
}

export const createTestAction = async (test: Test) => {
  try {
    if (!cookies().get('access_token'))
      return {
        data: null,
        status: 401,
      };

    const response = await axios.post('http://localhost:5000/test/new', test, {
      headers: {
        Authorization: `Bearer ${cookies().get('access_token')?.value}`,
      },
    });

    const data = response.data;

    return { data, status: 201 };
  } catch (err: any) {
    return {
      data: null,
      status: err.response.status,
    };
  }
};
