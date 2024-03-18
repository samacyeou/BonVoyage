import styles from '@/styles/Home.module.scss';
import HeaderAuth from '@/components/molecules/header/headerAuth/HeaderAuth';
import LandingHeader from '@/components/molecules/landing/landingHeader';
import LandingMain from '@/components/molecules/landing/landingMain';
import LandingFooter from '@/components/molecules/landing/landingFooter';

const index = () => {
  return (
    <div className={styles.container}>
      <HeaderAuth />
      <div className={styles.mainContent}>
        <LandingHeader />
        <LandingMain />
      </div>
      <LandingFooter />
    </div>
  );
};

export default index;
// 여기는 메인 랜딩페이지 들어갈 곳
