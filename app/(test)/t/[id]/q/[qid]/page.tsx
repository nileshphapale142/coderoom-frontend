import { MainNavFiller } from '@/components/Utils';
import { QuestionSideBar } from '@/components/Popups';
import { EditorSection } from '@/components/Question/Solve/Editor/editorSection';
import { InformationSection } from '@/components/Question/Solve/Information/informationSection';
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

const QuestionPage = async ({
  params,
}: {
  params: { id: number; qid: number };
}) => {
  const { data } = await fetchQuestion(params.qid);
  const { question }: { question: Question } = data;

  return (
    <>
      <div className='visible relative bottom-0 left-0 right-0 top-0 flex h-auto bg-[#f0f4f9] bg-white opacity-100 contain-style'>
        <div className='relative z-auto block h-full  flex-1-auto'>
          <div className='relative z-auto flex h-full flex-col backface-visibility-h '>
            <div className='h-16'></div>

            <div className='relative flex h-[calc(100vh-64px)] flex-row overflow-hidden'>
              <InformationSection question={question} />

              {/* //todo: add slider if want to */}
              {/* <div className='h-full w-2 bg-black'>{'||'}</div> */}

              <EditorSection qid={params.qid} />
            </div>
          </div>
        </div>
      </div>

      <QuestionSideBar tid={params.id} />
    </>
  );
};

export default QuestionPage;
