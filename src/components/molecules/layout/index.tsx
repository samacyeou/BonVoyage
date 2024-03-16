import React, { PropsWithChildren } from 'react';
import SideBar from '@/components/atoms/sideBar/SideBar';
import styles from './layout.module.scss';
import MyHeader from '../myHeader/MyHeader';
import ellopseGreen from '../../../../public/assets/icon/ellipseGreen.svg';

const Layout = ( )=> {
  return (
    <div className={styles.container}>
      <MyHeader nickname="지용" profileImageUrl={ellopseGreen} />
      <SideBar />
    </div>
  );
};

export default Layout;
