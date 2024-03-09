//타입 들어갈곳
export interface ButtonProps {
  name?: string;
  disabled?: boolean;
  type?:string;
  color?:string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
