import { useRouter } from 'next/router';
import PasswordChangeForm from './passwordChangeForm';
import ProfileForm from './profileForm';
import styles from './account.module.scss';
import leftArrowIcon from '../../../../public/assets/icon/leftArrowIcon.svg';
import Image from 'next/image';
import { useContext } from 'react';
import { userContext } from '@/pages/mypage/index';

const Account = () => {

  // const userInfo = useContext(userContext);
  // console.log(userInfo)

  const router = useRouter();
  const goBack = ()=>{
    router.back();
  }

  return (
    <div className={styles.container}>
      <button className={styles.return} onClick={goBack} >
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

//여기에 돌아가기 버튼 추가
