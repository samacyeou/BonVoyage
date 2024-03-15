import Link from 'next/link';
import styles from './editDashboardTitle.module.scss';
import BigColorDot from '@/components/atoms/colorDot/BigColorDot';
import Button from '@/components/atoms/buttons/button';

export default function EditDashboardTitle({ boardTitle = '내 대시보드' }) {
  return (
    <div className={styles['container']}>
      <div className={styles['titleAndColor']}>
        <span>{boardTitle}</span>
        <BigColorDot colorName="orange" size={24} check={true} />
      </div>
      <div className={styles['changeTitle']}>
        <span>대시보드 이름</span>
        <input placeholder="뉴프로젝트" />
        <Button name="변경" type="modal" color="blue" />
      </div>
    </div>
  );
}
