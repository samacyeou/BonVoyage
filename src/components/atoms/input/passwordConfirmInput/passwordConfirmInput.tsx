import {
  FieldErrors,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form';
import PasswordInput from '../passwordInput/PasswordInput';
import { forwardRef } from 'react';

export interface Props extends UseFormRegisterReturn {
  errors: FieldErrors;
  form: UseFormReturn;
  text?: string;
}

const PasswordConfirmInput = forwardRef<HTMLInputElement, Props>(
  function PasswordConfirmInput(
    { errors, form, text = '비밀번호 확인', ...props },
    ref,
  ) {
    const { register, watch } = form;
    const password = watch('password');
    return (
      <PasswordInput
        errors={errors}
        placeholder="비밀번호를 한번 더 입력해주세요"
        register={register}
        text={text}
        {...register('passwordConfirm', {
          minLength: {
            value: 8,
            message: '8자 이상 입력해주세요.',
          },
          validate: {
            matchesConfirmation: (value) =>
              value === password || '비밀번호가 일치하지 않습니다.',
          },
        })}
        {...props}
        ref={ref}
      />
    );
  },
);

export default PasswordConfirmInput;
