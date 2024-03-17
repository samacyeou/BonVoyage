import styles from './profileForm.module.scss';
import ImageInput from '@/components/molecules/imageInput/ImageInput';
import Button from '@/components/atoms/buttons/button';
import { useState } from 'react';
import { userChangeNickname } from '@/api/accountApi/accountApi';
import { useContext } from 'react';
import { userContext } from '@/pages/mypage/index';
import CommonInput from '@/components/atoms/input/common/CommonInput';
import { useForm, SubmitHandler } from 'react-hook-form';

const ProfileForm = () => {

  const { register } = useForm({ mode: 'all' }); // 사용하지는 않지만 register 에러 막기용

  const userInfo = useContext(userContext);

  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.target.value);
  };

  const handleSaveClick = async () => {
    try {
      await userChangeNickname(nickname); // 닉네임 변경 API 호출
    } catch (error) {
      console.error('닉네임 변경 실패:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <h1>프로필</h1>
        <ImageInput size="big" />
      </div>
      <div className={styles.inputContainer}>
        <CommonInput
          label="이메일"
          placeholder={userInfo.email}
          disabled={true}
          errors={{}}
          type="email"
          name='email'
          register={register}
        />
        <CommonInput
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={handleNicknameChange}
          errors={{}}
          type="text"
          name='nickname'
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

//여기에는 프로필 수정 폼
//현재 value가 안들어옴

// return (
//   <div className={styles.container}>
//     <h1>프로필</h1>
//     <ImageInput size="big" />
//     <div className={styles.inputContainer}>
//       <CommonInput
//         label="이메일"
//         placeholder={userInfo.email}
//         disabled={true}
//         errors={{}}
//         type="email"
//       />
//       <CommonInput
//         label="닉네임"
//         placeholder="닉네임을 입력해주세요"
//         value={nickname}
//         onChange={handleNicknameChange}
//         errors={{}}
//         type="text"
//       />
//     </div>
//     <div className={styles.ButtonContainer}>
//       <Button
//         name="저장"
//         type="modal"
//         color="blue"
//         onClick={handleSaveClick}
//       />
//     </div>
//   </div>
// );

// const ProfileForm = () => {
//   const userInfo = useContext(userContext);

//   const [nickname, setNickname] = useState('');

//   const form = useForm({ mode: 'all' });
//   const {
//     handleSubmit,
//     register,
//   } = form;

//   const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     setNickname(e.target.value);
//   };

//   const handleSaveClick = async () => {
//     try {
//       await userChangeNickname(nickname); // 닉네임 변경 API 호출
//     } catch (error) {
//       console.error('닉네임 변경 실패:', error);
//     }
//   };

//   const onSubmit: SubmitHandler<SignInProps> = (data: any) => {
//     // Handle form submission
//     console.log(data);
//   };

//   return (
//     <div className={styles.container}>
//       <h1>프로필</h1>
//       <ImageInput size="big" />
//       <form className={styles.inputContainer} onSubmit={handleSubmit(onSubmit)}>
//         {/* <CommonInput
//           label="이메일"
//           placeholder={userInfo.email}
//           disabled={true}
//           errors={{}}
//           type="email"
//         /> */}
//         <CommonInput
//           label="닉네임"
//           placeholder="닉네임을 입력해주세요"
//           // value={nickname}
//           // onChange={handleNicknameChange}
//           errors={{}}
//           type="text"
//           register={register}
//           name="nickname"
//           registerOptions={}
//         />
//         <div className={styles.ButtonContainer}>
//           <Button
//             name="저장"
//             type="modal"
//             color="blue"
//             onClick={handleSaveClick}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };
