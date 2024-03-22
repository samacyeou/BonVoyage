import React from 'react';
import SideBar from '@/components/atoms/sideBar/SideBar';
import styles from './layout.module.scss';
import HeaderMyDashboard from '@/components/molecules/header/headerMyDashboard/HeaderMyDashboard';
import { useContext } from 'react';
import { userContext } from '@/pages/mypage/index';

const Layout = () => {
  const { userInfo } = useContext(userContext);

  return (
    <div className={styles.container}>
      {/* <MyHeader
        title="계정관리"
        nickname={userInfo.nickname}
        profileImageUrl={userInfo.profileImageUrl}
      /> */}
      <HeaderMyDashboard
        profile={userInfo.profileImageUrl}
        boardTitle={'계정관리'}
        name={userInfo.nickname}
      />
      <SideBar />
    </div>
  );
};

export default Layout;
