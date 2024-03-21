import React, { useState } from 'react';
import styles from './editCardModal.module.scss';
import CreateDoItYourselfTitle from '@/components/atoms/input/titleInput/CreateDoItYourselfTitle';
import CreateDoItYourselfDescription from '@/components/atoms/input/descriptionInput/CreateDoItYourselfDescription';
import CreateDoItYourselfDate from '@/components/atoms/input/dateInput/CreateDoItYourselfDate';
import CreateDoItYourselfTag from '../../input/CreateDoItYourselfTag';
import ManagerDropDown from '../../managerDropDown/ManagerDropDown';
import ImageInput from '../../imageInput/ImageInput'
import Button from '@/components/atoms/buttons/button';
import StatusDropDown from '../../statusDropDown/StatusDropDown';

interface ModalProps {
  onClose: () => void;
  // selectedManager: MemberProfile | null;
}

export default function EditCardModal({ onClose, cardData }: ModalProps) {
  console.log(cardData);
  const [title, setTitle] = useState(cardData.title);
  const [description, setDescription] = useState(cardData.description);
  const [dueDate, setDueDate] = useState(cardData.dueDate);
  const [tags, setTags] = useState(cardData.tags);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <div className={styles['cardDetailModal']} onClick={handleModalClick}>
      <div className={styles['modalContent']}>
        <h1 className={styles['modalTitle']}>할 일 수정</h1>
        {/* <StatusDropDown></StatusDropDown> */}
        <ManagerDropDown></ManagerDropDown>
        <CreateDoItYourselfTitle
          value={title}
          onChange={handleTitleChange}
        ></CreateDoItYourselfTitle>
        <CreateDoItYourselfDescription></CreateDoItYourselfDescription>
        <CreateDoItYourselfDate></CreateDoItYourselfDate>
        <CreateDoItYourselfTag></CreateDoItYourselfTag>
        <div>
          <h2>이미지</h2>
          <ImageInput size="big"></ImageInput>
        </div>
        <div className={styles['buttonArea']}>
          <Button
            name="취소"
            type="modal"
            color="white"
            onClick={onClose}
          ></Button>
          <Button name="수정" type="modal" color="blue" />
        </div>
      </div>
    </div>
  );
}
