import { CardDetail } from '@/@types/type';
import KebapMenu from '@/components/atoms/kebapMenu/KebapMenu';
import { useColumnListState } from '@/hooks/contexts';
import { useState } from 'react';
import styles from './cardDetailKebap.module.scss';

interface ModalProps {
  getCards: () => void;
  cardId?: number;
  cardData: CardDetail;
}

const CardDetailKebap = ({ cardId, getCards, cardData }: ModalProps) => {
  const [columns] = useColumnListState();
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
        alt="kebab menu icon"
        src="/assets/icon/kebabMenuIcon.svg"
      />
      {view && (
        <KebapMenu
          cardId={cardId}
          getCards={getCards}
          cardData={cardData}
        />
      )}
    </div>
  );
};

export default CardDetailKebap;
