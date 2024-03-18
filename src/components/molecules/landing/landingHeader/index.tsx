import styles from './landingHeader.module.scss';
import Image from 'next/image';
import bonVoyageLogo from '@/../../public/assets/icon/bonVoyageLogo.svg';
const LandingHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src={bonVoyageLogo}
          className={styles.bonVoyageLogo}
          alt="bonVoyageLogo"
          width={200}
          height={100}
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.headerTitle}>새로운 일정 관리</p>
        <Image
          src={bonVoyageLogo}
          className={styles.bonVoyageLogo}
          alt="bonVoyageLogo"
          width={200}
          height={100}
        />
        <p>당신의 여행을 완벽하게 <br/>만들어드려요 </p>
      </div>
    </div>
  );
};

export default LandingHeader;
