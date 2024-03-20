import React from 'react';
import styles from './createCardModal.module.scss';
import CreateDoItYourselfTitle from '@/components/atoms/input/titleInput/CreateDoItYourselfTitle';
import CreateDoItYourselfDescription from '@/components/atoms/input/descriptionInput/CreateDoItYourselfDescription';
import CreateDoItYourselfDate from '@/components/atoms/input/dateInput/CreateDoItYourselfDate';
import CreateDoItYourselfTag from '../../input/CreateDoItYourselfTag';
import ManagerDropDown from '../../managerDropDown/ManagerDropDown';
import ProfileImageInput from '../../profileImageInput/ProfileImageInput';
import Button from '@/components/atoms/buttons/button';

interface ModalProps {
  onClose: () => void;
}

export default function CreateCardModal({ onClose }: ModalProps) {
  return (
    <div className={styles['cardDetailModal']}>
      <div className={styles['modalContent']}>
        <h1 className={styles['modalTitle']}>할 일 생성</h1>
        <ManagerDropDown></ManagerDropDown>
        <CreateDoItYourselfTitle></CreateDoItYourselfTitle>
        <CreateDoItYourselfDescription></CreateDoItYourselfDescription>
        <CreateDoItYourselfDate></CreateDoItYourselfDate>
        <CreateDoItYourselfTag></CreateDoItYourselfTag>
        <div>
          <h2>이미지</h2>
          <ProfileImageInput size="big"></ProfileImageInput>
        </div>
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
