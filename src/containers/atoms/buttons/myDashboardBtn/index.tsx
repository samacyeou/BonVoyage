import { MyDashboardProps } from '@/@types/type';
import styles from './myDashboardBtn.module.scss';
import Image from 'next/image';
import forwardArrowIcon from '../../../../../public/assets/icon/forwardArrowIcon.svg';

const MyDashboard = ({
  name,
  src,
  src2,
  iconAlt,
  onClick,
}: MyDashboardProps) => {
  return (
    <button className={styles.myDashboardBtn} onClick={onClick}>
      <div className={styles.container}>
        <Image src={src} alt={iconAlt} width={10} height={10} />
        {name}
        <Image src={src2 ?? ''} alt={iconAlt} width={20} height={20} />
      </div>
      <Image
        src={forwardArrowIcon}
        alt='forwardArrowIcon'
        className={styles.arrowIcon}
        width={18}
        height={18}
      />
    </button>
  );
};

export default MyDashboard;

//src={src2 ?? ""}
//src2가 null또는 undefinedd이면  ""로 대체

//사용법

//<MyDashboard name="비브리지" src={ellipseGreen} src2={crownIcon}/>

//이런식으로 사용하실 컴포넌트에서 src, src2 prop에 이미지 import해서 사용하시면 됩니다.
//src2, iconAlt은 선택사항입니다.