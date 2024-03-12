import { HTMLInputTypeAttribute, PropsWithChildren, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './createDoItYourselfTextarea.module.scss';
import { CreateDoItYourselfProps } from '@/@types/type';

export default function CreateDoItYourselfTextarea({
  title,
  content,
}: PropsWithChildren<CreateDoItYourselfProps> &
  Partial<UseFormRegisterReturn>) {
  return (
    <div className={styles.formContainer}>
      <label className={styles.labelContainer}>{title}</label>
      <textarea placeholder={content} className={styles.textareaContainer} />
      <button type="submit" className={styles.submitButton}>
        입력
      </button>
    </div>
  );
}
