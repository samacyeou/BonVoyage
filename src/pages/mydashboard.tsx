import instance from '@/api/axios';
import EventDashboardBtn from '@/components/atoms/buttons/eventDashboardBtn';
import MyDashboardBtn from '@/components/atoms/buttons/myDashboardBtn';
import SideBar from '@/components/atoms/sideBar/SideBar';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import styles from '@/styles/myDashboard.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import ForwardArrowIcon from '../components/icon/ForwardArrowIcon';
import LeftArrowIcon from '@/components/icon/LeftArrowIcon';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { User } from '@/@types/type';
import BaseModal from '@/components/atoms/baseModal/BaseModal';
import ColorDot from '@/components/atoms/colorDot/ColorDot';
import CheckIcon from '@/components/icon/CheckIcon';
import { useRouter } from 'next/router';

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

const COLOR_LIST: { [value: string]: string } = {
  '#7AC555': 'green',
  '#FFA500': 'orange',
  '#E876EA': 'pink',
  '#760DDE': 'purple',
  '#76A5EA': 'blue',
  green: '#7AC555',
  orange: '#FFA500',
  pink: '#E876EA',
  purple: '#760DDE',
  blue: '#76A5EA',
};

const COLOR_NAMES = ['green', 'purple', 'orange', 'pink', 'blue'];

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

  const onChangeCreateDashboardTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateDashboard((preData) => ({
      ...preData,
      title: e.target.value,
    }));
    console.log(createDashboard);
  };

  const onClickPaletteColor = (color: string) => {
    setCreateDashboard((preData) => ({
      ...preData,
      color: COLOR_LIST[color],
    }));
  };

  const onClickCloseModal = () => {
    setCreateDashboard({ title: '', color: '#7AC555' });
    setIsOpenModal(false);
  };

  const onClickCreateDashboard = async () => {
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
                  key={element.id}
                  name={element.title}
                  src={<ColorDot colorName={COLOR_LIST[element.color]} />}
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
        <BaseModal closeModal={onClickCloseModal}>
          <div className={cn('modalContent')}>
            <span className={cn('modalName')}>새로운 대시보드</span>
            <div className={cn('dashboardName')}>
              <label>대시보드 이름</label>
              <input type="text" onChange={onChangeCreateDashboardTitle} />
            </div>
            <div className={cn('palette')}>
              {COLOR_NAMES.map((element, index) => {
                return (
                  <div
                    key={index}
                    className={cn('paletteColor', element)}
                    onClick={() => onClickPaletteColor(element)}
                  >
                    {COLOR_LIST[element] === createDashboard.color && (
                      <div className={cn('checkIcon')}>
                        <CheckIcon color="white" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className={cn('modalButtons')}>
              <button className={cn('modalCancel')} onClick={onClickCloseModal}>
                취소
              </button>
              <button
                className={cn('modalCreate')}
                onClick={onClickCreateDashboard}
              >
                생성
              </button>
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
}
