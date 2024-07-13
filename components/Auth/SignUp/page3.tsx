import { BasicInput } from '@/components/Inputs';
import { isUserStudent, userEmail, userRollNo } from '@/Recoil';
import { useRecoilState, useRecoilValue } from 'recoil';

const RollNoInput = () => {
  const [rollNo, setRollNo] = useRecoilState(userRollNo);

  return (
    <div className='mt-4 w-full '>
      <BasicInput
        title='Roll No'
        inputHandler={(rollNo) => {
          setRollNo(rollNo);
        }}
        defaultInput={rollNo}
        width={'100%'}
      />
    </div>
  );
};

export const Page3 = () => {
  const [email, setEmail] = useRecoilState(userEmail);
  const isStudent = useRecoilValue(isUserStudent);

  return (
    <>
      <div className='w-full'>
        <BasicInput
          title='Email'
          inputHandler={(email) => {
            setEmail(email);
          }}
          inputType='email'
          defaultInput={email}
          width={'100%'}
        />
      </div>

      {isStudent && <RollNoInput />}
    </>
  );
};
