import EventDashboardBtn from '@/components/atoms/buttons/eventDashboardBtn';
import SideBar from '@/components/atoms/sideBar/SideBar';
import CardSection from '@/components/molecules/cardSection/CardSection';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import styles from '@/styles/dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className={styles['background']}>
      <MyHeader profileImageUrl="/assets/icon/logo.svg" nickname="배유철" />
      <SideBar />
      <section className={styles['section']}>
        <CardSection title="toDo" />
        <CardSection title="onProgress" />
        <CardSection title="done" />
        <div className={styles['newColumnArea']}>
          <EventDashboardBtn name="새로운 컬럼 추가하기" type="addColumn" />
        </div>
      </section>
    </div>
  );
}
