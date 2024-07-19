import { BasicTextArea } from '@/components/Inputs';
import { testCaseInput } from '@/Recoil';
import { useRecoilState } from 'recoil';

export const TestCases = () => {
  const [tcs, setTcs] = useRecoilState(testCaseInput);

  return (
    <div className='flex w-full items-center justify-start px-8 pt-4'>
      <div className='block w-full align-baseline'>
        <BasicTextArea
          inputHandler={(tc) => {
            setTcs(tc);
          }}
          height='20rem'
          width='100%'
          defaultValue={tcs}
        />
      </div>
    </div>
  );
};
