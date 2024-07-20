import { fetchTestData } from '@/app/(main)/c/[id]/t/[tid]/page';
import { NotStarted } from '@/components/Test';

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

export default async function Page({ params }: { params: { id: number } }) {
  const { data, status } = await fetchTestData(params.id);
  const { test }: { test: Test } = data;

  const currTime = new Date();

  return currTime < new Date(test.startTime) ? (
    <NotStarted name={'My Test'} startTime={test.startTime} />
  ) : currTime <= new Date(test.endTime) ? (
    <div className='absolute left-1/2 top-1/2'>Test is going on</div>
  ) : (
    <div className='absolute left-1/2 top-1/2'>Test has happened!</div>
  );
}
