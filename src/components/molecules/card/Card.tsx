import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import testImage from '../../../../public/assets/image/testImage.png';
import testProfile from '../../../../public/assets/image/testProfile.png';
import calendarIcon from '../../../../public/assets/icon/calendarIcon.svg';
import ChipTagWithoutX from '@/components/atoms/chipTag/ChipTagWithoutX';

interface CardProps {
  title: string;
  date: string;
  userProfile: string;
  onClick: () => void;
}

export default function Card({ title, date, userProfile, onClick }: CardProps) {
  return (
    <div className={styles['card']} onClick={onClick}>
      <img
        className={styles['cardImage']}
        src="assets/image/testImage.png"
      ></img>
      <div className={styles['infoArea']}>
        <span className={styles['cardTitle']}>{title}</span>
        <div className={styles['tagDateArea']}>
          <div className={styles['tagArea']}>
            <ChipTagWithoutX tag="일반" color="pink" />
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
