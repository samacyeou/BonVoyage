import axios from '@/api/axios';
import { ChnagePasswordProps } from '@/@types/type';

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
  console.log(nickname);
  try {
    const res = await axios.put('/users/me', {
      nickname: nickname,
      profileImage: null,
    });
    return res.data;
  } catch (error) {
    console.error('nicknameError:', error);
  }
};

//닉네임 변경 api

export const userChangePassword = async ({
  password,
  newPassword,
}: ChnagePasswordProps) => {
  console.log(password, newPassword);
  try {
    const res = await axios.put('/auth/password', {
      password: password,
      newPassword: newPassword,
    });
    return res.data;
  } catch (error) {
    console.error('passwordChangeError:', error);
  }
};
//비밀번호 변경 api