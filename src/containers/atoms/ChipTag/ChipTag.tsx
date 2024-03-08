import styles from './ChipTag.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  tag: string;
  color: string;
}

export default function ChipTag({ tag, color }: Props) {
  return (
    <div className={cn('tag', color)}>
      <span>{tag}</span>
    </div>
  );
}
