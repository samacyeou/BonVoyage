import axios from '@/api/axios';
import { ChangePasswordProps,UserChangeNicknameProps } from '@/@types/type';

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

// export const userChangeNickname = async (nickname:string ,profileImageUrl:string) => {
//   console.log(nickname,profileImageUrl);
//   try {
//     const res = await axios.put('/users/me', {
//       nickname: nickname,
//       // profileImageUrl: null,
//       profileImageUrl: profileImageUrl,
//     });
//     return res.data;
//   } catch (error) {
//     console.error('nicknameError:', error);
//     return error
//   }
// };


//닉네임및 프로필이미지 변경 api

export const userChangeNickname = async (nickname : string) => {
  console.log(nickname);
  try {
    const res = await axios.put('/users/me', {
      nickname: nickname,
    });
    return res.data;
  } catch (error) {
    console.error('nicknameError:', error);
    return error
  }
};
// 이거 닉네임 변경

export const userChangeProfileImage = async (profileImageUrl : string) => {
  console.log(profileImageUrl);
  try {
    const res = await axios.put('/users/me', {
      profileImageUrl: profileImageUrl,
    });
    return res.data;
  } catch (error) {
    console.error('profileImage:', error);
    return error
  }
};
//이건 프로필 이미지 변경
//따로따로 변경하고 싶을 수 있으니까 분리해놓음

export const userUploadImage = async (profileImage: File) => {
  console.log(profileImage);
  try {
    const formData = new FormData();
    formData.append('file', profileImage);
    await axios.post('/users/me/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('프로필 이미지 변경 성공');
  } catch (error) {
    console.error('프로필 이미지 변경 실패:', error);
    return error;
  }
};
// 이미지 업로드해서 서버로 보내는 api

