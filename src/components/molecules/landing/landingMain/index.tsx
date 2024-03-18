import styles from './landingMain.module.scss';
import Image from 'next/image';
const LandingMain = () => {
  const bgLogin = '/assets/image/bgLogin.jpg';
  return (
    <div className={styles.container}>
      <div className={styles.pointOne}>
        <div className={styles.pointOneText}>
          <span>Point 1</span>
          <p>
            일의 우선순위를 <br /> 관리하세요
          </p>
        </div>
        <div className={styles.pointOneImgWrapper}>
          <Image
            src={bgLogin}
            alt="bgLogin"
            className={styles.pointOneImg}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div className={styles.pointTwo}>
        <div className={styles.pointTwoText}>
          <span>Point 2</span>
          <p>
            해야 할 일을 <br /> 등록하세요
          </p>
        </div>
        <div className={styles.pointTwoImgWrapper}>
          <Image
            src={bgLogin}
            alt="bgLogin"
            className={styles.pointTwoImg}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div className={styles.pointThr}>
        <p>생산선을 높이는 다양한 설정</p>
        <div className={styles.dashboard}>
          <div className={styles.dashboardImg}>
            <Image src={bgLogin} alt="bgLogin" width={282} height={107}  layout='responsive'/>
          </div>
          <div className={styles.dashboardText}>
            <p>대시보드 설정</p>
            <span>대시보드 사진과 이름을 변경할 수 있어요</span>
          </div>
        </div>
        <div className={styles.invite}>
          <div className={styles.inviteImg}>
            <Image src={bgLogin} alt="bgLogin" width={260} height={200}  layout='responsive'/>
          </div>
          <div className={styles.inviteText}>
            <p>초대하기</p>
            <span>새로운 팀원을 초대할 수 있어요</span>
          </div>
        </div>
        <div className={styles.member}>
          <div className={styles.memberImg}>
            <Image src={bgLogin} alt="bgLogin" width={260} height={169} layout='responsive' />
          </div>
          <div className={styles.memberText}>
            <p>구성원</p>
            <span>구성원을 초대하고 내보낼 수 있어요</span>
          </div>
        </div>
      </div>
    </div>
  );
};

    347
export default LandingMain;
