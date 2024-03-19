import styles from './headerMyDashboard.module.scss';
import HeaderBtn from '@/components/atoms/buttons/headerBtn';
import Image from 'next/image';
import ProfileIcon from '@/components/atoms/profileIcon/ProfileIcon';

export default function HeaderMyDashboard({
  enName = 'Name',
  koName = '이름',
  boardTitle = '내 대시보드',
}) {
  return (
    <>
      <div className={styles['header']}>
        <div className={styles['boardTitle']}>
          <span>{boardTitle}</span>
          <Image
            src="/assets/icon/crownIcon.svg"
            width={20}
            height={16}
            alt="crown"
          />
        </div>
        <div className={styles['headerRight']}>
          <div className={styles['headerBtn']}>
            <HeaderBtn name="관리" type="edit" />
            <HeaderBtn name="초대하기" type="invite" />
          </div>
          <div className={styles['line']}></div>
          <div className={styles['invited']}></div>
          <div className={styles['userProfile']}>
            <ProfileIcon name={enName} />
            <span className={styles['koName']}>{koName}</span>
          </div>
        </div>
      </div>
    </>
  );
}
