import PasswordChangeForm from './passwordChangeForm';
import ProfileForm from './profileForm';
import Layout from '../layout';
import styles from './account.module.scss';

const Account = () => {
  return (
    <div className={styles.container}>
      <div className={styles.return}> 돌아가기 </div>
      <ProfileForm />
      <PasswordChangeForm />
    </div>
  );
};

export default Account;

//여기에 돌아가기 버튼 추가
//사이드바에 예비용 보더 추가

