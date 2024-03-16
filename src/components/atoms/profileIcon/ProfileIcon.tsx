import styles from './profileIcon.module.scss';

type props = {
  name: string;
};

export default function ProfileIcon({ name }: props) {
  const firstCharacter = name.slice(0, 1);

  return <div className={styles['icon']}>{firstCharacter}</div>;
}
