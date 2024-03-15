import CommonInput from '@/components/atoms/input/common/CommonInput';
import styles from './passwordChangeForm.module.scss';
import Button from '@/components/atoms/buttons/button';
import { useState } from 'react';
import { userChangePassword } from '@/api/acountApi/acountApi';


const PasswordChangeForm = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = async () => {
    if (newPassword !== confirmNewPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await userChangePassword({
        password: password,
        newPassword: newPassword,
      });
      console.log('비밀번호가 성공적으로 변경되었습니다.');
      setPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error) {
      console.error('비밀번호 변경 실패:', error);
      setError('비밀번호 변경에 실패했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>비밀번호 변경</h1>
      <div className={styles.inputContainer}>
        <CommonInput
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
        />
      </div>
      <div className={styles.error_text_wrapper}>{error && <p className={styles.error_text}>{error}</p>}</div>
      <div className={styles.ButtonContainer}>
        <Button
          name="변경"
          type="modal"
          color="blue"
          onClick={handlePasswordChange}
        />
      </div>
    </div>
  );
};
export default PasswordChangeForm;

//여기에는 비밀번호 변경 폼
