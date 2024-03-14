import Image from 'next/image';
import { forwardRef, useState } from 'react';
import {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form';
import eyeOffIcon from '../../../../../public/assets/icon/eyeOffIcon.svg';
import eyeOnIcon from '../../../../../public/assets/icon/eyeOnIcon.svg';
import CommonInput from '../common/CommonInput';

export interface Props extends UseFormRegisterReturn {
  errors: FieldErrors;
  register: UseFormRegister<any>;
  placeholder?: string;
  text?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, Props>(
  function PasswordInput(
    {
      register,
      placeholder = '비밀번호를 입력해주세요',
      text = '비밀번호',
      ...props
    },
    ref,
  ) {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = (): void => {
      setIsClicked(!isClicked);
    };

    const passwordIcon = (
      <Image
        alt="EyeIcon"
        onClick={handleClick}
        src={isClicked ? eyeOnIcon : eyeOffIcon}
      />
    );

    return (
      <CommonInput
        label={text}
        placeholder={placeholder}
        type={isClicked ? 'text' : 'password'}
        {...register('password', {
          minLength: {
            value: 8,
            message: '8자 이상 입력해주세요.',
          },
        })}
        icon={passwordIcon}
        {...props}
        ref={ref}
      />
    );
  },
);

export default PasswordInput;
