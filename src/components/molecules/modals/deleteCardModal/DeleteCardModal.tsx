import React, { useState } from 'react';
import styles from './deleteCardModal.module.scss';
import Button from '@/components/atoms/buttons/button';
import instance from '@/api/axios';

interface ModalProps {
  onClose: () => void;
  getCards: () => void;
  cardId: number;
}

export default function DeleteCardModal({
  onClose,
  getCards,
  cardId,
}: ModalProps) {
  const handleDeleteCard = async () => {
    try {
      await instance.delete(`/cards/${cardId}`);
      getCards();
      onClose();
      console.log('삭제');
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  console.log(cardId);
  return (
    <div className={styles['cardDetailModal']}>
      <div className={styles['modalContent']}>
        <h1 className={styles['modalTitle']}>할일을 삭제합니다.</h1>

        <div className={styles['buttonArea']}>
          <Button
            name="취소"
            type="modal"
            color="white"
            onClick={onClose}
          ></Button>
          <Button
            name="삭제"
            type="modal"
            color="blue"
            onClick={handleDeleteCard}
          />
        </div>
      </div>
    </div>
  );
}
