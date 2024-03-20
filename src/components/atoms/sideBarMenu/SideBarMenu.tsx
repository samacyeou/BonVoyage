import styles from './sideBarMenu.module.scss';
import ColorDot from '../colorDot/ColorDot';

interface SideBarMenuProps {
  menuTitle?: string;
  color?: string;
}

export default function SideBarMenu({
  menuTitle,
  color = '#ffa500',
}: SideBarMenuProps) {
  return (
    <div className={styles['sidebarMenu']}>
      <div className={styles['dot']}>
        <ColorDot colorName={color} />
      </div>
      <span className={styles['menuTitle']}>{menuTitle}</span>
      <img className={styles['crownIcon']} src={'/assets/icon/crownIcon.svg'} />
    </div>
  );
}
//        <a className={styles['menuTitle']}></a>
