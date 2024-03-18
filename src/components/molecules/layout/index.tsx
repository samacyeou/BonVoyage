import React from 'react';
import SideBar from '@/components/atoms/sideBar/SideBar';
import styles from './layout.module.scss';
import MyHeader from '../myHeader/MyHeader';
import ellopseGreen from '../../../../public/assets/icon/ellipseGreen.svg';
import { useContext } from 'react';
import { userContext } from '@/pages/mypage/index';

const Layout = () => {
  const userInfo = useContext(userContext);

  return (
    <div className={styles.container}>
      <MyHeader
        nickname={userInfo.nickname ? userInfo.nickname : '익명'}
        profileImageUrl={
          userInfo.profileImageUrl ? userInfo.profileImageUrl : ellopseGreen
        }
      />
      <SideBar />
    </div>
  );
};

export default Layout;
