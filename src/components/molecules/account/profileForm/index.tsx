import styles from './profileForm.module.scss';
import ImageInput from '@/components/molecules/imageInput/ImageInput';
import Button from '@/components/atoms/buttons/button';
import { useState } from 'react';
import { userChangeAccount } from '@/api/accountApi/accountApi';
import { useContext } from 'react';
import { userContext } from '@/pages/mypage/index';
import CommonInput from '@/components/atoms/input/common/CommonInput';
import { useForm } from 'react-hook-form';

const ProfileForm = () => {
  const { register } = useForm({ mode: 'all' }); // 사용하지는 않지만 register 에러 막기용
  const userInfo = useContext(userContext);
  const [nickname, setNickname] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState<string>('');

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.target.value);
  };

  const handleSaveClick = async () => {
    try {
      await userChangeAccount({ nickname, profileImageUrl });
      setNickname('');
      setProfileImageUrl('');
    } catch (error) {
      console.error('닉네임 또는 프로필 이미지 변경 실패:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>프로필</h1>
      <ImageInput size="big" onImageSelected={setProfileImageUrl} />
      <div className={styles.inputContainer}>
        <CommonInput
          label="이메일"
          placeholder={userInfo.email}
          disabled={true}
          errors={{}}
          type="email"
          name="email"
          register={register}
        />
        <CommonInput
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={handleNicknameChange}
          errors={{}}
          type="text"
          name="nickname"
          register={register}
        />
        <div className={styles.ButtonContainer}>
          <Button
            name="저장"
            type="modal"
            color="blue"
            onClick={handleSaveClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
