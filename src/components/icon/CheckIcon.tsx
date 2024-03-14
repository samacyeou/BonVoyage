import { IconProps } from '@/@types/type';
import React from 'react';

const CheckIcon: React.FC<IconProps> = ({ color }: IconProps) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="check_FILL0_wght300_GRAD0_opsz24 1">
      <path
        id="Vector"
        d="M8.75394 14.2223L16.6725 6.30372C16.8089 6.1674 16.9707 6.09776 17.1582 6.09482C17.3456 6.09188 17.5105 6.16152 17.6526 6.30372C17.7948 6.44591 17.8659 6.60926 17.8659 6.79377C17.8659 6.97827 17.7948 7.14162 17.6526 7.28382L9.33389 15.6026C9.16819 15.7683 8.97487 15.8511 8.75394 15.8511C8.53301 15.8511 8.33969 15.7683 8.17399 15.6026L4.3469 11.7755C4.21058 11.6392 4.1433 11.4773 4.14505 11.2898C4.14683 11.1024 4.21881 10.9376 4.361 10.7954C4.5032 10.6532 4.66655 10.5821 4.85105 10.5821C5.03556 10.5821 5.19891 10.6532 5.3411 10.7954L8.75394 14.2223Z"
        fill={color}
      />
    </g>
  </svg>
);

export default CheckIcon;
