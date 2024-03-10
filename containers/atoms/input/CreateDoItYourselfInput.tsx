import { HTMLInputTypeAttribute, PropsWithChildren, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./createDoItYourselfInput.module.scss";

interface CreateDoItYourselfProps {
  title: string;
  content?: string;
  icon?: ReactNode;
  name?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute | "textarea";
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function CreateDoItYourselfInput({
  title,
  content,
  icon,
  children,
  name = "inputField",
  required = false,
  type = "text",
  onKeyDown,
  ...props
}: PropsWithChildren<CreateDoItYourselfProps> &
  Partial<UseFormRegisterReturn>) {
  // require: true 일 경우, 필수 입력 필드로 설정
  const inputProps = required ? { ...props, required: true } : props;

  return (
    <div className={styles.formContainer}>
      {/* content를 placeholder로 사용하고, required prop 적용 */}
      <label className={styles.labelContainer}>
        {title}
        {required && <span className={styles.requiredLabel}>*</span>}
      </label>
      {type === "textarea" ? (
        <>
          <textarea
            placeholder={content}
            {...inputProps}
            className={styles.textareaContainer}
          />
          <button type="submit" className={styles.submitButton}>
            입력
          </button>
        </>
      ) : (
        <input
          type={type}
          placeholder={content}
          {...inputProps}
          className={styles.inputContainer}
          data-has-icon={icon ? true : undefined}
          onKeyDown={onKeyDown}
        />
      )}
      {icon && <div className={styles.calendarIcon}>{icon}</div>}
      {children}
    </div>
  );
}
