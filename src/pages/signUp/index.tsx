import EmailInput from '@/components/atoms/input/emailInput/EmailInput';
import NicknameInput from '@/components/atoms/input/nicknameInput/NicknameInput';
import PasswordConfirmInput from '@/components/atoms/input/passwordConfirmInput/passwordConfirmInput';
import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './signUp.module.scss';

interface SignUpProps {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({ mode: 'all' });
  const [password, setPassword] = useState<string>('');
  console.error('errors', errors);

  const onSubmit: SubmitHandler<SignUpProps> = (data: any) => {
    // Handle form submission
  };

  const logo = (
    <Image src="/assets/icon/taskify.svg" width={120} height={120} alt="logo" />
  );

  return (
    <div className={styles.signUpWrapper}>
      <div className={styles.signUpLogoContainer}>
        <div className={styles.signUpLogo}>{logo}</div>
        <p className={styles.signUpNiceMeetYouText}>첫 방문을 환영합니다!</p>
      </div>
      <form
        className={styles.signUpFormContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailInput errors={errors} />
        <NicknameInput errors={errors} />
        <PasswordConfirmInput
          errors={errors}
          placeholder="비밀번호를 입력해주세요"
          text="비밀번호"
          {...register('password', {
            minLength: {
              value: 8,
              message: '8자 이상 입력해주세요.',
            },
            // required: '비밀번호를 입력해주세요',
          })}
        />
        <PasswordConfirmInput
          errors={errors}
          placeholder="비밀번호를 한번 더 입력해주세요"
          text="비밀번호 확인"
          {...register('passwordConfirm', {
            minLength: {
              value: 8,
              message: '8자 이상 입력해주세요.',
            },
            // required: '비밀번호를 입력해주세요',
            validate: {
              matchesConfirmation: (value, { password }) =>
                value === password || '비밀번호가 일치하지 않습니다.',
            },
          })}
        />
      </form>
    </div>
  );
}
