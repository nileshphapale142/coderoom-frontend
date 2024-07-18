import { MainNavFiller } from '@/components/Utils';
import { QuestionSideBar } from '@/components/Popups';
import { EditorSection } from '@/components/Question/Solve/Editor/editorSection';
import { InformationSection } from '@/components/Question/Solve/Information/informationSection';
import { use } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import axios from 'axios';

interface Question {
  id: 24;
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

const fetchQuestion = async (qid: number) => {
  if (!cookies().get('access_token')) {
    redirect('/auth/signin');
    return {
      data: null,
    };
  }

  try {
    const response = await axios.get(`http://localhost:5000/question/${qid}`, {
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

const QuestionPage = async ({ params }: { params: { qid: number } }) => {
  const { data } = await fetchQuestion(params.qid);
  const { question }: { question: Question } = data;

  return (
    <>
      <div className='visibl ṇ n  be relative bottom-0 left-0 right-0 top-0 flex h-auto bg-[#f0f4f9] bg-white opacity-100 contain-style'>
        <div className='relative z-auto block h-full  flex-1-auto'>
          <div className='relative z-auto flex h-full flex-col backface-visibility-h '>
            <MainNavFiller />
            <div className='h-14'></div>

            <div className='relative flex h-[calc(100vh-120px)] flex-row overflow-hidden'>
              <InformationSection question={question} />

              {/* //todo: add slider if want to */}
              {/* <div className='h-full w-2 bg-black'>{'||'}</div> */}

              <EditorSection />
            </div>
          </div>
        </div>
      </div>

      <QuestionSideBar />
    </>
  );
};

export default QuestionPage;
