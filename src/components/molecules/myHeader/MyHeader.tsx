import HeaderBtn from '@/components/atoms/headerBtn/HeaderBtn';
import styles from './myHeader.module.scss';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  profileImageUrl: string;
  nickname: string;
}

export default function MyHeader({ profileImageUrl, nickname }: Props) {
  const [isOpenNicknameMenu, setIsOpenNicknameMenu] = useState(false);

  return (
    <div className={styles['header']}>
      <span className={styles['dashboardName']}>내 대시보드</span>
      <div className={styles['management']}>
        <div className={styles['user']}>
          <div className={styles['profile']}>
            <Image layout="fill" src={profileImageUrl} alt="프로필 이미지" />
          </div>
          <div className={styles['name']}>
            <span
              className={styles['nickname']}
              onClick={() => setIsOpenNicknameMenu((preState) => !preState)}
            >
              {nickname}
            </span>
            {isOpenNicknameMenu && (
              <div
                className={styles['nicknameMenu']}
                onBlur={() => setIsOpenNicknameMenu(false)}
              >
                <button className={styles['MenuItem']}>마이페이지</button>
                <hr />
                <button className={styles['MenuItem']}>로그아웃</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
