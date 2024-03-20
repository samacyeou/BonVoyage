import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './cardDetailModal.module.scss';
import ChipProgress from '../../ChipProgress/ChipProgress';
import image from '../../../../../public/assets/image/testImage.png';
import CreateDoItYourselfComment from '@/components/atoms/input/commentInput/CreateDoItYourselfComment';
import ChipTagWithoutX from '@/components/atoms/chipTag/ChipTagWithoutX';
import CardDetailKebap from '../../cardDetailKebap/CardDetailKebap';
import instance from '@/api/axios';

interface ModalProps {
  onClose: () => void;
  cardId: number;
  columnTitle: string;
  getCards: () => void;
}

interface CardDetail {
  title: string;
  assignee?: {
    profileImageUrl: string;
    nickname: string;
  };
  dueDate: string;
  tags: [];
  description: string;
  imageUrl: string;
}

export default function CardDetailModal({
  onClose,
  cardId,
  columnTitle,
  getCards,
}: ModalProps) {
  const [cardDetail, setCardDetail] = useState<CardDetail | null>(null);

  async function getCardDetail() {
    try {
      const res = await instance.get<CardDetail>(`/cards/${cardId}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      });
      const cardInformation = res.data;
      setCardDetail(cardInformation);
    } catch (error) {
      console.error('Error fetching cardDetail:', error);
    }
  }
  console.log(cardDetail);
  console.log(cardId);

  useEffect(() => {
    getCardDetail();
  }, [cardId]);

  return (
    <div className={styles['cardDetailModal']}>
      <div className={styles['modalContent']}>
        <div className={styles['topArea']}>
          <div className={styles['menuArea']}>
            {/* <img
              className={styles['kebabIcon']}
              src="/assets/icon/kebabMenuIcon.svg"
            /> */}
            <CardDetailKebap
              cardId={cardId}
              getCards={getCards}
            ></CardDetailKebap>
            <img
              className={styles['closeIcon']}
              src="/assets/icon/closeIcon.svg"
              onClick={onClose}
            />
          </div>
          <h1 className={styles['title']}> {cardDetail?.title}</h1>
        </div>
        <div className={styles['mainArea']}>
          <div className={styles['infoArea']}>
            <div className={styles['userInfoArea']}>
              <h2 className={styles['infoTitle']}>담당자</h2>
              <div className={styles['userInfo']}>
                {cardDetail?.assignee && cardDetail.assignee.profileImageUrl ? (
                  <img
                    src={cardDetail.assignee.profileImageUrl}
                    alt="프로필 이미지"
                  />
                ) : (
                  <img
                    src="/assets/image/testProfile.png"
                    alt="프로필 이미지"
                  />
                )}

                <span className={styles['name']}>
                  {cardDetail?.assignee ? cardDetail.assignee.nickname : ''}
                </span>
              </div>
            </div>
            <div className={styles['dateArea']}>
              <h2 className={styles['infoTitle']}>마감일</h2>
              <span className={styles['date']}>{cardDetail?.dueDate}</span>
            </div>
          </div>
          <div className={styles['contentArea']}>
            <div className={styles['tagArea']}>
              <ChipProgress column={columnTitle}></ChipProgress>
              <div className={styles['line']}></div>
              <ChipTagWithoutX
                tag={cardDetail?.tags.join(' ')}
                color="pink"
              ></ChipTagWithoutX>
            </div>
            <p className={styles['description']}>{cardDetail?.description}</p>
            <div className={styles['imageArea']}>
              <Image
                className={styles['image']}
                src={cardDetail?.imageUrl}
                width={300}
                height={200}
              ></Image>
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
