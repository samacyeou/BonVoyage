import styles from './headerMyDashboard.module.scss';
import classNames from 'classnames/bind';
import HeaderBtn from '@/components/atoms/buttons/headerBtn';
import Image from 'next/image';
import ProfileIcon from '@/components/atoms/profileIcon/ProfileIcon';
import { useEffect, useState } from 'react';
import ProfileDown from '@/components/molecules/profileDropdown/index';
import { useContext } from 'react';
import { userContext } from '@/pages/_app';
import { useRouter } from 'next/router';
import axios from '@/api/axios';

const cn = classNames.bind(styles);

interface Props {
  boardTitle?: string;
  isDashboard?: boolean;
  ismyDashboard?: boolean;
}

export default function HeaderMyDashboard({
  boardTitle = '내 대시보드',
  isDashboard = false,
  ismyDashboard = false,
}: Props) {
  const [isOpenNicknameMenu, setIsOpenNicknameMenu] = useState(false);
  const [dashboard, setDashboard] = useState();
  const { userInfo } = useContext(userContext);
  const router = useRouter();
  const { id } = router.query;

  async function getDashboard(targetId: string) {
    const res = await axios.get(`/dashboards/${targetId}`);
    const nextDashboard = res.data;
    setDashboard(nextDashboard);
  }
  useEffect(() => {
    if (!id) return;
    getDashboard(id);
  }, [id]);

  function onClickEdit() {
    router.push(`${id}/edit`);
  }

  function onClickInvite() {}

  return (
    <>
      <div
        className={cn(
          { header: isDashboard },
          { dashboardHomeHeader: !isDashboard },
        )}
      >
        <div
          className={cn(
            { boardTitle: isDashboard },
            { dashboardHomeBorderTitle: !isDashboard },
          )}
        >
          {!isDashboard && <span>{boardTitle}</span>}
          {isDashboard && (
            <>
              <span>{dashboard?.title}</span>
              <Image
                src="/assets/icon/crownIcon.svg"
                width={20}
                height={16}
                alt="crown"
              />
            </>
          )}
        </div>
        <div className={styles['headerRight']}>
          {isDashboard && (
            <div className={styles['headerBtn']}>
              <HeaderBtn name="관리" type="edit" onClick={onClickEdit} />
              <HeaderBtn name="초대하기" type="invite" />
            </div>
          )}
          {isDashboard && <div className={styles['line']}></div>}
          <div className={styles['invited']}></div>
          <button
            className={styles['userProfile']}
            onClick={() => setIsOpenNicknameMenu((preState) => !preState)}
            onBlur={() => setTimeout(() => setIsOpenNicknameMenu(false), 100)}
          >
            <ProfileIcon
              name={userInfo?.nickname}
              profile={userInfo?.profileImageUrl}
            />
            <span className={styles['name']}>{userInfo?.nickname}</span>
            {isOpenNicknameMenu && (
              <ProfileDown onBlur={() => setIsOpenNicknameMenu(false)} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
