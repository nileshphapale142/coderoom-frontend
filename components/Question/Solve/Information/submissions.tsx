import { useCallback, useEffect, useState } from 'react';
import { Submission } from './submission';
import { getSubmissions } from '@/app/action';
import { useRouter } from 'next/navigation';
import { getStatusInfo, toCamelCase } from '@/Utils';
import { useRecoilValue } from 'recoil';
import { submissionMade } from '@/Recoil';

interface SubmissionType {
  submission: {
    code: string;
    id: number;
    time: string;
    language: string;
    statusCode: number;
  };
}

export const Submissions = ({ qid }: { qid: number }) => {
  const [subs, setSubs] = useState<SubmissionType[]>([]);
  const subsMade = useRecoilValue(submissionMade);
  const router = useRouter();

  const fetchSubmissions = useCallback(async () => {
    const { data, status } = await getSubmissions(qid);
    if (status === 200) setSubs(data.submissions);
    else if (status === 401) router.push('/auth/signin');
    else if (status === 500) alert('problem at server');
    else alert("can't get submissions problem");
  }, [qid, router]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions, subsMade]);

  return (
    <div className='h-full w-full overflow-x-auto overflow-y-visible'>
      <div className='p-4'>
        <div className='flex flex-col rounded-2 bg-white p-4 pt-2'>
          {subs.map(({ submission }) => (
            <Submission
              key={submission.id}
              time={new Date(submission.time).toLocaleString()}
              lang={toCamelCase(submission.language)}
              isDanger={getStatusInfo(submission.statusCode).isDanger}
              message={getStatusInfo(submission.statusCode).name}
              code={atob(submission.code)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
