import { Column } from '@/@types/type';
import Card from '@/components/molecules/card/Card';
import CreateCardModal from '@/components/molecules/modals/createCardModal/CreateCardModal';
import { useCardList } from '@/hooks/contexts';
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
}

export default function ColumnComponent({
  column,
  handleSettingButtonClick,
}: ColumnProps) {
  const [cards] = useCardList();
  const [isCreateCardModalOpen, setIsCreateCardModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<Column | null>(null);

  const handleAddCardButtonClick = (column: Column) => {
    setSelectedColumn(column);
    setIsCreateCardModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedColumn(null);
    setIsCreateCardModalOpen(false);
  };

  return (
    <>
      <div key={column.id} className={styles['column']}>
        <div className={styles['defaultArea']}>
          <div className={styles['titleArea']}>
            <ColorDot colorName="blue" />
            <h1 className={styles['title']}>{column.title}</h1>
            {cards && <ChipNumber number={cards?.length} />}
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
        <Card columnId={column.id} columnTitle={column.title} />
      </div>
      {isCreateCardModalOpen && (
        <CreateCardModal column={selectedColumn!} onClose={handleCloseModal} />
      )}
    </>
  );
}
