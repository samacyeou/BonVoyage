import React from 'react';
import SideBar from '@/components/atoms/sideBar/SideBar';
import styles from './layout.module.scss';
import HeaderMyDashboard from '@/components/molecules/header/headerMyDashboard/HeaderMyDashboard';
import { useContext } from 'react';
import { userContext } from '@/pages/_app';

const Layout = () => {
  const { userInfo } = useContext(userContext);
  return (
    <div className={styles.container}>
      <HeaderMyDashboard
        boardTitle={'계정관리'}
        profile={userInfo.profileImageUrl}
        name={userInfo.nickname}
      />
      <SideBar />
    </div>
  );
};

export default Layout;
