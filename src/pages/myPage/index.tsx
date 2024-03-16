import Account from '@/components/molecules/account';
import styles from './mypage.module.scss';
import { useEffect, useState } from 'react';
import { userInfoData } from '@/api/accountApi/accountApi';
import React from 'react';
import Layout from '@/components/molecules/layout';

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
      <Layout />
      <Account />
    </userContext.Provider>
  );
};

export default Mypage;
