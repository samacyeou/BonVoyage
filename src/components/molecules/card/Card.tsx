import ChipNumber from '@/components/atoms/chipNumber/ChipNumber';
import ColorDot from '@/components/atoms/colorDot/ColorDot';
import styles from './card.module.scss';
import Image from 'next/image';
import testImage from '../../../../public/assets/image/testImage.png';
import testProfile from '../../../../public/assets/image/testProfile.png';
import calendarIcon from '../../../../public/assets/icon/calendarIcon.svg';
import ChipTag from '@/components/molecules/chipTag/ChipTag';

interface CardProps {
  title: string;
  date: string;
  userProfile: string;
}

export default function Card({ title, date, userProfile }: CardProps) {
  return (
    <div className={styles['card']}>
      <img
        className={styles['cardImage']}
        src="assets/image/testImage.png"
      ></img>
      <div className={styles['infoArea']}>
        <span className={styles['cardTitle']}>{title}</span>
        <div className={styles['tagDateArea']}>
          <div className={styles['tagArea']}>
            <ChipTag tag="일반" color="pink" />
          </div>

          <div className={styles['dateProfileArea']}>
            <div className={styles['dateArea']}>
              <Image
                className={styles['calendarIcon']}
                src={calendarIcon}
              ></Image>
              <span className={styles['date']}>{date}</span>
            </div>
            <Image
              className={styles['userProfile']}
              src={testProfile}
              alt="userProfile"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
