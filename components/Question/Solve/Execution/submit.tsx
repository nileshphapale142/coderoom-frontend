'use client';

import { createSubmission } from '@/app/action';
import {
  currInfoPage,
  selectedLanguage,
  submissionMade,
  userCode,
} from '@/Recoil';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const SubmitBtn = ({ qid }: { qid: number }) => {
  const code = useRecoilValue(userCode);
  const language = useRecoilValue(selectedLanguage);
  const setPage = useSetRecoilState(currInfoPage);
  const setSubMade = useSetRecoilState(submissionMade);

  const handleSubmission = async () => {
    const submission = {
      code: {
        language: language.toLowerCase(),
        code: btoa(code),
      },
      questionId: qid,
    };

    const { data, status } = await createSubmission(submission);

    setSubMade((prev) => prev + 1);

    if (status === 201) setPage(2);
    else if (status === 401) alert('unauthorized to make submission');
    else if (status === 403) alert("time's up!");
    else if (status === 400) alert('bad request');
    else if (status === 500) alert('server problem');
    else alert('unkown problem');
  };

  return (
    <div
      className='flex w-[5rem] items-center justify-center   rounded-br-2 rounded-tr-2 bg-gray-300 text-green-600
                      transition-all hover:bg-green-600 hover:text-gray-300'
    >
      <button
        className='flex w-full items-center justify-center p-2'
        onClick={handleSubmission}
      >
        Submit
      </button>
    </div>
  );
};
