import {
  forwardRef,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  PropsWithChildren,
  ReactNode,
} from 'react';
import classNames from 'classnames/bind';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import styles from './commonInput.module.scss';

const cn = classNames.bind(styles);

export interface Props extends PropsWithChildren<UseFormRegisterReturn> {
  errors?: FieldErrors;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  icon?: ReactNode;
}

const CommonInput = forwardRef<HTMLInputElement, Props>(function CommonInput(
  { children, errors, label, icon, ...props },
  ref,
) {
  const error = errors?.[props.name as string]; 
  const invalid = error !== undefined; 

  return (
    <div className={styles.inputForm}>
      <label className={styles.inputLabel}>{label}</label>
      {icon && <div className={styles.passwordIcon}>{icon}</div>}
      <input className={cn('inputBox', { invalid })} {...props} ref={ref} />
      {children}
      {invalid && (
        <span className={styles.errorMsg}>{error?.message as string}</span>
      )}
    </div>
  );
});

export default CommonInput;
