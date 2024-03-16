import styles from './myHeader.module.scss';
import Image from 'next/image';

import { useContext } from 'react';
import { userContext } from '@/pages/mypage/index';

interface Props {
  profileImageUrl: string;
  nickname: string;
}

export default function MyHeader({ profileImageUrl, nickname }: Props) {
  const userInfo = useContext(userContext);
  return (
    <div className={styles['header']}>
      <span className={styles['dashboardName']}>내 대시보드</span>
      <div className={styles['management']}>
        <div className={styles['user']}>
          <div className={styles['profile']}>
            <Image layout="fill" src={profileImageUrl} alt="프로필 이미지" />
            {/* <Image
              layout="fill"
              src={userInfo.profileImageUrl || profileImageUrl}
              alt="프로필 이미지"
            /> */}
          </div>
          <span>{nickname}</span>
          {/* <span>{userInfo.nickname}</span> */}
        </div>
      </div>
    </div>
  );
}
