import { TestNavbar } from '@/components/Navbar';
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

  return (
    <>
      <TestNavbar qid={qid} />
      {children}
    </>
  );
}
