import NotFound from '@/app/(main)/not-found';
import { SecondNavbar } from '@/components/Navbar';
import { cookies } from 'next/headers';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
    tid: string;
  };
}

export default function TestLayout({ children, params }: LayoutProps) {
  const { id, tid } = params;
  
  if (cookies().get('is_teacher')?.value === 'false') return <NotFound/>

  return (
    <>
      <SecondNavbar
        navItems={[
          { name: 'Questions', route: `/c/${id}/t/${tid}` },
          { name: 'Submissions', route: `/c/${id}/t/${tid}/submissions` },
          { name: 'Leaderboard', route: `/c/${id}/t/${tid}/leaderboard` },
        ]}
      />
      {/* <Navbar cid={id}/> */}
      {children}
    </>
  );
}
