import axios from '@/api/axios';
import { CreateDashboard } from '@/@types/type';

export const changeDashboardInfo = async (
  { title, color }: CreateDashboard,
  dashboardId,
) => {
  try {
    const requestData: Partial<CreateDashboard> = {};
    if (title) {
      requestData.title = title;
    }
    if (color) {
      requestData.color = color;
    }
    const res = await axios.put(`/dashboards/${dashboardId}`, requestData);
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};
//대시보드 정보 수정

export const deleteDashboard = async (id: number) => {
  try {
    const res = await axios.delete(`dashboards/${id}`);
    return res.data;
  } catch (error) {
    console.error('deleteDashboard:', error);
    throw error;
  }
};
