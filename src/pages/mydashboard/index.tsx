import instance from '@/api/axios';
import SideBar from '@/components/atoms/sideBar/SideBar';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import styles from './myDashboard.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { MouseEvent, useEffect, useState } from 'react';
import { Dashboard, Invitation, User } from '@/@types/type';
import MyDashboardList from '@/components/molecules/myDashboardList/MyDashboardList';
import InvitedDashboardList from '@/components/molecules/invitedDashboardList/InvitedDashboardList';

const cn = classNames.bind(styles);

export default function MyDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [dashboardList, setDashboardList] = useState<Dashboard[]>([]);
  const [dashboardListPage, setDashboardListPage] = useState(1);
  const [dashboardListTotalPage, setDashboardListTotalPage] = useState(0);
  const [invitedDashboardList, setInvitedDashboardList] = useState<
    Invitation[]
  >([]);
  const [cursorId, setCursorId] = useState(-1);
  const [statusForUpdate, setStatusForUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreData, setIsMoreData] = useState(true);

  const onClickPageButtonLeft = () => {
    setIsLoading(true);
    setDashboardListPage((prevPage) => prevPage - 1);
  };

  const onClickPageButtonRight = () => {
    setIsLoading(true);
    setDashboardListPage((prevPage) => prevPage + 1);
  };

  const onClickInviteAnswer = async (
    e: MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    const target = e.target as HTMLButtonElement;
    const answer = target.value === 'true';
    await instance.put(
      `/invitations/${id}`,
      {
        inviteAccepted: answer,
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        },
      },
    );

    setInvitedDashboardList((preList) => [
      ...preList.filter((element) => element.id !== id),
    ]);
    setIsLoading(true);
    setStatusForUpdate((preStatus) => !preStatus);
  };

  async function getInvitedDashboardList() {
    if (!isMoreData) {
      return;
    }

    setIsLoading(true);
    const params = cursorId === -1 ? { size: 10 } : { size: 10, cursorId };

    try {
      const { data } = await instance.get('/invitations', {
        params,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (!data.cursorId) {
        setIsMoreData(false);
      }

      setInvitedDashboardList((preArray) => [
        ...preArray,
        ...data.invitations.filter((newItem: Invitation) => {
          return !preArray.some((element) => element.id === newItem.id);
        }),
      ]);

      if (data.cursorId) {
        setCursorId(data.cursorId);
      } else {
        setCursorId(-2);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  let invitation;

  if (invitedDashboardList.length) {
    invitation = (
      <InvitedDashboardList
        invitedDashboardList={invitedDashboardList}
        isLoading={isLoading}
        isMoreData={isMoreData}
        onClickInviteAnswer={onClickInviteAnswer}
        getInivtedDashboardList={getInvitedDashboardList}
      />
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
      } finally {
        setIsLoading(false);
      }
    }

    login();
    getInvitedDashboardList();
  }, [dashboardListPage, statusForUpdate]);

  return (
    <div className={cn('background')}>
      <SideBar />
      <MyHeader
        profileImageUrl={user?.profileImageUrl ?? '/assets/icon/logo.svg'}
        nickname={user?.nickname ?? 'unknown'}
      />
      <section className={cn('section')}>
        <MyDashboardList
          dashboardList={dashboardList}
          dashboardListPage={dashboardListPage}
          dashboardListTotalPage={dashboardListTotalPage}
          onClickPageButtonLeft={onClickPageButtonLeft}
          onClickPageButtonRight={onClickPageButtonRight}
        />
        <div className={cn('invitedDashboardList')}>
          <span>초대받은 대시보드</span>
          {invitation}
        </div>
      </section>
    </div>
  );
}
