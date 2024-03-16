import ProfileIcon from '@/components/atoms/profileIcon/ProfileIcon';
import styles from './members.module.scss';
import PagenationBtn from '@/components/atoms/buttons/pagenationBtn';
import Button from '@/components/atoms/buttons/button';

type Member = {
  name: string;
  id: number;
};

type Props = {
  members: Member[];
};

export default function Members({
  members = [
    { name: '홍길동', id: 0 },
    { name: '홍길동', id: 1 },
  ],
}: Props) {
  return (
    <div className={styles['container']}>
      <div className={styles['top']}>
        <span>구성원</span>
        <div className={styles['pagenation']}>
          <span>1 페이지 중 1</span>
          <PagenationBtn />
        </div>
      </div>
      <div className={styles['membersContainer']}>
        <span>이름</span>
        {members.map((member) => (
          <div key={member.id} className={styles['member']}>
            <div>
              <ProfileIcon name={member.name} />
              <span>{member.name}</span>
            </div>
            <Button type="delete" name="삭제" />
          </div>
        ))}
      </div>
    </div>
  );
}
