import styles from './myDashboardList.module.scss';
import classNames from 'classnames/bind';
import EventDashboardBtn from '@/components/atoms/buttons/eventDashboardBtn';
import MyDashboardBtn from '@/components/atoms/buttons/myDashboardBtn';
import ColorDot from '@/components/atoms/colorDot/ColorDot';
import LeftArrowIcon from '@/components/icon/LeftArrowIcon';
import ForwardArrowIcon from '@/components/icon/ForwardArrowIcon';
import { Dashboard } from '@/@types/type';

const cn = classNames.bind(styles);

interface Props {
  dashboardList: Dashboard[];
  dashboardListPage: number;
  dashboardListTotalPage: number;
  onClcikNewDashboard: () => void;
  onClickPageButtonLeft: () => void;
  onClickPageButtonRight: () => void;
}

export default function MyDashboardList({
  dashboardList,
  dashboardListPage,
  dashboardListTotalPage,
  onClcikNewDashboard,
  onClickPageButtonLeft,
  onClickPageButtonRight,
}: Props) {
  return (
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
              src={<ColorDot colorName={element.color} />}
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
              <LeftArrowIcon color={1 < dashboardListPage ? 'black' : 'gray'} />
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
                  dashboardListTotalPage > dashboardListPage ? 'black' : 'gray'
                }
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
