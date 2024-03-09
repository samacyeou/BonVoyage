import Button from "@/components/atoms/button/index";

const index = () => {
  return (
    <>
      <Button name="로그인" type="acount" />
      <br />
      <Button name="로그인" type="acount" disabled={true} />
      <br />
      <Button name="수락" type="small" color="blue" />
      <br />
      <Button name="거절" type="small" color="white" />
      <br />
      <Button name="삭제" type="delete" color="white" />
      <br />
      <Button name="입력" type="modal" />
      <br />
      <Button name="취소" type="modal" color="white" />
      <br />
      <Button name="확인" type="modal" color="blue" />
    </>
  );
};

export default index;

// 여기는 메인 랜딩페이지 들어갈 곳
// var(--orange20, #fac171) -> 글로벌css 컬러 사용법
