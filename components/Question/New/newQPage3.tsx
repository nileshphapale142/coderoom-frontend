import { Example, Page3Inputs } from './';

export const NewQPage3 = () => {
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

      <Example>
        <div className='mt-4 flex w-full flex-col'>
          <span className='text-heading text-xl text-gray-600'>Test Cases</span>
          <div className='mt-2'>
            <span className='text-style flex flex-col font-normal text-gray-600'>
              <span>First line should contain number of test cases.</span>
              <span>
                Each test case should contain its necessary inputs
              </span>
              <span className='solid border-b pb-1'>In following example, 2 is the number of test cases and for each test case first line contains the size of the arary and second line contains the array.</span>
              <span className='text-heading  py-2'>Example</span>
              {`2
5
3 1 4 1 
6
-1 -1 -2 -3 -4 -5`
                .split('\n')
                .map((line, idx) => (
                  <span key={idx} className='block'>
                    {line}
                  </span>
                ))}
            </span>
          </div>
        </div>
      </Example>
    </div>
  );
};
