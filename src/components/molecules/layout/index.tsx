import React, { PropsWithChildren } from 'react';
import SideBar from '@/components/atoms/sideBar/SideBar';
import styles from './layout.module.scss';

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className={styles.container}>
      {/* //header */}
      <SideBar/>
      {children}
    </div>
  );
};

export default Layout;

