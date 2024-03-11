import { ChangeEvent, useRef, useState } from 'react';
import styles from './imageInput.module.scss';
import Image from 'next/image';

export default function ImageInput() {
  const [imageUrl, setImageUrl] = useState('');
  const imageInput = useRef<HTMLInputElement>(null);

  const onClickImageBox = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setImageUrl(e.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input
        className={styles['imageInput']}
        ref={imageInput}
        type='file'
        accept='.svg, .png, .jpg, .jpeg'
        onChange={onChangeImage}
      />
      <button className={styles['imageBox']} onClick={onClickImageBox}>
        <div className={styles['image']}>
          <Image
            layout='fill'
            src={imageUrl ? imageUrl : '/assets/icon/plusIcon.svg'}
            alt='+ 아이콘'
          />
        </div>
        {imageUrl && (
          <div className={styles['hoverImageBox']}>
            <div className={styles['hoverImage']}>
              <Image
                layout='fill'
                src='/assets/icon/editIcon.svg'
                alt='연필 아이콘'
              />
            </div>
          </div>
        )}
      </button>
    </>
  );
}
