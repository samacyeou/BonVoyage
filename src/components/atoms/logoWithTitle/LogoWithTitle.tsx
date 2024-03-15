import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from './logoWithTitle.module.scss';

export default function LogoWithTitle() {
  const notMobile = useMediaQuery({ minWidth: 376 });

  return (
    <>
      <div className={styles['logo']}>
        <Link href={'/'}>
          <Image
            src="/assets/icon/logo.svg"
            width={35}
            height={37}
            alt="logo"
          />
        </Link>
        {/* {notMobile && ( */}
          <Link href={'/'}>
            <Image
              src="/assets/icon/logoText.svg"
              width={130}
              height={30}
              alt="logoText"
            />
          </Link>
        {/* )}  */}
      </div>
    </>
  );
}
