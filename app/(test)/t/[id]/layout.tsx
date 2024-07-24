import NotFound from '@/app/(main)/not-found';
import { cookies } from 'next/headers';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    id: number;
  };
}

export default function QuestionLayout({ children, params }: LayoutProps) {
  const { id } = params;
  if (cookies().get('is_teacher')?.value === 'true') return <NotFound/> 
  return (
    <>
      {children}
    </>
  );
}
