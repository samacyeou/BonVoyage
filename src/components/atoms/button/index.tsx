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

//사용법 적기

// <Button name="로그인" type="acount" />
// <Button name="로그인" type="acount" disabled={true} />

// <Button name="수락" type="small" color="blue" />
// <Button name="거절" type="small" color="white" />

// <Button name="삭제" type="delete" color="white" />

// <Button name="취소" type="modal" color="white" />
// <Button name="확인" type="modal" color="blue" />
// <Button name="입력" type="modal" />;
