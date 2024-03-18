import { AuthResponse, User } from '@/@types/type';
import { login } from '@/api/auth/authApi';
import Button from '@/components/atoms/buttons/button';
import EmailInput from '@/components/atoms/input/emailInput/EmailInput';
import PasswordInput from '@/components/atoms/input/passwordInput/PasswordInput';
import useSessionStorage from '@/hooks/useSessionStorage';
import { AxiosError } from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './login.module.scss';

interface SignInProps extends AuthRequest {
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
export default function Login() {
  const [accessToken, setAccessToken] = useSessionStorage('accessToken');
  const [user, setUser] = useSessionStorage<User | {}>('user', {});
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const form = useForm<SignInProps>({ mode: 'all' });
  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = form;

  const onSubmit: SubmitHandler<SignInProps> = async (payload: AuthRequest) => {
    clearErrors('root');
    try {
      const { accessToken, user } = await login(payload);
      setAccessToken(accessToken);
      setUser(user);
      router.push('/mydashboard');
    } catch (error) {
      const axiosError = error as AxiosError<AuthResponse>;
      setError(
        'root',
        axiosError.response?.data || { message: '로그인에 실패했습니다.' },
      );
    }
  };

  const handleSignUpLinkClick = () => {
    router.push('/signUp');
  };

  const handleLogoClick = () => {
    router.push('/');
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
        <div className={styles.loginLogo} onClick={handleLogoClick}>
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
        <Button name="로그인" type="account" disabled={!isValid} />
        {errors.root && (
          <div className={styles.errorMessage}>{errors.root.message}</div>
        )}
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
