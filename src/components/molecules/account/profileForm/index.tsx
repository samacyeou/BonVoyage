import styles from './profileForm.module.scss';
import ImageInput from '@/components/molecules/imageInput/ImageInput';
import Button from '@/components/atoms/buttons/button';
import EmailInput from '@/components/atoms/input/emailInput/EmailInput';
import NicknameInput from '@/components/atoms/input/nicknameInput/NicknameInput';
import axios from '@/api/axios';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileForm = () => {
  const [email, setEmail] = useState<string>("");

  const getEmail = async () => {
    try {
      const res = await axios.get('/users/me');
      const result = res.data.email;
      setEmail(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEmail();
  }, []);

  return (
    <div className={styles.container}>
      <h1>프로필</h1>
      <ImageInput size="big" />
      <div className={styles.inputContainer}>
        <EmailInput disabled={true} placeholder={email} />
        <NicknameInput />
      </div>
      <div className={styles.ButtonContainer}>
        <Button name="저장" type="modal" color="blue" />
      </div>
    </div>
  );
};

export default ProfileForm;

//여기에는 프로필 수정 폼
