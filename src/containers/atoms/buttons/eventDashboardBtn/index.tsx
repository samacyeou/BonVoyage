import { ButtonProps } from '@/@types/type';
import styles from './eventDashboardBtn.module.scss';
import Image from 'next/image';
import plus_png from '../../../../../public/assets/icon/plus.png';


const EventDashboardBtn = ({ name, type, onClick }: ButtonProps) => {
  const classNames = (type: ButtonProps['type']) => {
    switch (type) {
      case 'addColumn':
        return styles.addColumn;
      case 'newDashboard':
        return styles.newDashboard;
      case 'addTodo':
        return styles.addTodo;
      case 'deleteDashboard':
        return styles.deleteDashboard;
      default:
        return '';
    }
  };
  return (
    <button className={classNames(type)} onClick={onClick}>
      {name}
      {type !== 'deleteDashboard' && (
        <div className={styles.icon}>
          <Image src={plus_png} alt='plus' width={20} height={20} />
        </div>
      )}
    </button>
  );
};

export default EventDashboardBtn;

//사용법

// <eventDashboardBtn name="새로운 컬럼 추가하기" type="addColumn"/>
//

// <eventDashboardBtn name="새로운 대시보드" type="newDashboard"/>

// <eventDashboardBtn type="addTodo"/>

// <eventDashboardBtn name="대시보드 삭제하기" type="deleteDashboard"/>
