import { CountDown } from '../Utils';

export const NotStarted = ({
  name,
  startTime,
}: {
  name: string;
  startTime: string;
}) => {
  return (
    <div className='google-bw-bg fixed bottom-0 left-0 right-0 top-0'>
      <div
        className='absolute bottom-0 left-0 right-0 top-0 flex 
      flex-col items-center '
      >
        <div className='block h-20 flex-grow'></div>
        <div className='mx-auto rounded-3 bg-white p-8'>
          <div className='flex flex-col items-center justify-center'>
            <div
              className='text-style line-clamp-2 flex w-full flex-col justify-center 
            break-words p-2 text-xl'
            >
              <span className='flex w-full justify-center'>
                <strong className='text-3xl'>{name}</strong>
              </span>
              <span className='flex w-full justify-center'>will start in</span>
            </div>
            <div>
              <CountDown endTime={new Date(startTime)} />
            </div>
          </div>
        </div>
        <div className='block h-20 flex-grow'> </div>
      </div>
    </div>
  );
};
