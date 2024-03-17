import React from 'react';
import styles from './createColumnModal.module.scss';

import Button from '@/components/atoms/buttons/button';
import ColumnNameInput from '@/components/atoms/input/columnNameInput/ColumnNameInput';

interface ModalProps {
  onClose: () => void;
}

export default function CreateColumnModal({ onClose }: ModalProps) {
  return (
    <div className={styles['cardDetailModal']}>
      <div className={styles['modalContent']}>
        <h1 className={styles['modalTitle']}>새 컬럼 생성</h1>
        <ColumnNameInput></ColumnNameInput>

        <div className={styles['buttonArea']}>
          <Button
            name="취소"
            type="modal"
            color="white"
            onClick={onClose}
          ></Button>
          <Button name="생성" type="modal" color="blue" />
        </div>
      </div>
    </div>
  );
}
