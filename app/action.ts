'use server';

import { backendApi } from '@/api';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface Test {
  id?: number;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  visibility: string;
  evaluationScheme: string;
  languages: string[];
  courseId: number;
}

interface ExampleTestCase {
  input: string;
  output: string;
  explaination: string;
}

interface Code {
  language: string;
  code: string;
}

interface Question {
  id?: number;
  name: string;
  description: string;
  points: number;
  testCases: string; //base64
  solutionCode: Code; //base64 code
  exampleTestCases: ExampleTestCase[];
  testId: number;
}

interface Submission {
  code: {
    language: string;
    code: string;
  };
  questionId: number;
}

export async function SignOut() {
  cookies().delete('access_token');
  cookies().delete('is_teacher');
}

export const createClassAction = async (info: {
  name: string;
  description: string;
}) => {
  if (!cookies().get('access_token'))
    return {
      data: null,
      status: 401,
    };

  try {
    const data = {
      name: info.name,
      description: info.description,
    };

    const response = await backendApi.post(
      '/course/create',
      data,
      {
        withCredentials: true,

        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

    revalidatePath('/');

    const resData = response.data;

    return { data: resData, status: 201 };
  } catch (err: any) {
    //todo: error handling
    console.log(err);

    return {
      data: null,
      status: err?.response?.status,
    };
  }
};

export const joinClassAction = async (data: { courseCode: string }) => {
  if (!cookies().get('access_token')) {
    return {
      data: null,
      status: 401,
    };
  }
  try {
    const response = await backendApi.post(
      '/course/addStudent',
      data,
      {
        withCredentials: true,

        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

    const resData = response.data;

    revalidatePath('/');

    return { data: resData, status: 201 };
  } catch (err: any) {
    console.log(err);
    //todo: handle error
    return {
      data: null,
      status: err?.response?.status,
    };
  }
};

export const createTestAction = async (test: Test) => {
  try {
    if (!cookies().get('access_token'))
      return {
        data: null,
        status: 401,
      };

    const response = await backendApi.post('/test/new', test, {
      withCredentials: true,

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

export const createQuestionAction = async (question: Question) => {
  try {
    if (!cookies().get('access_token')) {
      return {
        data: null,
        status: 401,
      };
    }

    const response = await backendApi.post(
      '/question/new',
      question,
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
      status: 201,
    };
  } catch (err: any) {
    console.log(err);
    return {
      data: null,
      status: err?.response?.status,
    };
  }
};

export const createSubmission = async (submission: Submission) => {
  if (!cookies().get('access_token')) {
    return {
      data: null,
      status: 401,
    };
  }

  try {
    const response = await backendApi.post(
      '/submission/new',
      submission,
      {
        withCredentials: true,

        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

    const resData = response.data;

    return { data: resData, status: 201 };
  } catch (err: any) {
    console.log(err);
    //todo: handle error
    return {
      data: null,
      status: err?.response?.status,
    };
  }
};

export const getSubmissions = async (qid: number) => {
  if (!cookies().get('access_token')) {
    return {
      data: null,
      status: 401,
    };
  }

  try {
    const response = await backendApi.get(
      `/submission/user/question/${qid}`,
      {
        withCredentials: true,

        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

    const resData = response.data;

    return { data: resData, status: 200 };
  } catch (err: any) {
    console.log(err);
    //todo: handle error
    return {
      data: null,
      status: err?.response?.status,
    };
  }
};

export const fetchQuestionList = async (tid: number) => {
  try {
    if (!cookies().get('access_token')) {
      redirect('/auth/sign');
      return {
        data: null,
      };
    }

    const response = await backendApi.get(`/test/${tid}`, {
      withCredentials: true,

      headers: {
        Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });

    const data = response.data;

    return {
      data,
    };
  } catch (err: any) {
    //todo: error handling
    console.log(err);

    return {
      data: null,
      status: err.response.status,
    };
  }
};

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

export const editQuestionAction = async (question: Question) => {
  try {
    if (!cookies().get('access_token')) {
      return {
        data: null,
        status: 401,
      };
    }

    const response = await backendApi.patch(
      `/question/${question.id}/edit`,
      question,
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
      status: 200,
    };
  } catch (err: any) {
    console.log(err);
    console.log(err?.response?.data);
    return {
      data: null,
      status: err?.response?.status,
    };
  }
};

export const editClassAction = async (info: {
  id: number;
  name: string;
  description: string;
}) => {
  if (!cookies().get('access_token'))
    return {
      data: null,
      status: 401,
    };

  try {
    const data = {
      name: info.name,
      description: info.description,
    };

    const response = await backendApi.patch(
      `/course/${info.id}/edit`,
      data,
      {
        withCredentials: true,

        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

    revalidatePath('/');
    revalidatePath(`/c/${info.id}`);

    const resData = response.data;

    return { data: resData, status: 200 };
  } catch (err: any) {
    //todo: error handling
    console.log(err);
    console.log(err?.response?.message);

    return {
      data: null,
      status: err?.response?.status,
    };
  }
};

export const editTestAction = async (test: Test) => {
  try {
    if (!cookies().get('access_token'))
      return {
        data: null,
        status: 401,
      };

    const response = await backendApi.patch(
      `/test/${test.id}/edit`,
      test,
      {
        withCredentials: true,

        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

    const data = response.data;

    revalidatePath(`/c/${test.courseId}/t/${test.id}`);
    revalidatePath(`/c/${test.courseId}`);

    return { data, status: 200 };
  } catch (err: any) {
    return {
      data: null,
      status: err.response.status,
    };
  }
};

export const getCourseName = async (id: number) => {
  try {
    if (!cookies().get('access_token'))
      return {
        name: null,
        status: 401,
      };

    const response = await backendApi.get(
      `/course/${id}/name`,
      {
        withCredentials: true,

        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

    return { name: response.data?.name, status: 200 };
  } catch (err: any) {
    console.log(err);
    return { name: null, status: err?.resposne?.status };
  }
};

export const getTestName = async (id: number) => {
  try {
    if (!cookies().get('access_token'))
      return {
        name: null,
        status: 401,
      };

    const response = await backendApi.get(`/test/${id}/name`, {
      withCredentials: true,

      headers: {
        Authorization: `Bearer ${cookies().get('access_token')?.value}`,
      },
    });

    return { name: response.data?.name, status: 200 };
  } catch (err: any) {
    return { name: null, status: err?.resposne?.status };
  }
};
