import Link from 'next/link';
import styles from './sideBarMenu.module.scss';
<<<<<<< HEAD
import Image from 'next/image';
import crownIcon from '../../../../public/assets/icon/crownIcon.svg';

interface SideBarMenuProps {
  menuTitle?: string;
  path?: string;
}

export default function SideBarMenu({ menuTitle, path }: SideBarMenuProps) {
  return (
    <div className={styles['sidebarMenu']}>
      <Link href={`"${path}"`}>
        <a className={styles['menuTitle']}>{menuTitle}</a>
      </Link>
      <Image className={styles['crownIcon']} src={crownIcon}></Image>
=======

interface SideBarMenuProps {
  menuTitle?: string;
}

export default function SideBarMenu({ menuTitle }: SideBarMenuProps) {
  return (
    <div className={styles['sidebarMenu']}>
      <Link href="/">
        <a className={styles['menuTitle']}>{menuTitle}</a>
      </Link>
>>>>>>> d961501 (🚚 chor : 폴더명 변경)
    </div>
  );
}
