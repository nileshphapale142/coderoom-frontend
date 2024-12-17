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
        <div className='relative mt-6 mx-auto h-3/4 w-1/2 rounded-3 animate-pulse bg-gray-200'></div>
      </div>
    </div>
  );
};

export default Loading;
