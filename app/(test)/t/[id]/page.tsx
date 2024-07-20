import { fetchTestData } from "@/app/(main)/c/[id]/t/[tid]/page";

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
  console.log(new Date(test.startTime))
  console.log(new Date(test.endTime))
  const currTime = new Date();
  console.log(currTime)

  return currTime < new Date(test.startTime) ? (
    <div className='absolute top-1/2 left-1/2'>Test will start</div>
  ) : currTime <= new Date(test.endTime) ? (
    <div className='absolute top-1/2 left-1/2'>Test is going on</div>
  ) : (
    <div className='absolute top-1/2 left-1/2'>Test has happened!</div>
  );
}
