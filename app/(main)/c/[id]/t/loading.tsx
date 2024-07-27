import { CourseNavFiller } from '@/components/Utils';

const Loading = () => {
  return (
    <div className='google-bw-bg fixed h-screen w-full'>
      {/* Header skeleton */}

      <div className='absolute bottom-0 left-0 right-0 top-0 overflow-hidden'>
        <div className='flex items-center justify-between border-b-[0.0625rem]'>
          <div className='h-16 w-full animate-pulse rounded bg-white'></div>
        </div>
        <CourseNavFiller />
        <div className='mx-auto h-full w-calc-12 max-w-50r px-4 py-6'>
          <div className='flex w-full animate-pulse flex-col rounded-7 bg-gray-200 px-8'>
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className='relative rounded-5 animate-pulse bg-white mt-8 h-28 w-full'>
              </div>
            ))}
            <div className='mt-8'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
