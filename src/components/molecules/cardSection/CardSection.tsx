import { Column } from '@/@types/type';
import ColumnComponent from '@/components/atoms/column/ColumnComponent';
import { CardListProvider, useColumnListState } from '@/hooks/contexts';
import { useState } from 'react';
import CreateCardModal from '../modals/createCardModal/CreateCardModal';
import EditColumnModal from '../modals/editColumnModal/EditColumnModal';
import styles from './cardSection.module.scss';

interface CardSectionProps {
  getColumns: () => void;
}

export default function CardSection({ getColumns }: CardSectionProps) {
  const [columns] = useColumnListState();
  const [isEditColumnModalOpen, setIsEditColumnModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<Column | null>(null);

  const handleSettingButtonClick = (column: Column) => {
    setSelectedColumn(column);
    setIsEditColumnModalOpen(true);
  };

  const closeModal = () => {
    setSelectedColumn(null);
    setIsEditColumnModalOpen(false);
  };

  return (
    <div className={styles['cardSection']}>
      {columns?.map((column) => (
        <CardListProvider initialValue={[]} key={column.id}>
          <ColumnComponent
            column={column}
            handleSettingButtonClick={handleSettingButtonClick}
          />
        </CardListProvider>
      ))}
      {isEditColumnModalOpen && selectedColumn && (
        <EditColumnModal
          onClose={closeModal}
          getColumns={getColumns}
          columnName={selectedColumn.title}
          columnId={selectedColumn.id}
        />
      )}
    </div>
  );
}
