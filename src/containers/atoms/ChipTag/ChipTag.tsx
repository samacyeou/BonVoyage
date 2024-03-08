import styles from './ChipTage.module.scss';

interface Props {
  tag: string;
  color: string;
}

export default function ChipTage({ tag, color }: Props) {
  return (
    <div className={styles[color]}>
      <span>{tag}</span>
    </div>
  );
}
