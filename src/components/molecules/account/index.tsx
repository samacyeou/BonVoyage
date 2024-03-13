import PasswordChangeForm from './passwordChangeForm';
import ProfileForm from './profileForm';
import styles from './account.module.scss';
import leftArrowIcon from '../../../../public/assets/icon/leftArrowIcon.svg';
import Image from 'next/image';

const Account = () => {
  return (
    <div className={styles.container}>
      <button className={styles.return}>
        <Image src={leftArrowIcon} alt="돌아가기" width={20} height={20} />
        돌아가기
      </button>
      <ProfileForm />
      <PasswordChangeForm />
    </div>
  );
};

export default Account;

//여기에 돌아가기 버튼 추가
//사이드바에 예비용 보더 추가
