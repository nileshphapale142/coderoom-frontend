import { BasicInput } from '@/components/Inputs';
import { userName } from '@/Recoil';
import { useRecoilState, useRecoilValue } from 'recoil';

export const Page2 = () => {
  const [name, setName] = useRecoilState<{
    first: string;
    last: string;
  }>(userName);

  return (
    <>
      <div className='w-full '>
        <BasicInput
          title='First Name'
          inputHandler={(firstName) => {
            setName((prev) => {
              return { ...prev, first: firstName };
            });
          }}
          defaultInput={name.first}
          width={'100%'}
          id='firstName'
        />
      </div>

      <div className='mt-4 w-full'>
        <BasicInput
          title='Last Name'
          inputHandler={(lastName) => {
            setName((prev) => {
              return { ...prev, last: lastName };
            });
          }}
          defaultInput={name.last}
          width={'100%'}
          id='lastName'
        />
      </div>
    </>
  );
};
