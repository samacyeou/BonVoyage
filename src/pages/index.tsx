import Button from "@/components/atoms/button/index";
import DashboardBtn from "@/components/atoms/eventDashboardBtn/index";
import PagenationBtn from "@/components/atoms/pagenationBtn";
import MyDashboard from "@/components/atoms/myDashboardBtn";
import ellipseGreen from "../../public/assets/icon/ellipseGreen.svg"
import crownIcon from "../../public/assets/icon/crownIcon.svg"

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
      <br />
      <DashboardBtn name="새로운 컬럼 추가하기" type="addColumn"/>
      <br />
      <DashboardBtn name="새로운 대시보드" type="newDashboard"/>
      <br />
      <DashboardBtn type="addTodo"/>
      <br />
      <DashboardBtn name="대시보드 삭제하기" type="deleteDashboard"/>
      <br />
      <PagenationBtn />
      <br />
      <PagenationBtn disabled={true}/>
      <br />
      <MyDashboard name="비브리지" src={ellipseGreen} src2={crownIcon}/>

    </>
  );
};

export default index;

// 여기는 메인 랜딩페이지 들어갈 곳
// var(--orange20, #fac171) -> 글로벌css 컬러 사용법
