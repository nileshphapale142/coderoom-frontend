'use client';

import {
  currInfoPage,
  selectedLanguage,
  testCaseInput,
  testCasesOutput,
  userCode,
} from '@/Recoil';
import { langValue } from '@/Utils';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type LangKey = 'C' | 'C++' | 'Java' | 'Python';

interface JudgeResponse {
  compile_output: string | null;
  memory: number;
  message: string | null;
  status: { id: number; description: string };
  stderr: string | null;
  stdout: string | null;
  time: number;
  token: string;
}

export const RunBtn = () => {
  const lang = useRecoilValue(selectedLanguage);
  const code = useRecoilValue(userCode);
  const testIn = useRecoilValue(testCaseInput);
  const setTestOut = useSetRecoilState(testCasesOutput);
  const setPage = useSetRecoilState(currInfoPage)

  const runCode = async () => {
    setPage(4)
    
    const submission = {
      language_id: langValue[lang as LangKey].id,
      source_code: btoa(code),
      stdin: btoa(testIn),
    };

    try {
      const response = await axios.post(
        `https://${process.env.X_RAPIDAPI_HOST}/submissions/?base64_encoded=true&wait=true`,
        submission,
        {
          headers: {
            'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
            'Content-Type': 'application/json',
          },
        }
      );

      const data: JudgeResponse = response.data;
      
      setTestOut({
        output: atob(data.stdout || ''),
        error: atob((data.compile_output || data.stderr) || '' ),
      });
      return;
      
    } catch (err: any) {
      console.log(err);
      setTestOut({
        output: null,
        error: 'Some unknown error',
      });
    }
  };

  return (
    <div
      className='mr-[0.1rem] flex w-[5rem] items-center justify-center rounded-bl-2 rounded-tl-2 bg-gray-300 opacity-100
                      transition-all hover:bg-black hover:text-gray-300'
    >
      <button
        className='flex w-full items-center justify-center p-2'
        onClick={runCode}
      >
        Run
      </button>
    </div>
  );
};
