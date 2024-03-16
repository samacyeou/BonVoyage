import axios from '@/api/axios';
import { ChangePasswordProps } from '@/@types/type';

export const userInfoData = async () => {
  try {
    const res = await axios.get('/users/me');
    return res.data;
  } catch (error) {
    console.error('emailError:', error);
    return null;
  }
};

//내정보 조회 할 수 있는 api, email, nickname, profileImage이 들어가있다.

export const userChangeNickname = async (nickname: string) => {
  try {
    const res = await axios.put('/users/me', {
      nickname: nickname,
      profileImage: null,
    });
    return res.data;
  } catch (error) {
    console.error('nicknameError:', error);
    return error
  }
};

//닉네임 변경 api

export const userChangePassword = async ({
  password,
  newPassword,
}: ChangePasswordProps) => {
  try {
    const res = await axios.put('/auth/password', {
      password: password,
      newPassword: newPassword,
    });
    return res;
  } catch (error) {
    console.error('passwordChangeError:', error);
    return error;
  }
};

//비밀번호 변경 api

export const userImageUpload = async (binaryData: string) => {
  try {
    await axios.post('https://sp-taskify-api.vercel.app/3-1/users/me/image', {
      profileImageUrl:  `data:image/jpeg;base64,${binaryData}`,
    });
    console.log('이미지 업로드 성공');
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
    throw error;
  }
};
// 이거 하는중
