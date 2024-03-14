import EmailInput from '@/components/atoms/input/emailInput/EmailInput';
import NicknameInput from '@/components/atoms/input/nicknameInput/NicknameInput';
import PasswordConfirmInput from '@/components/atoms/input/passwordConfirmInput/passwordConfirmInput';
import PasswordInput from '@/components/atoms/input/passwordInput/PasswordInput';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './signUp.module.scss';
import Button from '@/components/atoms/buttons/button';
import { useRouter } from 'next/router';

interface SignUpProps {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  terms: boolean;
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
export default function SignUp() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const form = useForm<SignUpProps>({ mode: 'all' });
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = form;

  const onSubmit: SubmitHandler<SignUpProps> = (data: any) => {
    // Handle form submission
  };

  const handleSignUpBtnClick = () => {
    alert('가입이 완료되었습니다.');
    router.push('/login');
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
    <div className={styles.signUpWrapper}>
      <div className={styles.signUpLogoContainer}>
        <div className={styles.signUpLogo}>
          {isMobile ? <MobileLogo /> : <DesktopLogo />}
        </div>
        <span className={styles.signUpNiceMeetYouText}>
          첫 방문을 환영합니다!
        </span>
      </div>
      <form
        className={styles.signUpFormContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailInput errors={errors} register={register} />
        <NicknameInput errors={errors} register={register} />
        <PasswordInput
          errors={errors}
          register={register}
          {...register('password', {
            minLength: {
              value: 8,
              message: '8자 이상 입력해주세요.',
            },
          })}
        />
        <PasswordConfirmInput
          errors={errors}
          form={form as any}
          {...register('passwordConfirm', {
            minLength: {
              value: 8,
              message: '8자 이상 입력해주세요.',
            },
            validate: (value, { password }) =>
              value === password || '비밀번호가 일치하지 않습니다.',
          })}
        />
        <div className={styles.termsOfService}>
          <input
            type="checkbox"
            id="terms"
            {...register('terms', { required: true })}
          />
          <label htmlFor="termsOfService" className={styles.signUpTermsLabel}>
            이용약관에 동의합니다.
          </label>
        </div>
        <div className={styles.signUpError}>
          {errors.terms && '약관에 동의해주세요.'}
        </div>
        <Button
          name="가입하기"
          type="account"
          disabled={!isValid}
          onClick={handleSignUpBtnClick}
        />
      </form>
    </div>
  );
}
