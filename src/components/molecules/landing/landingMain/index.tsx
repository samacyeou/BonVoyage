import styles from './landingMain.module.scss';
import Image from 'next/image';
import dashboarimg from '@/../../public/assets/image/dashboardimg.png';
import inviteimg from '@/../../public/assets/image/inviteimg.png';
import memberimg from '@/../../public/assets/image/memberimg.png';
import listimg from '@/../../public/assets/image/listimg.png';
import mainboard from '@/../../public/assets/image/mainboard.png';

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
              src={mainboard}
              alt="bgLogin"
              className={styles.pointOneImg}
              layout="fill"
              objectFit="cover"

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
            src={listimg}
            alt="bgLogin"
            className={styles.pointTwoImg}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.pointThr}>
        <p className={styles.pointThrTitle}>생산성을 높이는 다양한 설정⚡</p>
        <div className={styles.cardList}>
          <div className={styles.dashboard}>
            <div className={styles.dashboardImg}>
              <Image
                src={dashboarimg}
                alt="bgLogin"
                width={260}
                height={132}
                className={styles.indashboardImg}
              />
            </div>
            <div className={styles.dashboardText}>
              <p>대시보드 설정</p>
              <span>대시보드 사진과 이름을 변경할 수 있어요</span>
            </div>
          </div>
          <div className={styles.invite}>
            <div className={styles.inviteImg}>
              <Image
                src={inviteimg}
                alt="bgLogin"
                className={styles.ininviteImg}
                width={260}
                height={200}
              />
            </div>
            <div className={styles.inviteText}>
              <p>초대</p>
              <span>새로운 팀원을 초대할 수 있어요</span>
            </div>
          </div>
          <div className={styles.member}>
            <div className={styles.memberImg}>
              <Image src={memberimg} alt="bgLogin" width={260} height={190} />
            </div>
            <div className={styles.memberText}>
              <p>구성원</p>
              <span>구성원을 초대하고 내보낼 수 있어요</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

347;
export default LandingMain;
