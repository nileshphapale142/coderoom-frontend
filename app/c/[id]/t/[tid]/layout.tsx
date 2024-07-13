import { SecondNavbar } from '@/components/Navbar';
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
