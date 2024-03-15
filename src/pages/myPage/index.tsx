import Account from '@/components/molecules/account';
import Layout from '@/components/molecules/layout';
import styles from './mypage.module.scss';
import { useEffect, useState } from 'react';
import { userInfoData } from '@/api/accountApi/accountApi';
import React from 'react';

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
        <Layout>
          <Account />
        </Layout>
      </div>
    </userContext.Provider>
  );
};

export default Mypage;
