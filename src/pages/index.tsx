import Link from 'next/link';

const index = () => {
  return (
    <>
      <Link href={'/'}>index</Link>
      <br />
      <Link href={'/login'}>Login</Link>
      <br />
      <Link href={'/signUp'}>signUp</Link>
      <br />
      <Link href={'/mypage'}>mypage</Link>
      <br />
      <Link href={'/mydashboard'}>mydashboard</Link>
      <br />
      <Link href={'/editdashboard'}>editdashboard</Link>
      <br />
    </>
  );
};

export default index;
// 여기는 메인 랜딩페이지 들어갈 곳
