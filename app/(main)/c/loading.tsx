import { CourseNavFiller } from '@/components/Utils';

const Loading = () => {
  return (
    <div className='google-bw-bg fixed h-screen w-full'>
      {/* Header skeleton */}
      <div className='flex items-center justify-between border-b-[0.0625rem]'>
        <div className='h-16 w-full animate-pulse rounded bg-white'></div>
      </div>
      <CourseNavFiller />

      <div className='relative mx-auto my-0 flex w-calc-12 max-w-625r flex-col'>
        <div
          className=' mt-6 w-full animate-pulse overflow-hidden rounded-3
          bg-gray-400'
        >
          <div className='relative h-60 w-full '>
            <div className='absolute left-0 top-0 h-full w-full'>
              <div className='absolute left-0 top-0 block h-full w-full'></div>
            </div>

            <div className='absolute left-0 right-0 px-6 py-4'>
              <h1 className='block overflow-hidden pr-8'></h1>
              <div className='my-1 pr-8 '></div>
            </div>

            <div className='absolute bottom-0 left-0 right-0 px-6 py-4'>
              <h3 className='block overflow-hidden'></h3>
              <div className='my-1 pr-8 '></div>
            </div>
          </div>
        </div>

        <div className='relative mt-4 flex h-full flex-row'>
          <div className='relative flex-grow  '>
            <ol className='relative'>
              {[...Array(4)].map((_, index) => (
                <li
                  key={index}
                  className='google-bw-bg solid mb-[0.7px] box-border 
                h-[60px] w-full animate-pulse rounded-2 
                border-b-[0.0625rem] border-b-gray'
                ></li>
              ))}
            </ol>
          </div>

          <div className='-m-1 h-[260px] w-72 p-4'>
            <div className='rounded-3 h-full w-full animate-pulse bg-gray-200 '></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
