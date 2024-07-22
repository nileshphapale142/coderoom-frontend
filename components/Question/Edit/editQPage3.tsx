import { Page3Inputs } from '../New';

export const EditQPage3 = () => {
  return (
    <div className='flex h-full flex-row justify-between'>
      <div className='flex flex-col items-start justify-center p-8'>
        {/* // TODO: Separate into another component */}
        <div className='text-heading flex items-start justify-start'>
          <span className='text-3xl font-normal text-gray-800'>Test Cases</span>
        </div>
        <div className='h-8'></div>
        <Page3Inputs />
      </div>
    </div>
  );
};
