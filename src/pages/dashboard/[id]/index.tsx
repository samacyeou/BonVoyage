import { Dashboard, User } from '@/@types/type';
import axios from '@/api/axios';
import EventDashboardBtn from '@/components/atoms/buttons/eventDashboardBtn';
import SideBar from '@/components/atoms/sideBar/SideBar';
import CardSection from '@/components/molecules/cardSection/CardSection';
import HeaderMyDashboard from '@/components/molecules/header/headerMyDashboard/HeaderMyDashboard';
import CreateColumnModal from '@/components/molecules/modals/createColumnModal/CreateColumnModal';
import { DashboardProvider } from '@/hooks/contexts';
import styles from '@/styles/dashboard.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dashboard, setDashboard] = useState<Dashboard>();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { id } = router.query;

  async function getDashboard(targetId: string) {
    const res = await axios.get(`/dashboards/${targetId}`);
    const nextDashboard = res.data;
    setDashboard(nextDashboard);
  }

  const handleaddColumnButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!id) return;
    getDashboard(id as string);
  }, [id]);

  if (!dashboard) return null;

  return (
    <div className={styles['background']}>
      <DashboardProvider initialValue={dashboard}>
        <HeaderMyDashboard boardTitle={dashboard.title} isDashboard={true} />
        <SideBar />
        <section className={styles['section']}>
          <CardSection dashboardId={dashboard.id} />
          <div className={styles['newColumnArea']}>
            <EventDashboardBtn
              onClick={handleaddColumnButtonClick}
              name="새로운 컬럼 추가하기"
              type="addColumn"
            />
          </div>
        </section>
        {isModalOpen && (
          <CreateColumnModal onClose={closeModal} dashboardId={Number(id)} />
        )}
      </DashboardProvider>
    </div>
  );
}
