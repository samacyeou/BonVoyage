import PasswordChangeForm from './passwordChangeForm';
import ProfileForm from './profileForm';
import Layout from '../layout';

const Account = () => {
  return (
    <>
      <ProfileForm />
      <PasswordChangeForm />
    </>
  );
};

export default Account;

//여기에 돌아가기 버튼 추가