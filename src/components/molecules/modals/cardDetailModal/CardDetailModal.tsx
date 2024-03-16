import Image from 'next/image';
import React from 'react';
import styles from './cardDetailModal.module.scss';
import ChipProgress from '../../ChipProgress/ChipProgress';
import image from '../../../../../public/assets/image/testImage.png';
import CreateDoItYourselfComment from '@/components/atoms/input/commentInput/CreateDoItYourselfComment';
import ChipTagWithoutX from '@/components/atoms/chipTag/ChipTagWithoutX';

interface ModalProps {
  onClose: () => void;
}

export default function CardDetailModal({ onClose }: ModalProps) {
  return (
    <div className={styles['cardDetailModal']}>
      <div className={styles['modalContent']}>
        <div className={styles['topArea']}>
          <div className={styles['menuArea']}>
            <img
              className={styles['kebabIcon']}
              src="/assets/icon/kebabMenuIcon.svg"
            />
            <img
              className={styles['closeIcon']}
              src="/assets/icon/closeIcon.svg"
              onClick={onClose}
            />
          </div>
          <h1 className={styles['title']}> 새로운 일정 관리</h1>
        </div>
        <div className={styles['mainArea']}>
          <div className={styles['infoArea']}>
            <div className={styles['userInfoArea']}>
              <h2 className={styles['infoTitle']}>담당자</h2>
              <div className={styles['userInfo']}>
                <img src="/assets/image/testProfile.png"></img>
                <span className={styles['name']}>배유철</span>
              </div>
            </div>
            <div className={styles['dateArea']}>
              <h2 className={styles['infoTitle']}>마감일</h2>
              <span className={styles['date']}> 2022.12.30 19:00</span>
            </div>
          </div>
          <div className={styles['contentArea']}>
            <div className={styles['tagArea']}>
              <ChipProgress column="To Do"></ChipProgress>
              <div className={styles['line']}></div>
              <ChipTagWithoutX tag="프로젝트" color="pink"></ChipTagWithoutX>
            </div>
            <p className={styles['description']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum finibus nibh arcu, quis consequat ante cursus eget.
              Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros,
              vel aliquet diam elit at leo.
            </p>
            <div className={styles['imageArea']}>
              <Image className={styles['image']} src={image}></Image>
            </div>
            <div className={styles['commentArea']}>
              <CreateDoItYourselfComment></CreateDoItYourselfComment>
              <div className={styles['commentListArea']}>
                <div className={styles['commentWriterArea']}>
                  <img src="/assets/image/testProfile.png"></img>
                  <h1 className={styles['writerName']}> 정만철</h1>
                  <span className={styles['createDate']}>2022.12.27 14:00</span>
                </div>
                <span className={styles['commentText']}>
                  오늘안에 CCC 까지 만들 수 있을까요?
                </span>
                <div className={styles['buttonArea']}>
                  <span className={styles['button']}> 수정</span>
                  <span className={styles['button']}> 삭제</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
