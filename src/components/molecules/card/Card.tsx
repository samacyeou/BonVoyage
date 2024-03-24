import { CardDetail } from '@/@types/type';
import instance from '@/api/axios';
import ChipTagWithoutX from '@/components/atoms/chipTag/ChipTagWithoutX';
import ProfileIcon from '@/components/atoms/profileIcon/ProfileIcon';
import { CardProvider } from '@/hooks/contexts';
import useAuth from '@/hooks/useAuth';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';
import calendarIcon from '../../../../public/assets/icon/calendarIcon.svg';
import CardDetailModal from '../modals/cardDetailModal/CardDetailModal';
import styles from './card.module.scss';

const colors: Array<'orange' | 'pink' | 'blue' | 'green'> = [
  'orange',
  'green',
  'pink',
  'blue',
];

interface CardProps {
  columnId: number;
  columnTitle: string;
  handleCardsData: (cardsData: CardDetail[]) => void;
}

export default function Card({
  columnId,
  columnTitle,
  handleCardsData,
}: CardProps) {
  const [cards, setCards] = useState<CardDetail[]>([]);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [clickedCard, setClickedCard] = useState<CardDetail>();

  async function getCards() {
    try {
      const res = await instance.get<{ cards: CardDetail[] }>(
        `/cards?size=10&columnId=${columnId}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        },
      );
      const nextCards = res.data.cards;
      setCards(nextCards);
      handleCardsData(nextCards);
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
            <img
              className={styles['cardImage']}
              src={card.imageUrl}
              alt="Card Image"
            />
          )}
          <div className={styles['infoArea']}>
            <span className={styles['cardTitle']}>{card.title}</span>
            <div className={styles['tagDateArea']}>
              {card.tags && (
                <div className={styles['tagArea']}>
                  {card.tags.map((tag, index) => (
                    <ChipTagWithoutX
                      key={tag + index}
                      tag={tag}
                      color={colors[index % 4]}
                    />
                  ))}
                </div>
              )}

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
                {card.assignee && (
                  <ProfileIcon
                    name={card.assignee.nickname}
                    profile={card.assignee.profileImageUrl}
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
