import { Navbar } from '@/components/Course';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

export default function TestLayout({ children, params }: LayoutProps) {
  const { id } = params;

  return (
    <>
      {/* <Navbar cid={id} /> */}
      {children}
    </>
  );
}
