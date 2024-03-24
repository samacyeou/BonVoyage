import CommonInput, { CommonInputProps } from '../common/CommonInput';

export default function NicknameInput(props: CommonInputProps) {
  return (
    <CommonInput
      label="닉네임"
      name="nickname"
      placeholder="닉네임을 입력해 주세요"
      type="text"
      registerOptions={{
        maxLength: {
          value: 10,
          message: '10자 이하로 작성해 주세요.',
        },
        required: '닉네임을 입력해 주세요.',
      }}
      {...props}
    />
  );
}
