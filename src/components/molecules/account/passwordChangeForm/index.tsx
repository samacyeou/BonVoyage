import CommonInput from '@/components/atoms/input/common/CommonInput';
import styles from './passwordChangeForm.module.scss';
import Button from '@/components/atoms/buttons/button';
import { useEffect, useState } from 'react';
import { userChangePassword } from '@/api/accountApi/accountApi';
import { stat } from 'fs';
import { register } from 'module';

const PasswordChangeForm = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');

  const isDisabled =
    password === '' || newPassword === '' || confirmNewPassword === '';

  const handlePasswordChange = async () => {
    if (newPassword !== confirmNewPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (newPassword.length < 8) {
      setError('새로운 비밀번호는 8자 이상 입력해주세요.');
      return;
    }

    const res: any = await userChangePassword({
      password: password,
      newPassword: newPassword,
    });

    if (res.status === 204) {
      setPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      return;
    }
    setError('현재 비밀번호가 틀렸습니다.');
  };

  return (
    <div className={styles.container}>
      <h1>비밀번호 변경</h1>
      <div className={styles.inputContainer}>
        {/* <CommonInput
          label="현재 비밀번호"
          placeholder="현재 비밀번호 입력"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errors={{}}
        />
        <CommonInput
          label="새 비밀번호"
          placeholder="새 비밀번호 입력"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          errors={{}}
        />
        <CommonInput
          label="새 비밀번호 확인"
          placeholder="새 비밀번호 입력"
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          errors={{}}
        /> */}
      </div>
      <div className={styles.error_text_wrapper}>
        {error && <p className={styles.error_text}>{error}</p>}
      </div>
      <div className={styles.ButtonContainer}>
        <Button
          name="변경"
          type="modal"
          color="blue"
          onClick={handlePasswordChange}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};
export default PasswordChangeForm;

//여기에는 비밀번호 변경 폼
