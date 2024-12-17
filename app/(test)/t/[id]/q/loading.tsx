import { CourseNavFiller } from '@/components/Utils';
const Loading = () => {
  return (
    <div className='google-bw-bg fixed h-screen w-full'>
      {/* Header skeleton */}

      <div className='absolute bottom-0 left-0 right-0 top-0 overflow-hidden'>
        <div className='h-16'></div>

        <div className='relative h-[calc(100vh-64px)] w-45p animate-pulse rounded-3 bg-gray-200'></div>
      </div>
    </div>
  );
};

export default Loading;
