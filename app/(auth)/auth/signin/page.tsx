'use client';

import { Page, SignInSec } from '@/components/Auth';
import { isSignInInfoFilled, userSignInInfo } from '@/Recoil';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { SignInAction } from './action';

const SignIn = () => {
  //todo: add modularity
  const signInInfo = useRecoilValue(userSignInInfo);
  const isInfoFilled = useRecoilValue(isSignInInfoFilled);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!isInfoFilled) {
      alert('Fill all fields');
      return;
    }

    const data = {
      email: signInInfo.email,
      password: signInInfo.password,
    };
    
    const { status } = await SignInAction(data);
    
    if (status === 201) router.push('/');
    else if (status === -1) alert('unknown problem');
    else if (status === 400) alert('Email not in correct format');
    else if (status === 500) alert('server error');
    else if (status === 403) alert('email or password not correct');
    else if (status === 406) alert('Your account is in verification queue');
    else alert('wtf');
    
  };
  return (
    <div className='google-bw-bg absolute bottom-0 left-0 right-0 top-0'>
      <div className='flex h-full w-full flex-col justify-center'>
        <div className='flex-grow'></div>

        <div className='mx-auto w-70r rounded-7 border-none bg-white p-9 py-12 '>
          <div className='flex flex-grow flex-row'>
            <div className='flex flex-grow flex-row flex-wrap'>
              <Page
                title='Sign-In to your account'
                subtitle='Enter email and password to sign-in.'
                inputsFilled={isInfoFilled}
                isSignIn={true}
                handleSubmit={handleSignIn}
              >
                <SignInSec />
              </Page>
            </div>
          </div>
        </div>

        <div className='flex-grow'></div>
      </div>
    </div>
  );
};

export default SignIn;
