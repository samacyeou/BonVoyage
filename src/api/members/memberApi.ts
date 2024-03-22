import { Member } from '@/@types/type';
import axios from 'axios';
import instance from '../axios';

// 대시보드 멤버 목록 조회
export const getMember = async (dashboardId: number) => {
  try {
    const res = await instance.get<Member>(
      `members?page=1&size=20&dashboardId=${dashboardId}`,
    );
    return res.data;
  } catch (error) {
    console.error('getMember:', error);
    throw error;
  }
};

// 대시보드 멤버 삭제
export const deleteMember = async (memberId: Member) => {
  try {
    const res = await axios.delete<Member>(`members/${memberId}`);
    return res.data;
  } catch (error) {
    console.error('deleteMember:', error);
    throw error;
  }
};
