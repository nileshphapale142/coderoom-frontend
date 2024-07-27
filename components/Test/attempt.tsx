import Link from 'next/link';
import { FinishCountDown } from './finishCountDown';
import { QuestionBox } from './Question';
import { fetchTestData } from '@/app/(main)/c/[id]/t/[tid]/action';

interface Test {
  name: string;
  id: number;
  startTime: string;
  endTime: string;
  questions: {
    id: number;
    name: string;
    points: number;
  }[];
}

export const Attempt = async ({ tid }: { tid: number }) => {
  const { data, status } = await fetchTestData(tid);
  const { test }: { test: Test } = data;
  //todo: error handling

  return (
    <div className='google-bw-bg absolute left-0 right-0 top-0 min-h-full'>
      <nav className='fixed z-[999] block h-16 w-full border-b bg-white '>
        <div className='flex h-full flex-row items-center justify-between'>
          <div className='ml-2 flex h-full items-center justify-between'>
            <div className='text-style text-heading text-2xl font-semibold'>
              <Link
                href={`/t/${tid}`}
                className='underline-offset-auto transition-all hover:text-gray-700 hover:underline '
              >
                Sorting Algorithms
              </Link>
            </div>
          </div>
          <div className='flex h-full items-center justify-center'>
            <div className='my-auto mr-2 block'>
              <FinishCountDown endTime={new Date(test.endTime)} />
            </div>
          </div>
        </div>
      </nav>

      <div className='relative overflow-y-scroll'>
        <div className='block h-20'></div>
        <div className='relative mx-auto my-0 flex w-calc-12 max-w-50r px-4 py-6'>
          <div
            className='relative flex w-full flex-col rounded-7 border-none bg-white
                px-8'
          >
            {test.questions.map((que, idx) => (
              <QuestionBox
                key={idx}
                isSolve={true}
                name={que.name}
                maxPts={que.points}
                availablePts={que.points}
                route={`/t/${tid}/q/${que.id}`}
              />
            ))}

            {/* //TODO: separate this into a component */}

            <div className='relative my-8 w-full'>
              <div className='flex flex-col items-center justify-center'>
                <Link
                  href={`/`}
                  className='text-style box-border flex items-center 
                      justify-center rounded-2 border border-solid border-black
                      p-4 transition-all hover:border-none
                      hover:bg-green-400'
                >
                  <span className='text-style px-2'>Submit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
