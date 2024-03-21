import { useRouter } from 'next/router';
import PasswordChangeForm from './passwordChangeForm';
import ProfileForm from './profileForm';
import styles from './account.module.scss';
import leftArrowIcon from '../../../../public/assets/icon/leftArrowIcon.svg';
import Image from 'next/image';

const Account = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <button className={styles.return} onClick={goBack}>
        <Image src={leftArrowIcon} alt="돌아가기" width={20} height={20} />
        돌아가기
      </button>
      <div className={styles.formContainer}>
        <ProfileForm />
        <PasswordChangeForm />
      </div>
    </div>
  );
};

export default Account;
