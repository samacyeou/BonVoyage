import styles from './passwordChangeForm.module.scss';
import PasswordInput from '@/components/atoms/input/passwordInput/PasswordInput';
import PasswordConfirmInput from '@/components/atoms/input/passwordConfirmInput/passwordConfirmInput';
import Button from '@/components/atoms/buttons/button';

const PasswordChangeForm = () => {
  return (
    <div className={styles.container}>
      <h1>비밀번호 변경</h1>
      <div className={styles.inputContainer}>
        <PasswordInput text="현재 비밀번호" />
        <PasswordInput text="새 비밀번호" />
        <PasswordConfirmInput text="새 비밀번호 확인" />
      </div>
      <div className={styles.ButtonContainer}>
        <Button name="변경" type="modal" color="blue" />
      </div>
    </div>
  );
};

export default PasswordChangeForm;

//여기에는 비밀번호 변경 폼
