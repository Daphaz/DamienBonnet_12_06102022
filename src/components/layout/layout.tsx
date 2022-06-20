import { ReactNode } from 'react';

import { Header } from './header';
import { Sidebar } from './sidebar';

export interface LayoutProps {
  children: ReactNode;
}

/**
 *  This is the Layout component
 * @category Layout
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className='layout'>
        <Sidebar />
        <main className='container'>{children}</main>
      </div>
    </>
  );
};
