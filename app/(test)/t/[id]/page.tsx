import { fetchTestData } from '@/app/(main)/c/[id]/t/[tid]/page';
import NotFound from '@/app/(main)/not-found';
import { Leaderboard, NotStarted } from '@/components/Test';
import { Attempt } from '@/components/Test';
import { cookies } from 'next/headers';

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
  //todo: only fetch test: {id, name, startTime, endTime}
  //todo: error handling
  const { data, status } = await fetchTestData(params.id);
  const { test }: { test: Test } = data;
  const currTime = new Date();

  return currTime < new Date(test.startTime) ? (
    <NotStarted name={'My Test'} startTime={test.startTime} />
  ) : currTime <= new Date(test.endTime) ? (
    <Attempt tid={params.id} />
  ) : (
    <Leaderboard tid={test.id} />
  );

  // return <Attempt tid={params.id} />;
}
