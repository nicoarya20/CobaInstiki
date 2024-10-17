import LayoutBackground from '@/module/_global/layout/layout_background';
import React from 'react';

function Layout({children} : {children: React.ReactNode}) {
  return (
    <LayoutBackground>
    {children}
    </LayoutBackground>
  );
}

export default Layout;
