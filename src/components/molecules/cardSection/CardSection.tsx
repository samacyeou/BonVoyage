import { Column } from '@/@types/type';
import instance from '@/api/axios';
import ColumnComponent from '@/components/atoms/column/ColumnComponent';
import { useEffect, useState } from 'react';
import CreateCardModal from '../modals/createCardModal/CreateCardModal';
import EditColumnModal from '../modals/editColumnModal/EditColumnModal';
import styles from './cardSection.module.scss';

interface CardSectionProps {
  dashboardId: number | string;
}

export default function CardSection({ dashboardId }: CardSectionProps) {
  const [isCreateCardModalOpen, setIsCreateCardModalOpen] = useState(false);
  const [isEditColumnModalOpen, setIsEditColumnModalOpen] = useState(false);
  const [columns, setColumns] = useState<Column[]>([]);
  const [selectedColumn, setSelectedColumn] = useState<Column | null>(null);

  async function getColumns() {
    try {
      const res = await instance.get<{ data: Column[] }>(
        `/columns?dashboardId=${dashboardId}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );
      setColumns(res.data.data);
    } catch (error) {
      console.error('Error fetching columns:', error);
    }
  }

  const handleAddCardButtonClick = (column: Column) => {
    setSelectedColumn(column);
    setIsCreateCardModalOpen(true);
  };

  const handleSettingButtonClick = (column: Column) => {
    setSelectedColumn(column);
    setIsEditColumnModalOpen(true);
  };

  const closeModal = () => {
    setSelectedColumn(null);
    setIsCreateCardModalOpen(false);
    setIsEditColumnModalOpen(false);
  };

  useEffect(() => {
    getColumns();
  }, [dashboardId]);

  return (
    <div className={styles['cardSection']}>
      {columns?.map((column) => (
        <ColumnComponent
          key={column.id}
          column={column}
          handleSettingButtonClick={handleSettingButtonClick}
          handleAddCardButtonClick={handleAddCardButtonClick}
        />
      ))}
      {isCreateCardModalOpen && (
        <CreateCardModal column={selectedColumn!} onClose={closeModal} />
      )}
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
