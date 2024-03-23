import PagenationBtn from '@/components/atoms/buttons/pagenationBtn';
import styles from './inviteList.module.scss';
import Button from '@/components/atoms/buttons/button';
import HeaderBtn from '@/components/atoms/buttons/headerBtn';
import { useEffect, useState } from 'react';
import InviteMemberModal from '../modals/inviteMemberModal/InviteMemberModal';
import { getInvitedMemberList } from '@/api/members/memberApi';

type Member = {
  email: string;
  id: number;
};

type Props = {
  dashboardId: number;
};

export default function InviteList({ dashboardId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [members, setMembers] = useState();

  useEffect(() => {
    async function fetchMembers() {
      try {
        const memberData = await getInvitedMemberList(dashboardId);
        setMembers(memberData.invitations);
        console.log(memberData.invitations);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    }
    fetchMembers();
  }, [dashboardId]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClickInviteBtn = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['top']}>
        <span>초대 내역</span>
        <div className={styles['pagenation']}>
          <span>1 페이지 중 1</span>
          <PagenationBtn />
          <HeaderBtn
            name="초대하기"
            type="invite"
            color="blue"
            onClick={onClickInviteBtn}
          />
        </div>
      </div>
      <div className={styles['membersContainer']}>
        <span>이메일</span>
        {members?.map((member) => (
          <div key={member.id} className={styles['member']}>
            <span>{member.invitee.email}</span>
            <Button type="modal" name="취소" />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <InviteMemberModal onClose={closeModal}></InviteMemberModal>
      )}
    </div>
  );
}
