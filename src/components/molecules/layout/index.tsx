import React, { PropsWithChildren } from 'react';
import SideBar from '@/components/atoms/sideBar/SideBar';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.container}>
      {/* //header */}
      <SideBar/>
    </div>
  );
};

export default Layout;

