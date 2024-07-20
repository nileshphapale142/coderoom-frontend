import { SecondNavbar } from '@/components/Navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

export default function CourseLayout({ children, params }: LayoutProps) {
  const { id } = params;
  return (
    <>
      <SecondNavbar
        navItems={[
          { name: 'Tests', route: `/c/${id}` },
          { name: 'Leaderboard', route: `/c/${id}/leaderboard` },
        ]}
      />
      {/* <Navbar cid={id}/> */}
      {children}
    </>
  );
}
