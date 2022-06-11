import { ReactNode } from 'react';

import { Header } from './header';
import { Sidebar } from './sidebar';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
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
