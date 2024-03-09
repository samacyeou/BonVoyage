import styles from "./button.module.scss";
import { ButtonProps } from "@/@types/type";

const Button = ({ name, disabled, type, color, onClick }: ButtonProps) => {
  return (
    <>
      <button
        className={
          type === "acount"
            ? styles.acountBtn
            : type === "small"
              ? color === "blue"
                ? styles.acceptBtn
                : styles.declineBtn
              : type === "delete"
                ? styles.deleteBtn
                : type === "modal"
                  ? color === "blue"
                    ? styles.modalConfirmBtn
                    : color === "white"
                      ? styles.modalCancelBtn
                      : styles.modalSubmitBtn
                  : ""
        }
        disabled={disabled}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
