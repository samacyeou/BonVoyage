import React, { useState } from 'react';
import styles from './editColumnModal.module.scss';
import Button from '@/components/atoms/buttons/button';
import ColumnNameInput from '@/components/atoms/input/columnNameInput/ColumnNameInput';
import DeleteColumnModal from '../deleteColumnModal/DeleteColumnModal';

interface ModalProps {
  onClose: () => void;
}

export default function EditColumnModal({ onClose }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles['cardDetailModal']}>
      <div className={styles['modalContent']}>
        <h1 className={styles['modalTitle']}>새 컬럼 생성</h1>
        <ColumnNameInput></ColumnNameInput>
        <span className={styles['deleteButton']} onClick={handleDeleteClick}>
          삭제하기
        </span>

        <div className={styles['buttonArea']}>
          <Button
            name="취소"
            type="modal"
            color="white"
            onClick={onClose}
          ></Button>
          <Button name="변경" type="modal" color="blue" />
        </div>
      </div>
      {isModalOpen && (
        <DeleteColumnModal onClose={closeModal}></DeleteColumnModal>
      )}
    </div>
  );
}
