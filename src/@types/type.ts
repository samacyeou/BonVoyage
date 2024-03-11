//타입 들어갈곳

import { StaticImageData } from 'next/image';
export interface ButtonProps {
  name?: string;
  disabled?: boolean;
  type?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface MyDashboardProps extends ButtonProps {
  src: StaticImageData;
  src2?: StaticImageData;
  iconAlt?: string;
}

//IntrinsicAttributes & Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "src" | ... 4 more ... | "loading"> & { ...; }
//string | undefined' 형식은 'string | StaticImport' 형식에 할당할 수 없습니다.

//src 속성의 타입은 string | StaticImport
// src2
