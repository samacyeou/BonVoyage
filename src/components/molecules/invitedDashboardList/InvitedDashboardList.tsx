import Image from 'next/image';
import styles from './invitedDashboardList.module.scss';
import classNames from 'classnames/bind';
import { MouseEvent, useEffect, useState } from 'react';
import { Invitation } from '@/@types/type';

const cn = classNames.bind(styles);

interface Props {
  invitedDashboardList: Invitation[];
  onClickInviteAnswer: (e: MouseEvent<HTMLButtonElement>, id: number) => void;
}

export default function InvitedDashboardList({
  invitedDashboardList,
  onClickInviteAnswer,
}: Props) {
  const [searchValue, setSearchValue] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 769) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
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
        <input
          placeholder="검색"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {isMobile ? (
        invitedDashboardList
          .filter((element) => {
            if (searchValue) {
              return element.dashboard.title.includes(searchValue);
            } else {
              return true;
            }
          })
          .map((element, index, array) => {
            return (
              <>
                <div className={cn('mobileInvitedDashboard')}>
                  <div className={cn('dashboardInfo')}>
                    <div className={cn('propertyValuePair')}>
                      <div className={cn('property')}>이름</div>
                      <span className={cn('value')}>
                        {element.dashboard.title}
                      </span>
                    </div>
                    <div className={cn('propertyValuePair')}>
                      <div className={cn('property')}>초대자</div>
                      <span className={cn('value')}>
                        {element.inviter.nickname}
                      </span>
                    </div>
                  </div>
                  <div className={cn('invitedDashboardButtons')}>
                    <button
                      className={cn('inviteAccept')}
                      onClick={(e) => onClickInviteAnswer(e, element.id)}
                      value="true"
                    >
                      수락
                    </button>
                    <button
                      className={cn('inviteReject')}
                      onClick={(e) => onClickInviteAnswer(e, element.id)}
                      value="false"
                    >
                      거절
                    </button>
                  </div>
                </div>
                {array.length - 1 !== index && (
                  <hr className={cn('mobileHr')} />
                )}
              </>
            );
          })
      ) : (
        <>
          <div className={cn('columns')}>
            <span className={cn('name')}>이름</span>
            <span className={cn('invitor')}>초대자</span>
            <span className={cn('acceptOrNot')}>수락 여부</span>
          </div>
          {invitedDashboardList
            .filter((element) => {
              if (searchValue) {
                return element.dashboard.title.includes(searchValue);
              } else {
                return true;
              }
            })
            .map((element, index, array) => {
              return (
                <>
                  <div className={cn('invitedDashboard')}>
                    <div className={cn('spaceHelper')}>
                      <span>{element.dashboard.title}</span>
                    </div>
                    <span>{element.inviter.nickname}</span>
                    <div className={cn('invitedDashboardButtons')}>
                      <button
                        className={cn('inviteAccept')}
                        onClick={(e) => onClickInviteAnswer(e, element.id)}
                        value="true"
                      >
                        수락
                      </button>
                      <button
                        className={cn('inviteReject')}
                        onClick={(e) => onClickInviteAnswer(e, element.id)}
                        value="false"
                      >
                        거절
                      </button>
                    </div>
                  </div>
                  {array.length - 1 !== index && <hr className={cn('hr')} />}
                </>
              );
            })}
        </>
      )}
    </>
  );
}
