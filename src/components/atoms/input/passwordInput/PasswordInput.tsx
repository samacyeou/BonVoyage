import Image from 'next/image';
import { useState } from 'react';
import eyeOffIcon from '../../../../../public/assets/icon/eyeOffIcon.svg';
import eyeOnIcon from '../../../../../public/assets/icon/eyeOnIcon.svg';
import CommonInput, { CommonInputProps } from '../common/CommonInput';

export interface Props extends CommonInputProps {
  placeholder?: string;
  text?: string;
}

function PasswordInput({
  errors,
  register,
  name = 'password',
  placeholder = '비밀번호를 입력해주세요',
  registerOptions = {
    required: '비밀번호를 입력해주세요.',
  },
  text = '비밀번호',
}: Props) {
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
      errors={errors}
      icon={passwordIcon}
      label={text}
      name={name}
      placeholder={placeholder}
      register={register}
      registerOptions={{
        minLength: {
          value: 8,
          message: '8자 이상 입력해주세요.',
        },
        ...registerOptions,
      }}
      type={isClicked ? 'text' : 'password'}
    />
  );
}

export default PasswordInput;
