import { fetchTestData } from '@/app/(main)/c/[id]/t/[tid]/action';
import { Leaderboard, NotStarted } from '@/components/Test';
import { Attempt } from '@/components/Test';

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
  console.log(currTime)
  console.log(test.startTime)
  return currTime < new Date(test.startTime) ? (
    <NotStarted name={test.name} startTime={test.startTime} />
  ) : currTime <= new Date(test.endTime) ? (
    <Attempt tid={params.id} />
  ) : (
    <Leaderboard tid={test.id} />
  );

  // return <Attempt tid={params.id} />;
}
