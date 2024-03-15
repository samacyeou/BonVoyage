import { ChangeEvent, useRef, useState } from 'react';
import styles from './imageInput.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { userImageUpload } from '@/api/accountApi/accountApi';

const cn = classNames.bind(styles);

interface Props {
  size: 'small' | 'big';
}

export default function ImageInput({ size }: Props) {
  const [imageUrl, setImageUrl] = useState('');
  const imageInput = useRef<HTMLInputElement>(null);

  const onClickImageBox = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          const binaryData = e.target.result.toString().split(',')[1];
          try {
            await userImageUpload(binaryData);
            setImageUrl(e.target.result.toString());
          } catch (error) {
            console.error('이미지 업로드 실패:', error);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input
        className={cn('imageInput')}
        ref={imageInput}
        type="file"
        accept=".svg, .png, .jpg, .jpeg"
        onChange={onChangeImage}
      />
      <button className={cn('imageBox', size)} onClick={onClickImageBox}>
        <div
          className={cn({ iconImage: !imageUrl }, { uploadImage: imageUrl })}
        >
          <Image
            layout="fill"
            src={imageUrl ? imageUrl : '/assets/icon/plusIcon.svg'}
            alt={imageUrl ? '불러온 이미지' : '+ 아이콘'}
            priority={true}
            objectFit="cover"
          />
        </div>
        {imageUrl && (
          <div className={cn('hoverImageBox')}>
            <div className={cn('iconImage')}>
              <Image
                layout="fill"
                src="/assets/icon/editIcon.svg"
                alt="연필 아이콘"
              />
            </div>
          </div>
        )}
      </button>
    </>
  );
}
