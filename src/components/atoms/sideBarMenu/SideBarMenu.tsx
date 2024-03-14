import Link from 'next/link';
import styles from './sideBarMenu.module.scss';
import ColorDot from '../colorDot/ColorDot';

interface SideBarMenuProps {
  menuTitle?: string;
  path?: string;
}

export default function SideBarMenu({ menuTitle }: SideBarMenuProps) {
  return (
    <div className={styles['sidebarMenu']}>
      {/* <Link href={`"${path}"`}> */}
      <ColorDot colorName="orange" />
      <span>{menuTitle}</span>
      {/* </Link> */}
      <img
        className={styles['crownIcon']}
        src={'/assets/icon/crownIcon.svg'}
      ></img>
    </div>
  );
}
//        <a className={styles['menuTitle']}></a>
