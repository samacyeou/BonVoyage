import Button from '@/components/atoms/buttons/button';
import EmailInput from '@/components/atoms/input/emailInput/EmailInput';
import NicknameInput from '@/components/atoms/input/nicknameInput/NicknameInput';
import PasswordInput from '@/components/atoms/input/passwordInput/PasswordInput';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './login.module.scss';
import { useRouter } from 'next/router';

interface SignInProps {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const DynamicImage = dynamic(() => import('next/image'));

const MobileLogo = () => (
  <DynamicImage
    src="/assets/icon/bonVoyageMobileLogo.svg"
    width={150}
    height={150}
    alt="Mobile Logo"
  />
);

const DesktopLogo = () => (
  <DynamicImage
    src="/assets/icon/bonVoyageLogo.svg"
    width={500}
    height={100}
    alt="Desktop Logo"
  />
);
export default function SignIn() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const form = useForm<SignInProps>({ mode: 'all' });
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = form;

  const onSubmit: SubmitHandler<SignInProps> = (data: any) => {
    // Handle form submission
  };

  const handleSignUpLinkClick = () => {
    router.push('/signUp');
  };

  const handleLoginBtnClick = () => {
    router.push('/mydashboard');
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (
      e: MediaQueryListEvent | MediaQueryList,
    ) => {
      setIsMobile(e.matches);
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginLogoContainer}>
        <div className={styles.loginLogo}>
          {isMobile ? <MobileLogo /> : <DesktopLogo />}
        </div>
        <span className={styles.loginNiceMeetYouText}>
          오늘도 만나서 반가워요!
        </span>
      </div>
      <form
        className={styles.loginFormContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailInput errors={errors} register={register} />
        <PasswordInput errors={errors} register={register} />
        <Button
          name="로그인"
          type="account"
          disabled={!isValid}
          onClick={handleLoginBtnClick}
        />
      </form>
      <div className={styles.signUpLinkBox}>
        회원이 아니신가요?
        <span className={styles.signUpLinkText} onClick={handleSignUpLinkClick}>
          회원가입하기
        </span>
      </div>
    </div>
  );
}
