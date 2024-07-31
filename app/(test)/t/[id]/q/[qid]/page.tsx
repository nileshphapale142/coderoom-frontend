import { QuestionSideBar } from '@/components/Popups';
import { EditorSection } from '@/components/Question/Solve/Editor/editorSection';
import { InformationSection } from '@/components/Question/Solve/Information/informationSection';
import { fetchQuestion } from '@/app/action';
import NotFound from '@/app/(test)/not-found';
import { TestNavbar } from '@/components/Navbar';

interface Question {
  id: number;
  name: string;
  statement: string;
  points: number;
  availablePoints: number;
  testId: number;
  exampleTestCases: {
    input: string;
    output: string;
    explaination: string;
  }[];
  Test: {
    endTime: string;
    allowedLanguages: string[];
  }
}

const QuestionPage = async ({
  params,
}: {
  params: { id: number; qid: number };
}) => {
  const { data } = await fetchQuestion(params.qid);

  if (!data.question) return <NotFound/>

  const { question }: { question: Question } = data;

  return (
    <>
      <TestNavbar qid={params.qid} endTime={ question.Test.endTime}/>
      <div className='visible relative bottom-0 left-0 right-0 top-0 flex h-auto bg-[#f0f4f9] opacity-100 contain-style'>
        <div className='relative z-auto block h-full  flex-1-auto'>
          <div className='relative z-auto flex h-full flex-col backface-visibility-h '>
            <div className='h-16'></div>

            <div className='relative flex h-[calc(100vh-64px)] flex-row overflow-hidden'>
              <InformationSection question={question} />

              {/* //todo: add slider if want to */}
              {/* <div className='h-full w-2 bg-black'>{'||'}</div> */}

              <EditorSection qid={params.qid} languages={question.Test.allowedLanguages}/>
            </div>
          </div>
        </div>
      </div>

      <QuestionSideBar tid={params.id} />
    </>
  );
};

export default QuestionPage;
