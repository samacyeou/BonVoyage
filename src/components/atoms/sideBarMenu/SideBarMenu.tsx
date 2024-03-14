import styles from './sideBarMenu.module.scss';
import ColorDot from '../colorDot/ColorDot';

interface SideBarMenuProps {
  menuTitle?: string;
}

export default function SideBarMenu({ menuTitle }: SideBarMenuProps) {
  return (
    <div className={styles['sidebarMenu']}>
      <ColorDot colorName="orange" />
      <span className={styles['menuTitle']}>{menuTitle}</span>
      <img
        className={styles['crownIcon']}
        src={'/assets/icon/crownIcon.svg'}
      ></img>
    </div>
  );
}
