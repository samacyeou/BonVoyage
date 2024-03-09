//타입 들어갈곳


export interface ButtonProps {
  name?: string;
  disabled?: boolean;
  type?:string;
  color?:string;
  iconAlt?:string;
  src?: string;
  src2?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
