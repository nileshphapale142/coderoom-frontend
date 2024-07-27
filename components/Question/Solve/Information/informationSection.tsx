'use client';

import { SubNavBarItem } from '../subNavBar';
import { Description } from './description';
import React, { useEffect } from 'react';
import { Submissions } from './submissions';
import { TestCases } from './testCases';
import { TestResult } from './testResult';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currInfoPage, testCaseInput } from '@/Recoil';

interface Question {
  id: number;
  name: string;
  statement: string;
  points: number;
  testId: number;
  exampleTestCases: {
    input: string;
    output: string;
    explaination: string;
  }[];
}

export const InformationSection = ({ question }: { question: Question }) => {
  const [selected, setSelected] = useRecoilState(currInfoPage);
  const setTCs = useSetRecoilState(testCaseInput);

  useEffect(() => {
    const tcs = `${question.exampleTestCases.length}
${question.exampleTestCases.map((tc) => tc.input).join('\n')}`;
    setTCs(tcs);
  }, []);

  const pages: React.ReactNode[] = [
    <Description question={question} key={0} />,
    <Submissions qid={question.id} key={1} />,
    <TestCases key={2} />,
    <TestResult key={3} />,
  ];
  return (
    <div
      className='google-bw-bg relative  m-[0.1rem] flex w-45p flex-col
                  overflow-hidden rounded-2 border border-solid border-gray'
    >
      <div className='relative h-10 rounded-2 '>
        <div className='block h-full bg-gray-300'>
          <SubNavBarItem
            name='Description'
            color='blue-500'
            // id={1}
            action={() => setSelected(1)}
            selected={1 === selected}
          />
          <SubNavBarItem
            name='Submissions'
            color='yellow-500'
            // id={2}
            action={() => setSelected(2)}
            selected={2 === selected}
          />
          <SubNavBarItem
            name='Test'
            color='green-500'
            // id={3}
            action={() => setSelected(3)}
            selected={3 === selected}
          />
          <SubNavBarItem
            name='Test Result'
            color='green-500'
            // id={4}
            action={() => setSelected(4)}
            selected={4 === selected}
          />
        </div>
      </div>
      <>{pages[selected - 1]}</>
    </div>
  );
};
