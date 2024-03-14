import Account from '@/components/molecules/account';
import Layout from '@/components/molecules/layout';

const Mypage = () => {
  return (
    <Layout>
      <Account />
    </Layout>
  );
};

export default Mypage;


//이메일 인풋 => 로그인 한 이메일 넣기

//내 정보 수정,(닉네임, 프로필이미지 ) put


//프로필 이미지 업로드 post

//처음 설정할때 프로필 이미지 업로드 post 바디에 넣어서 보내고
//후에 내정보 수정 api put에 요청해서 바꾸기 



//비밀번호 변경 put
//{
//   "password": "string",
//   "newPassword": "string"
// }
