import ChipNumber from '@/components/atoms/chipNumber/ChipNumber';
import ColorDot from '@/components/atoms/colorDot/ColorDot';
import styles from './cardSection.module.scss';
import Image from 'next/image';
import settingIcon from '../../../../public/assets/icon/settingsIcon.svg';
import EventDashboardBtn from '@/components/atoms/buttons/eventDashboardBtn';
import Card from '../card/Card';

const titles: { [key: string]: string } = {
  toDo: 'To Do',
  onProgress: 'On Progress',
  done: 'Done',
};

interface CardSectionProps {
  title: string;
}

export default function CardSection({ title }: CardSectionProps) {
  return (
    <div className={styles['cardSection']}>
      <div className={styles['defaultArea']}>
        <div className={styles['titleArea']}>
          <ColorDot colorName="blue"></ColorDot>
          <h1 className={styles['title']}>{titles[title]}</h1>
          <ChipNumber number="3"></ChipNumber>
        </div>
        <Image className={styles['settingIcon']} src={settingIcon}></Image>
      </div>
      <EventDashboardBtn type="addTodo" />
      <Card
        title="새로운 일정 관리"
        date="2023.03.02"
        userProfile="/assets/icon/logo.svg"
      ></Card>
    </div>
  );
}
