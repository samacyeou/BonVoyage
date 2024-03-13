import Account from '@/components/molecules/account';
import Layout from '@/components/molecules/layout';

const Mypage = () => {
  return (
    <>
      <Layout />
      <Account />
    </>
  );
};

export default Mypage;

//레이아웃은 여기에? 데이터 내려줘야하니까 최상위?
//레이아웃 안에 account가 들어가기
