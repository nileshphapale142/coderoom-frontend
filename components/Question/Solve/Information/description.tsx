interface Question {
  id: 24;
  name: string;
  statement: string;
  points: number;
  testId: number;
  exampleTestCases: {
    input: string;
    output: string;
    explaination: string;
  }[];
}

const ExampleTestCaseRenderer = ({
  input, output, explaination
}: {
    input: string; output: string; explaination: string;
}) => {
  return (
    <div
      className='mb-1 flex w-full flex-col items-start justify-start rounded-2 border-none
                            bg-white px-1 py-2'
    >
      <div className=''>
        <span className='mr-1 inline-block font-semibold text-gray-800'>
          Input:
        </span>
          {input.split('\n').map((line, idx) => 
          
            <span key={idx} className='block font-normal text-gray-500'>
            {line}
            </span>
          )}
      </div>

      <div className=''>
        <span className='mr-1 inline-block font-semibold text-gray-800'>
          Output:
        </span>
        {output.split('\n').map((line, idx) => 
                  
                    <span key={idx} className='block font-normal text-gray-500'>
                    {line}
                    </span>
                  )}
      </div>

      <div className=''>
        <span className='mr-1 inline-block font-semibold text-gray-800'>
          Explaination:
        </span>
        {explaination.split('\n').map((line, idx) => 
                  
                    <span key={idx} className='block font-normal text-gray-500'>
                    {line}
                    </span>
                  )}
      </div>
    </div>
  );
};

export const Description = ({ question }: { question: Question }) => {
  return (
    <div className='h-full w-full overflow-x-auto overflow-y-visible'>
      <div className='text-style flex flex-col justify-start border-none p-4 font-normal outline-none'>
        <div className='flex flex-col items-start justify-start'>
          <div className='text-heading w-full cursor-default text-2xl text-gray-800'>
            <span className='line-clamp-3 block max-w-full'>
              {question.name}
            </span>
          </div>
          <div className='font-semibold text-gray-400'>
            <span className='mr-2 inline-block'>
              Maximum Point: {question.points}
            </span>
            <span className='inline-block'>
              Available Point: {question.points}
            </span>
          </div>
        </div>

        <div className='mt-6 flex w-full flex-col items-start justify-start text-base '>
          {question.statement.split('\n').map((line, idx) => (
            <span
              key={idx}
              className={
                'mt-1 block ' +
                (line.toLowerCase().includes('input') ||
                line.toLowerCase().includes('output') ||
                line.toLowerCase().includes('constraints')
                  ? ' mt-2 text-base font-semibold '
                  : '')
              }
            >
              {line}
            </span>
          ))}
        </div>

        <div className='mt-6 flex w-full flex-col items-start justify-start text-base'>
          <div className='block w-full '>
            {question.exampleTestCases.map((etc, idx) => 
              <ExampleTestCaseRenderer {...etc} key={idx}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
