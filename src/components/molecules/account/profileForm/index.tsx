import styles from './profileForm.module.scss';
import ImageInput from '@/components/molecules/imageInput/ImageInput';
import Button from '@/components/atoms/buttons/button';
import EmailInput from '@/components/atoms/input/emailInput/EmailInput';
import NicknameInput from '@/components/atoms/input/nicknameInput/NicknameInput';
import { useEffect } from 'react';
import { useState } from 'react';
import {userChangeNickname } from '@/api/acountApi/acountApi';
import { useContext } from 'react';
import { userContext } from '@/pages/mypage/index';

const ProfileForm = () => {

  const userInfo = useContext(userContext);

  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.target.value);
  };

  const handleSaveClick = async () => {
    try {
      await userChangeNickname(nickname); // 닉네임 변경 API 호출
      console.log('닉네임 변경 성공');
    } catch (error) {
      console.error('닉네임 변경 실패:', error);
    }
  };


  return (
    <div className={styles.container}>
      <h1>프로필</h1>
      <ImageInput size="big" />
      <div className={styles.inputContainer}>
        <EmailInput disabled={true} placeholder={userInfo.email} />
        <NicknameInput value={nickname} onChange={handleNicknameChange} />
      </div>
      <div className={styles.ButtonContainer}>
        <Button name="저장" type="modal" color="blue" onClick={handleSaveClick} />
      </div>
    </div>
  );
};


export default ProfileForm;

//여기에는 프로필 수정 폼
