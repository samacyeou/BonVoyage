import { CardDetail } from '@/@types/type';
import { getCardList } from '@/api/cards/cardApi';
import ChipTagWithoutX from '@/components/atoms/chipTag/ChipTagWithoutX';
import { CardProvider, useCardList } from '@/hooks/contexts';
import useAuth from '@/hooks/useAuth';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';
import calendarIcon from '../../../../public/assets/icon/calendarIcon.svg';
import CardDetailModal from '../modals/cardDetailModal/CardDetailModal';
import styles from './card.module.scss';

interface CardProps {
  columnId: number;
  columnTitle: string;
}

export default function Card({ columnId, columnTitle }: CardProps) {
  const [cards, setCards] = useCardList();
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [clickedCard, setClickedCard] = useState<CardDetail>();

  async function getCards() {
    try {
      const res = await getCardList(columnId);
      const nextCards = res.cards;
      setCards(nextCards);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }

  useAuth(() => {
    if (columnId !== undefined) {
      getCards();
    }
  }, [columnId]);

  const handleCardClick = (card: CardDetail) => {
    setClickedCard(card);
    setIsDetailModalOpen(true);
  };

  const closeModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <div>
      {cards?.map((card) => (
        <div
          key={card.id}
          className={styles['card']}
          onClick={() => handleCardClick(card)}
        >
          {card.imageUrl && (
            <Image
              className={styles['cardImage']}
              src={card.imageUrl}
              alt="Card Image"
              width={300}
              height={200}
            />
          )}
          <div className={styles['infoArea']}>
            <span className={styles['cardTitle']}>{card.title}</span>
            <div className={styles['tagDateArea']}>
              <div className={styles['tagArea']}>
                <ChipTagWithoutX tag={card.tags.join(' ')} color="pink" />
              </div>

              <div className={styles['dateProfileArea']}>
                <div className={styles['dateArea']}>
                  <Image
                    className={styles['calendarIcon']}
                    src={calendarIcon}
                    alt="calendarIcon"
                  />
                  <span className={styles['date']}>
                    {format(card.createdAt, 'yyyy-MM-dd HH:mm')}
                  </span>
                </div>
                {card.assignee?.profileImageUrl && (
                  <Image
                    className={styles['userProfile']}
                    width={22}
                    height={22}
                    src={card.assignee.profileImageUrl}
                    alt="userProfile"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {isDetailModalOpen && (
        <CardProvider initialValue={clickedCard}>
          <CardDetailModal
            onClose={closeModal}
            columnTitle={columnTitle}
            getCards={getCards}
          />
        </CardProvider>
      )}
    </div>
  );
}
