import instance from '@/api/axios';
import SideBar from '@/components/atoms/sideBar/SideBar';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import styles from '@/styles/myDashboard.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CreateDashboard, Dashboard, User } from '@/@types/type';
import { useRouter } from 'next/router';
import CreateDashboardModal from '@/components/molecules/createDashboardModal/CreateDashboardModal';
import MyDashboardList from '@/components/molecules/myDashboardList/MyDashboardList';

const cn = classNames.bind(styles);

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

export default function MyDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [dashboardList, setDashboardList] = useState<Dashboard[]>([]);
  const [dashboardListPage, setDashboardListPage] = useState(1);
  const [dashboardListTotalPage, setDashboardListTotalPage] = useState(0);
  const [invitedDashboardList, setInvitedDashboardList] = useState<
    Invitation[]
  >([]);
  const [isMobile, setIsMobile] = useState(false); // 이름, 초대자 모바일 구분용
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();

  let invitation;

  if (invitedDashboardList.length) {
    invitation = (
      <>
        <div className={cn('search')}>
          <div className={cn('icon')}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/assets/icon/searchIcon.svg"
              alt="돋보기 아이콘"
              priority={true}
            />
          </div>
          <input placeholder="검색" />
        </div>
        <div className={cn('columns')}>
          <span className={cn('name')}>이름</span>
          <span className={cn('invitor')}>초대자</span>
          <span className={cn('acceptOrNot')}>수락 여부</span>
        </div>
        {/* 초대된 대시보드 목록을 이용하여 내용을 채워야 합니다.
        {invitedDashboardList.map(({ invitations }) => {
          return <div className={cn('invitedDashboard']}></div>
        })} */}
      </>
    );
  } else {
    invitation = (
      <div className={cn('empty')}>
        <div className={cn('emptyMessage')}>
          <Image
            layout="fill"
            src="/assets/icon/unsubscribeIcon.svg"
            alt="편지지 아이콘"
            priority={true}
            objectFit="cover"
          />
        </div>
        <span>아직 초대받은 대시보드가 없어요</span>
      </div>
    );
  }

  const onClcikNewDashboard = () => {
    setIsOpenModal(true);
  };

  const onClickCloseModal = () => {
    setIsOpenModal(false);
  };

  const onClickCreateDashboard = async (createDashboard: CreateDashboard) => {
    const response = await instance.post(
      'dashboards',
      { ...createDashboard },
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        },
      },
    );

    router.push(`/dashboard/${response.data.id}`);
  };

  const onClickPageButtonLeft = () => {
    setDashboardListPage((prevPage) => prevPage - 1);
  };

  const onClickPageButtonRight = () => {
    setDashboardListPage((prevPage) => prevPage + 1);
  };

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

        setUser(login.data.user);
        localStorage.setItem('accessToken', login.data.accessToken);

        const response = await instance.get('/dashboards', {
          params: {
            navigationMethod: 'pagination',
            page: dashboardListPage,
            size: 5,
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        setDashboardListTotalPage(Math.ceil(response.data.totalCount / 5));
        setDashboardList(response.data.dashboards);
      } catch (error) {
        console.log(error);
      }
    }

    login();
  }, [dashboardListPage]);

  return (
    <div className={cn('background')}>
      <MyHeader
        profileImageUrl={user?.profileImageUrl ?? '/assets/icon/logo.svg'}
        nickname={user?.nickname ?? 'unknown'}
      />
      <section className={cn('section')}>
        <MyDashboardList
          dashboardList={dashboardList}
          dashboardListPage={dashboardListPage}
          dashboardListTotalPage={dashboardListTotalPage}
          onClcikNewDashboard={onClcikNewDashboard}
          onClickPageButtonLeft={onClickPageButtonLeft}
          onClickPageButtonRight={onClickPageButtonRight}
        />

        <div className={cn('invitedDashboardList')}>
          <span>초대받은 대시보드</span>
          {invitation}
        </div>
      </section>
      <SideBar />
      {isOpenModal && (
        <CreateDashboardModal
          onClickCloseModal={onClickCloseModal}
          onClickAccept={onClickCreateDashboard}
        />
      )}
    </div>
  );
}
