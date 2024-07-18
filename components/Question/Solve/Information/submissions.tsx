import { Submission } from './submission';

export const Submissions = () => {
  return (
    <div className='h-full w-full overflow-x-auto overflow-y-visible'>
      <div className='p-4'>
        <div className='flex flex-col rounded-2 bg-white p-4 pt-2'>
          <Submission
            time='June 01, 2024 at 09:34PM'
            lang='C++'
            isDanger={false}
            message='Accepted'
          />
          <Submission
            time='June 01, 2024 at 09:34PM'
            lang='C++'
            isDanger={true}
            message='Wrong answer'
          />
          <Submission
            time='June 01, 2024 at 09:34PM'
            lang='C++'
            isDanger={true}
            message='Memory Limit Exceeded'
          />
          <Submission
            time='June 01, 2024 at 09:34PM'
            lang='C++'
            isDanger={true}
            message='Time Limit Exceeded'
          />
        </div>
      </div>
    </div>
  );
};
