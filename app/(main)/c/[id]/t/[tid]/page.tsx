import { MainNavFiller, CourseNavFiller } from '@/components/Utils';
import { QuestionBox } from '@/components/Test';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FullScreenPopUp } from '@/components/Popups';
import { EditTest } from '@/components/Popups/editTest';
import { fetchTestData } from './action';

interface Test {
  name: string;
  id: number;
  startTime: string;
  endTime: string;
  allowedLanguages: string[];
  evaluationScheme: string;
  visibility: string;
  questions: {
    id: number;
    name: string;
    points: number;
  }[];
}



const TestHome = async ({
  params,
}: {
  params: { id: number; tid: number };
}) => {
  
  
  const { id, tid } = params;
  const { data, status } = await fetchTestData(tid);
  //todo: error handling

  if (!data?.test) return redirect('/not-found');

  const { test }: { test: Test } = data;
  
  return (
    <>
      <div className='visible static flex h-auto min-h-screen bg-[#f0f4f9] opacity-100 contain-style'>
        <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
          <div className='min-h-auto relative z-auto flex h-auto flex-col backface-visibility-h '>
            <MainNavFiller />
            <CourseNavFiller />
            <div className='relative left-0 top-0 block bg-[#f0f4f9]'>
              <div className='relative mx-auto my-0 flex w-calc-12 max-w-50r px-4 py-6'>
                <div
                  className='relative flex w-full flex-col rounded-7 border-none bg-white
                px-8'
                >
                  {test?.questions.map((que, idx) => (
                    <QuestionBox
                      key={idx}
                      name={que.name}
                      maxPts={que.points}
                      availablePts={que.points}
                      route={`/c/${id}/t/${tid}/q/${que.id}/edit`}
                      isSolve={false}
                    />
                  ))}

                  {/* //TODO: separate this into a component */}

                  <div className='relative my-8 w-full'>
                    <div className='flex flex-col items-center justify-center'>
                      <Link
                        href={`/c/${id}/t/${tid}/q/new`}
                        className='text-style box-border flex items-center 
                      justify-center rounded-2 border border-solid border-black
                      p-4 transition-all hover:border-none
                      hover:bg-green-400'
                      >
                        <span className='text-style px-2'>Add Question</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FullScreenPopUp>
        <EditTest
          test={{
            ...test,
            courseId: id,
          }}
        />
      </FullScreenPopUp>
    </>
  );
};

export default TestHome;
