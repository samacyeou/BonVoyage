import Account from '@/components/molecules/account';
import { useEffect, useState } from 'react';
import { userInfoData } from '@/api/accountApi/accountApi';
import React from 'react';
import Layout from '@/components/molecules/layout';
import { User, UserInfoProps } from '@/@types/type';

export const userContext = React.createContext<User>({
  id: 0,
  email: '',
  nickname: '',
  profileImageUrl: '',
  createdAt: '',
  updatedAt: '',
});

const Mypage = () => {
  const [userInfo, setUserInfo] = useState({
    id: 0,
    email: '',
    nickname: '',
    profileImageUrl: '',
    createdAt: '',
    updatedAt: '',
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
