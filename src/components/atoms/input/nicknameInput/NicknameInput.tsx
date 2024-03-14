import { FieldErrors, UseFormRegister } from 'react-hook-form';
import CommonInput from '../common/CommonInput';

interface Props {
  errors: FieldErrors;
  register: UseFormRegister<any>;
}

export default function NicknameInput({ errors, register }: Props) {
  return (
    <CommonInput
      errors={errors}
      label="닉네임"
      placeholder="닉네임을 입력해 주세요"
      type="text"
      {...register('nickname', {
        maxLength: {
          value: 10,
          message: '10자 이하로 작성해 주세요.',
        },
      })}
    />
  );
}
