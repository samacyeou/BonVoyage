import styles from './sideBar.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

import addBoxIcon from '../../../../public/assets/icon/addBoxIcon.svg';
import SideBarMenu from '../sideBarMenu/SideBarMenu';
import Link from 'next/link';
import LogoWithTitle from '../logoWithTitle/LogoWithTitle';
import { useEffect, useState } from 'react';
import { getMyDashboardList } from '@/api/dashboardListApi/dashboardListApi';
import { Dashboard } from '@/@types/type';
import PagenationBtn from '../buttons/pagenationBtn';

const cn = classNames.bind(styles);

interface prop {
  path?: string;
}
export default function SideBar({ path }: prop) {
  const [dashboardList, setDashboardList] = useState<Dashboard[]>([]);
  const [dashboardListPage, setDashboardListPage] = useState(1);
  const [dashboardListTotalPage, setDashboardListTotalPage] = useState(0);
  const [hasScroll, setHasScroll] = useState(false);

  const onClickPageButtonLeft = () => {
    setDashboardListPage((prevPage) => prevPage - 1);
  };

  const onClickPageButtonRight = () => {
    setDashboardListPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    function isScroll() {
      const sideBar = document.querySelector('.sideBar');
      console.log(sideBar);
      if (sideBar) {
        if (sideBar.scrollHeight > sideBar.clientHeight) {
          console.log('뭐라고 말좀 해봐');
          setHasScroll(true);
        } else {
          console.log('제발');
          setHasScroll(false);
        }
      }
    }

    isScroll();

    window.addEventListener('resize', isScroll);

    return () => {
      window.removeEventListener('resize', isScroll);
    };
  }, []);

  useEffect(() => {
    async function setMyDashboardList() {
      try {
        const response = await getMyDashboardList(dashboardListPage, 8);

        setDashboardListTotalPage(Math.ceil(response.totalCount / 8));
        setDashboardList(response.dashboards);
      } catch (error) {
        console.log(error);
      }
    }

    setMyDashboardList();
  }, [dashboardListPage]);

  return (
    <div className={cn('sidebar')}>
      <div className={styles['logoArea']}>
        <LogoWithTitle />
      </div>
      <div className={styles['menuArea']}>
        <div className={styles['menuTitleArea']}>
          <h1 className={styles['menuTitle']}>Dash Boards</h1>
          <Image src={addBoxIcon}></Image>
        </div>
        {dashboardList.map((element) => {
          return (
            <Link href={`/dashboard/${element.id}`} key={element.id}>
              <a>
                <SideBarMenu menuTitle={element.title} color={element.color} />
              </a>
            </Link>
          );
        })}
        {/* <Link href={`${path}`}>
          <SideBarMenu menuTitle="코드잇" />
        </Link> */}
      </div>
      <div className={cn('pagenation', { hasScroll: hasScroll })}>
        <PagenationBtn
          onClickLeft={onClickPageButtonLeft}
          onClickRight={onClickPageButtonRight}
          nowPage={dashboardListPage}
          totalPage={dashboardListTotalPage}
        />
      </div>
    </div>
  );
}
