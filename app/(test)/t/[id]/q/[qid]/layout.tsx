import NotFound from '@/app/(main)/not-found';
import { TestNavbar } from '@/components/Navbar';
import { cookies } from 'next/headers';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    id: number;
    qid: number;
  };
}

export default function QuestionLayout({ children, params }: LayoutProps) {
  const { id, qid } = params;
  if (cookies().get('is_teacher')?.value === 'true') return <NotFound />;
  return (
    <>
      <TestNavbar qid={qid} />
      {children}
    </>
  );
}
