import styles from './landingHeader.module.scss';
import Image from 'next/image';
import Link from 'next/link';
const LandingHeader = () => {
  const bonVoyageLogo = '/assets/icon/bonVoyageLogo.svg';
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <div className={styles.logoContainer}>
          <img
            src={bonVoyageLogo}
            className={styles.bonVoyageLogoMain}
            alt="bonVoyageLogo"
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <p className={styles.headerTitle}>새로운 일정 관리</p>
          <Image
            src={bonVoyageLogo}
            className={styles.bonVoyageLogoSub}
            alt="bonVoyageLogo"
            width={300}
            height={100}
          />
        </div>
        <p className={styles.headerTitleSub}>
          당신의 여행을 완벽하게 만들어드려요
        </p>
        <Link href="/login">
          <button className={styles.startBtn}>시작하기</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingHeader;
