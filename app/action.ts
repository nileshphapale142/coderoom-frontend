'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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

interface ExampleTestCase {
  input: string;
  ouput: string;
  explaination: string;
}

interface Code {
  language: string;
  code: string;
}

interface Question {
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

    const response = await axios.post(
      'http://localhost:5000/course/create',
      data,
      {
        headers: {
          Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        },
      }
    );

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
    const response = await axios.post(
      'http://localhost:5000/course/addStudent',
      data,
      {
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

export const createQuestionAction = async (question: Question) => {
  try {
    if (!cookies().get('access_token')) {
      return {
        data: null,
        status: 401,
      };
    }

    const response = await axios.post(
      'http://localhost:5000/question/new',
      question,
      {
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
    const response = await axios.post(
      'http://localhost:5000/submission/new',
      submission,
      {
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
    const response = await axios.get(
      `http://localhost:5000/submission/user/question/${qid}`,
      {
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

    const response = await axios.get(`http://localhost:5000/test/${tid}`, {
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