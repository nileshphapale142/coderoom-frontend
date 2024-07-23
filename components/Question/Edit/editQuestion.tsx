'use client';

import {
  exampleTestCases,
  isExampleTestCasesFilled,
  isQueInfoFilled,
  isSolutinCodeFilled,
  isTestCasesFilled,
  newQuestion,
  solutionCode,
  testCases,
} from '@/Recoil';
import {
  createQuestionAction,
  editQuestionAction,
  fetchQuestion,
} from '@/app/action';
import { SimpleButton } from '@/components/Buttons';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { EditQPage1, EditQPage2, EditQPage3, EditQPage4 } from './';
import { QuestionBox } from '@/components/Test';

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

interface QuestionFetched {
  id: number;
  name: string;
  statement: string;
  points: number;
  testId: number;
  exampleTestCases: {
    id: number;
    input: string;
    output: string;
    explaination: string;
  }[];
  testCases: {
    id: number;
    input: string;
    output: string;
  };
  solution: {
    id: number;
    language: string;
    code: string;
  }[];
}

export const EditQuestion = ({
  cid,
  tid,
  qid,
}: {
  cid: number;
  tid: number;
  qid: number;
}) => {
  const [pageNo, setPageNo] = useState(0);

  const [que, setQue] = useRecoilState(newQuestion);
  const [code, setCode] = useRecoilState(solutionCode);
  const [tcs, setTcs] = useRecoilState(testCases);
  const [etcs, setEtcs] = useRecoilState(exampleTestCases);
  const [question, setQuestion] = useState<QuestionFetched | null>(null);

  const router = useRouter();

  useEffect(() => {
    //todo: error handling;
    fetchQuestion(qid)
      .then(({ data }) => setQuestion(data.question))
      .catch(() => alert('Error occurred'));
  }, []);

  useEffect(() => {
    if (!question) return;

    setQue({
      name: question.name,
      description: question.statement,
      points: question.points.toString(),
    });

    setCode({
      code: atob(question.solution[0].code),
      language: question.solution[0].language,
    });

    setTcs(atob(question.testCases.input));

    setEtcs(
      question.exampleTestCases.map((etc, idx) => {
        return { ...etc, id: idx };
      })
    );
  }, [question]);

  const pages: React.ReactNode[] = [
    <EditQPage1 />,
    <EditQPage2 />,
    <EditQPage3 />,
    <EditQPage4 />,
  ];

  const validInputs = [
    useRecoilValue(isQueInfoFilled),
    useRecoilValue(isSolutinCodeFilled),
    useRecoilValue(isTestCasesFilled),
    useRecoilValue(isExampleTestCasesFilled),
  ];

  const incrementPageNo = () => {
    if (!validInputs[pageNo]) alert('fill the fields with valid values');
    else setPageNo((prev) => prev + 1);
  };

  const decrementPageNo = () => {
    setPageNo((prev) => prev - 1);
  };

  const handleEdit = async () => {
    if (!validInputs[pageNo]) {
      alert('fill all the fields or atleast add one test case');
      return;
    }

    const updatedQuestion: Question = {
      id: question?.id,
      name: que.name,
      description: que.description,
      points: parseInt(que.points),
      testCases: btoa(tcs),
      solutionCode: {
        language: code.language,
        code: btoa(code.code),
      },
      exampleTestCases: etcs.map((etc) => {
        return {
          input: etc.input,
          output: etc.output,
          explaination: etc.explaination,
        };
      }),
      testId: tid,
    };

    const { data, status } = await editQuestionAction(updatedQuestion);

    if (status === 200) {
      setQue({
        name: '',
        description: '',
        points: '',
      });

      setCode({
        code: '',
        language: '',
      });

      setTcs('');

      setEtcs([]);

      router.push(`/c/${cid}/t/${tid}`);
    } else if (status === 400) alert('data format not correct');
    else if (status === 401) router.push(`/auth/signin`);
    else if (status === 403) {
      alert('Not authorized to edit');
      router.push(`/`);
    } else if (status === 500) router.push('/');
    else {
      alert('some error occured');
      router.push(`/c/${cid}/t/${tid}`);
    }
  };

  //TODO: rethink on what inputs to be taken for new question especially template code and test cases

  return (
    <div className='relative left-0 top-0 block bg-[#f0f4f9]'>
      <div className='relative mx-auto my-0 flex w-calc-24r max-w-70r flex-col px-4 py-6'>
        <div
          className='relative mt-4 flex h-30r w-full  flex-col rounded-7
                border-none bg-white'
        >
          {pages[pageNo]}
        </div>

        <div className='mt-5 flex w-full flex-grow items-center justify-center'>
          <div className='flex w-1/2 flex-row items-center justify-evenly p-4'>
            {pageNo != 0 && (
              <SimpleButton name={'Back'} action={decrementPageNo} />
            )}

            {pageNo !== pages.length - 1 ? (
              <SimpleButton name={'Next'} action={incrementPageNo} id='next' />
            ) : (
              <SimpleButton name={'Edit'} action={handleEdit} id='edit' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
