'use client'

import { useRouter } from 'next/navigation';

const ErrorPage = ({ statusCode }: { statusCode: number }) => {
  const router = useRouter();

  return (
    <div>
      <h1>{statusCode === 404 ? 'Page Not Found' : 'An Error Occurred'}</h1>
      <p>
        {statusCode === 404
          ? 'The page you are looking for does not exist.'
          : 'Something went wrong.'}
      </p>
      <button onClick={() => router.push('/')}>Go to Home</button>
    </div>
  );
};

export default ErrorPage;
