import Image from 'next/image';
import styles from './ChipAdd.module.scss';

export default function ChipAdd() {
  return (
    <div className={styles['addBox']}>
      <Image
        layout="fill"
        src="/assets/image/plusIcon.svg"
        alt="플러스 이미지"
<<<<<<< HEAD
        priority={true}
        objectFit="cover"
=======
>>>>>>> ffaae27 ([Feat] 할 일 페이지 atoms 구현 (#18))
      />
    </div>
  );
}