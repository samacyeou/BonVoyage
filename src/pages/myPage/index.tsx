import Account from '@/components/molecules/account';
import Layout from '@/components/molecules/layout';
import styles from './mypage.module.scss';
import { useEffect, useState } from 'react';
import { userInfoData } from '@/api/accountApi/accountApi';
import React from 'react';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import SideBar from '@/components/atoms/sideBar/SideBar';
import ellipseGreen from '../../../public/assets/icon/ellipseGreen.svg';

export const userContext = React.createContext<UserInfoProps>({
  id: '',
  email: '',
  nickname: '',
  profileImageUrl: '',
});

interface UserInfoProps {
  id: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
}

const Mypage = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    email: '',
    nickname: '',
    profileImageUrl: '',
  });

  const getUserInfo = async () => {
    const userData = await userInfoData();
    setUserInfo(userData);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <userContext.Provider value={userInfo}>
      <div className={styles.container}>
        <MyHeader nickname="지용" profileImageUrl={ellipseGreen} />
        <SideBar />
        <div className={styles.accountContainer}>
          <Account />
        </div>
      </div>
    </userContext.Provider>
  );
};

export default Mypage;
