export const Submission = ({
  message,
  lang,
  time,
  isDanger,
}: {
  message: string;
  lang: string;
  time: string;
  isDanger: boolean;
}) => {
  return (
    //todo: submitted code section on button click

    <button
      className='text-style mt-2 flex flex-row 
          rounded-2 border border-solid border-gray p-2 hover:bg-gray-200'
    >
      <div
        className={`flex w-2/5 items-start justify-start text-base 
            font-semibold text-${isDanger ? 'red' : 'green'}-600`}
      >
        <span>{message}</span>
      </div>

      <div
        className='inline-block w-1/5 text-base 
            font-medium text-gray-700'
      >
        <span>{lang}</span>
      </div>

      <div
        className='inline-block w-2/5 text-base
            font-normal text-gray-600'
      >
        <span>{time}</span>
      </div>
    </button>
  );
};
