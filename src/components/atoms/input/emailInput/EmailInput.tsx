import { FieldErrors, UseFormRegister } from 'react-hook-form';
import CommonInput from '../common/CommonInput';

interface Props {
  errors: FieldErrors;
  register: UseFormRegister<any>;
}

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log({ email, regex, test: regex.test(email) });
  return regex.test(email);
}

export default function EmailInput({ errors, register }: Props) {
  return (
    <CommonInput
      errors={errors}
      label="이메일"
      placeholder="이메일을 입력해 주세요"
      type="email"
      {...register('email', {
        validate: (email: string) => {
          const isValid = validateEmail(email);
          return isValid ? true : '이메일 형식으로 작성해 주세요.';
        },
      })}
    />
  );
}
