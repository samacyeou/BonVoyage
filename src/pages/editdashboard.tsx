import SideBar from '@/components/atoms/sideBar/SideBar';
import EditDashboardTitle from '@/components/molecules/editDashboardName/EditDashboardTitle';
import HeaderMyDashboard from '@/components/molecules/header/headerMyDashboard/HeaderMyDashboard';
import styles from '@/styles/editDashboard.module.scss';
import React from 'react';

export default function editdashboard() {
  return (
    <div className={styles['background']}>
      <HeaderMyDashboard />
      <SideBar />
      <div className={styles['components']}>
        <EditDashboardTitle />
      </div>
    </div>
  );
}
