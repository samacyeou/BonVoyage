import styles from './sideBarMenu.module.scss';
import ColorDot from '../colorDot/ColorDot';

interface SideBarMenuProps {
  menuTitle?: string;
  color?: string;
  isCreatedByMe?: boolean;
}

export default function SideBarMenu({
  menuTitle,
  color = '#ffa500',
  isCreatedByMe,
}: SideBarMenuProps) {
  return (
    <div className={styles['sidebarMenu']}>
      <div className={styles['dot']}>
        <ColorDot colorName={color} />
      </div>
      <span className={styles['menuTitle']}>{menuTitle}</span>
      <div className={styles['hoverHelper']}>
        {isCreatedByMe && (
          <img
            className={styles['crownIcon']}
            src={'/assets/icon/crownIcon.svg'}
          />
        )}
        <div className={styles['hoverContainer']}>
          {isCreatedByMe && (
            <img
              className={styles['hoverCrownIcon']}
              src={'/assets/icon/crownIcon.svg'}
            />
          )}
          <span className={styles['hoverTitle']}>{menuTitle}</span>
        </div>
      </div>
    </div>
  );
}
//        <a className={styles['menuTitle']}></a>
