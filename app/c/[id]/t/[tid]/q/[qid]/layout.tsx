import { SecondNavbar, TestNavbar } from '@/components/Navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
    tid: string;
    qid: string;
  };
}

export default function QuestionLayout({ children, params }: LayoutProps) {
  const { id, tid, qid } = params;

  return (
    <>
      <TestNavbar />
      {children}
    </>
  );
}
