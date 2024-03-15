import React, { PropsWithChildren } from 'react';
import SideBar from '@/components/atoms/sideBar/SideBar';
import styles from './layout.module.scss';
import MyHeader from '../myHeader/MyHeader';
import ellopseGreen from '../../../../public/assets/icon/ellipseGreen.svg';
import { useState } from 'react';

const Layout = ({children}:PropsWithChildren) => {

  return (
    <div className={styles.container}>
      <MyHeader nickname='지용' profileImageUrl={ellopseGreen}/>
      {/* <SideBar /> */}
      {children}
    </div>
  );
};

export default Layout;

