import { CommonInputProps } from '../common/CommonInput';
import PasswordInput from '../passwordInput/PasswordInput';

export interface Props extends CommonInputProps {
  text?: string;
}

function PasswordConfirmInput({
  errors,
  register,
  name = 'passwordConfirm',
  text = '비밀번호 확인',
}: Props) {
  return (
    <PasswordInput
      errors={errors}
      name={name}
      placeholder="비밀번호를 한번 더 입력해주세요"
      register={register}
      registerOptions={{
        validate: {
          matchesConfirmation: (value, { password }) =>
            value === password || '비밀번호가 일치하지 않습니다.',
        },
      }}
      text={text}
    />
  );
}

export default PasswordConfirmInput;
