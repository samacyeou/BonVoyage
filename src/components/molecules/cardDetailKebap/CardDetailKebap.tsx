import KebapMenu from '@/components/atoms/kebapMenu/KebapMenu';
import { useState } from 'react';
import styles from './cardDetailKebap.module.scss';

interface ModalProps {
  getCards: () => void;
  cardId: number;
}

const CardDetailKebap = ({ cardId, getCards, cardData }: ModalProps) => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };
  return (
    <div
      className="kebap"
      onClick={(e) => {
        e.stopPropagation();
        handleView();
      }}
    >
      <img
        className={styles['kebabIcon']}
        src="/assets/icon/kebabMenuIcon.svg"
      />
      {view && (
        <KebapMenu
          cardId={cardId}
          getCards={getCards}
          cardData={cardData}
        ></KebapMenu>
      )}
    </div>
  );
};

export default CardDetailKebap;
