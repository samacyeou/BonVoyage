import instance from '@/api/axios';
import EventDashboardBtn from '@/components/atoms/buttons/eventDashboardBtn';
import MyDashboardBtn from '@/components/atoms/buttons/myDashboardBtn';
import SideBar from '@/components/atoms/sideBar/SideBar';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import styles from '@/styles/myDashboard.module.scss';
import Image, { StaticImageData } from 'next/image';
import ellipseGreen from '../../public/assets/icon/ellipseGreen.svg';
import ellipsePurple from '../../public/assets/icon/ellipsePurple.svg';
import ellipseSkyBlue from '../../public/assets/icon/ellipseSkyBlue.svg';
import ellipsePink from '../../public/assets/icon/ellipsePink.svg';
import ellipseOrange from '../../public/assets/icon/ellipseOrange.svg';
import { useEffect, useState } from 'react';

interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

interface Invitation {
  id: number;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

const ELLIPSE_LIST: { [value: string]: StaticImageData } = {
  '#7AC555': ellipseGreen,
  '#FFA500': ellipseOrange,
  '#E876EA': ellipsePink,
  '#760DDE': ellipsePurple,
  '#76A5EA': ellipseSkyBlue,
};

export default function MyDashboard() {
  const [dashboardList, setDashboardList] = useState<Dashboard[]>([]);
  const [invitedDashboardList, setInvitedDashboardList] = useState<
    Invitation[]
  >([]);
  const [isMobile, setIsMobile] = useState(false); // 이름, 초대자 모바일 구분용

  let invitation;

  if (invitedDashboardList.length) {
    invitation = (
      <>
        <div className={styles['search']}>
          <div className={styles['icon']}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/assets/icon/searchIcon.svg"
              alt="돋보기 아이콘"
            />
          </div>
          <input placeholder="검색" />
        </div>
        <div className={styles['columns']}>
          <span className={styles['name']}>이름</span>
          <span className={styles['invitor']}>초대자</span>
          <span className={styles['acceptOrNot']}>수락 여부</span>
        </div>
        {/* 초대된 대시보드 목록을 이용하여 내용을 채워야 합니다.
        {invitedDashboardList.map(({ invitations }) => {
          return <div className={styles['invitedDashboard']}></div>
        })} */}
      </>
    );
  } else {
    invitation = (
      <div className={styles['empty']}>
        <div className={styles['emptyMessage']}>
          <Image
            layout="fill"
            src="/assets/icon/unsubscribeIcon.svg"
            alt="편지지 아이콘"
          />
        </div>
        <span>아직 초대받은 대시보드가 없어요</span>
      </div>
    );
  }

  useEffect(() => {
    async function login() {
      try {
        const login = await instance.post(
          '/auth/login',
          { email: 'test@codeit.com', password: 'sprint101' },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );

        const response = await instance.get('/dashboards', {
          params: {
            navigationMethod: 'pagination',
            page: 1,
            size: 10,
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${login.data.accessToken}`,
          },
        });

        setDashboardList(response.data.dashboards);
      } catch (error) {
        console.log(error);
      }
    }

    login();
  }, []);

  return (
    <div className={styles['background']}>
      <MyHeader profileImageUrl="/assets/icon/logo.svg" nickname="배유철" />
      <section className={styles['section']}>
        <div className={styles['dashboardList']}>
          <EventDashboardBtn name="새로운 대시보드" type="newDashboard" />
          {dashboardList.map((element) => {
            return (
              <MyDashboardBtn
                name={element.title}
                src={ELLIPSE_LIST[element.color]}
              />
            ); // 대시보드 버튼으로 넣어야 됩니다.
          })}
        </div>
        <div className={styles['invitedDashboardList']}>
          <span>초대받은 대시보드</span>
          {invitation}
        </div>
      </section>
      <SideBar />
    </div>
  );
}
