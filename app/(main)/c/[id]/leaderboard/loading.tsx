import { CourseNavFiller } from '@/components/Utils';

const Loading = () => {
  return (
    <div className='google-bw-bg fixed h-screen w-full'>
      {/* Header skeleton */}
      <div className='flex items-center justify-between border-b-[0.0625rem]'>
        <div className='h-16 w-full animate-pulse rounded bg-white'></div>
      </div>
      <CourseNavFiller />

      <div className='relative w-full h-full mx-auto my-0'>
        <div
          className='absolute top-0 left-0 right-0 bottom-0 animate-pulse overflow-hidden 
          bg-gray-200'
        >
        </div>
      </div>
    </div>
  );
};

export default Loading;
