import { ChangeEvent, useRef, useState } from 'react';
import styles from './imageInput.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { userUploadImage } from '@/api/accountApi/accountApi';
const cn = classNames.bind(styles);
interface Props {
  size: 'small' | 'big';
  onImageSelected: (imageUrl: string) => void; //추가, 이미지 선택시 부모 컴포넌트에게 이미지 url 전달
}
export default function ImageInput({ size,onImageSelected }: Props) { // onImageSelected 추가
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
      const imageUrl = await userUploadImage(file) //추가 이미지 업로드 api 호출
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setImageUrl(imageUrl); //이미지 url 상태에 저장
          onImageSelected(imageUrl); //부모 컴포넌트에게 이미지 url 전달
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
                priority={true}
                objectFit="cover"
              />
            </div>
          </div>
        )}
      </button>
    </>
  );
}
