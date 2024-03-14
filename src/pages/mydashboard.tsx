import instance from '@/api/axios';
import EventDashboardBtn from '@/components/atoms/buttons/eventDashboardBtn';
import MyDashboardBtn from '@/components/atoms/buttons/myDashboardBtn';
import SideBar from '@/components/atoms/sideBar/SideBar';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import styles from '@/styles/myDashboard.module.scss';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';
import ellipseGreen from '../../public/assets/icon/ellipseGreen.svg';
import ellipsePurple from '../../public/assets/icon/ellipsePurple.svg';
import ellipseSkyBlue from '../../public/assets/icon/ellipseSkyBlue.svg';
import ellipsePink from '../../public/assets/icon/ellipsePink.svg';
import ellipseOrange from '../../public/assets/icon/ellipseOrange.svg';
import ForwardArrowIcon from '../components/icon/ForwardArrowIcon';
import LeftArrowIcon from '@/components/icon/LeftArrowIcon';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { User } from '@/@types/type';
import BaseModal from '@/components/atoms/baseModal/BaseModal';

const cn = classNames.bind(styles);

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
  const [user, setUser] = useState<User | null>(null);
  const [createDashboard, setCreateDashboard] = useState({
    title: '',
    color: '#7AC555',
  });
  const [dashboardList, setDashboardList] = useState<Dashboard[]>([]);
  const [dashboardListPage, setDashboardListPage] = useState(1);
  const [dashboardListTotalPage, setDashboardListTotalPage] = useState(0);
  const [invitedDashboardList, setInvitedDashboardList] = useState<
    Invitation[]
  >([]);
  const [isMobile, setIsMobile] = useState(false); // 이름, 초대자 모바일 구분용
  const [isOpenModal, setIsOpenModal] = useState(false);

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
          />
        </div>
        <span>아직 초대받은 대시보드가 없어요</span>
      </div>
    );
  }

  const onClcikNewDashboard = () => {
    setIsOpenModal(true);
  };

  const onChangeCreateDashboardTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateDashboard((preData) => ({
      ...preData,
      title: e.currentTarget.value,
    }));
  };

  const onClickPaletteColor = (e: MouseEvent<HTMLDivElement>) => {
    setCreateDashboard((preData) => ({
      ...preData,
      color: e.currentTarget.style.backgroundColor,
    }));
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

        const response = await instance.get('/dashboards', {
          params: {
            navigationMethod: 'pagination',
            page: dashboardListPage,
            size: 5,
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${login.data.accessToken}`,
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
        <div className={cn('dashboardListContainer')}>
          <div className={cn('dashboardList')}>
            <EventDashboardBtn
              name="새로운 대시보드"
              type="newDashboard"
              onClick={onClcikNewDashboard}
            />
            {dashboardList.map((element) => {
              return (
                <MyDashboardBtn
                  name={element.title}
                  src={ELLIPSE_LIST[element.color]}
                />
              );
            })}
          </div>
          <div className={cn('pagenation')}>
            <span>
              {dashboardListTotalPage} 페이지 중 {dashboardListPage}
            </span>
            <div className={cn('pageButtons')}>
              <button
                className={cn('pageButton', 'left')}
                onClick={onClickPageButtonLeft}
                disabled={1 >= dashboardListPage}
              >
                <div className={cn('arrowImage')}>
                  <LeftArrowIcon
                    color={1 < dashboardListPage ? 'black' : 'gray'}
                  />
                </div>
              </button>
              <button
                className={cn('pageButton', 'right')}
                onClick={onClickPageButtonRight}
                disabled={dashboardListTotalPage <= dashboardListPage}
              >
                <div className={cn('arrowImage')}>
                  <ForwardArrowIcon
                    color={
                      dashboardListTotalPage > dashboardListPage
                        ? 'black'
                        : 'gray'
                    }
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={cn('invitedDashboardList')}>
          <span>초대받은 대시보드</span>
          {invitation}
        </div>
      </section>
      <SideBar />
      {isOpenModal && (
        <BaseModal closeModal={() => setIsOpenModal(false)}>
          <div className={cn('modalContent')}>
            <span className={cn('modalName')}>새로운 대시보드</span>
            <div className={cn('dashboardName')}>
              <label>대시보드 이름</label>
              <input type="text" onChange={onChangeCreateDashboardTitle} />
            </div>
            <div className={cn('palette')}>
              <div
                className={cn('paletteColor', 'green')}
                onClick={onClickPaletteColor}
              />
              <div
                className={cn('paletteColor', 'orange')}
                onClick={onClickPaletteColor}
              />
              <div
                className={cn('paletteColor', 'purple')}
                onClick={onClickPaletteColor}
              />
              <div
                className={cn('paletteColor', 'pink')}
                onClick={onClickPaletteColor}
              />
              <div
                className={cn('paletteColor', 'skyblue')}
                onClick={onClickPaletteColor}
              />
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
}
