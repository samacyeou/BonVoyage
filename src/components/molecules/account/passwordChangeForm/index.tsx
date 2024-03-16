import CommonInput from '@/components/atoms/input/common/CommonInput';
import styles from './passwordChangeForm.module.scss';
import Button from '@/components/atoms/buttons/button';
import { useEffect, useState } from 'react';
import { userChangePassword } from '@/api/accountApi/accountApi';
import { useForm } from 'react-hook-form';
import BaseModal from '@/components/atoms/baseModal/BaseModal';

const PasswordChangeForm = () => {
  const { register } = useForm({ mode: 'all' }); // 사용하지는 않지만 register 에러 막기용

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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
      setIsModalOpen(true)
      setModalMessage('비밀번호가 변경되었어요.');
      return;
    }
    setIsModalOpen(true);
    setModalMessage('현재 비밀번호를 확인해주세요.');
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          register={register}
          name="password"
        />
        <CommonInput
          label="새 비밀번호"
          placeholder="새 비밀번호 입력"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          errors={{}}
          register={register}
          name="newPassword"
        />
        <CommonInput
          label="새 비밀번호 확인"
          placeholder="새 비밀번호 입력"
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          errors={{}}
          register={register}
          name="confirmNewPassword"
        />
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
        {ismodalOpen && (
          <BaseModal closeModal={closeModal}>
            <div className={styles.modalContainer}>
              <p>{modalMessage}</p>
              <div className={styles.modalBtn}>
                <Button
                  name="확인"
                  type="modal"
                  color="blue"
                  onClick={closeModal}
                />
              </div>
            </div>
          </BaseModal>
        )}
      </div>
    </div>
  );
};
export default PasswordChangeForm;

//여기에는 비밀번호 변경 폼
