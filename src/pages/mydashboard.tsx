import SideBar from '@/components/atoms/sideBar/SideBar';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import styles from '@/styles/myDashboard.module.scss';

export default function MyDashboard() {
  return (
    <div className={styles['background']}>
      <MyHeader profileImageUrl="/assets/icon/logo.svg" nickname="배유철" />
      <section className={styles['section']}></section>
      <SideBar />
    </div>
  );
}
