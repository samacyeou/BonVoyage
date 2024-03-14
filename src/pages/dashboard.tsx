import EventDashboardBtn from '@/components/atoms/buttons/eventDashboardBtn';
import MyDashboardBtn from '@/components/atoms/buttons/myDashboardBtn';
import SideBar from '@/components/atoms/sideBar/SideBar';
import CardSection from '@/components/molecules/cardSection/CardSection';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import styles from '@/styles/dashboard.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  return (
    <div className={styles['background']}>
      <MyHeader profileImageUrl="/assets/icon/logo.svg" nickname="배유철" />
      <SideBar />
      <section className={styles['section']}>
        <CardSection title="toDo" />
        <CardSection title="onProgress" />
        <CardSection title="done" />
      </section>
    </div>
  );
}
