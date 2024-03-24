import { CardDetail, Column } from '@/@types/type';
import Card from '@/components/molecules/card/Card';
import Image from 'next/image';
import { useState } from 'react';
import settingIcon from '../../../../public/assets/icon/settingsIcon.svg';
import EventDashboardBtn from '../buttons/eventDashboardBtn';
import ChipNumber from '../chipNumber/ChipNumber';
import ColorDot from '../colorDot/ColorDot';
import styles from './column.module.scss';

interface ColumnProps {
  column: Column;
  handleSettingButtonClick: (column: Column) => void;
  handleAddCardButtonClick: (column: Column) => void;
}

export default function ColumnComponent({
  column,
  handleSettingButtonClick,
  handleAddCardButtonClick,
}: ColumnProps) {
  const [cards, setCards] = useState<CardDetail[]>([]);

  const handleCardsData = (cardsData: CardDetail[]) => {
    setCards(cardsData);
  };
  return (
    <>
      <div key={column.id} className={styles['column']}>
        <div className={styles['defaultArea']}>
          <div className={styles['titleArea']}>
            <ColorDot colorName="blue" />
            <h1 className={styles['title']}>{column.title}</h1>
            <ChipNumber number={cards.length} />
          </div>

          <Image
            onClick={() => handleSettingButtonClick(column)}
            className={styles['settingIcon']}
            src={settingIcon}
            alt="Setting Icon"
          />
        </div>
        <EventDashboardBtn
          type="addTodo"
          onClick={() => handleAddCardButtonClick(column)}
        />
        <Card
          columnId={column.id}
          columnTitle={column.title}
          handleCardsData={handleCardsData}
        />
      </div>
    </>
  );
}
