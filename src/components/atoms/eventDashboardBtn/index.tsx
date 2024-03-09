import { ButtonProps } from "@/@types/type";
import styles from "./eventDashboardBtn.module.scss";
import Image from "next/image";
import plus_png from "../../../../public/assets/icon/plus.png";

const eventDashboardBtn = ({ name, type, onClick }: ButtonProps) => {
  return (
    <button
      className={
        type === "addColumn"
          ? styles.addColumn
          : type === "newDashboard"
            ? styles.newDashboard
            : type === "addTodo"
              ? styles.addTodo
              : type === "deleteDashboard"
                ? styles.deleteDashboard
                : ""
      }
      onClick={onClick}
    >
      {name}
      {type !== "deleteDashboard" && (
        <div className={styles.icon}>
          <Image src={plus_png} alt="plus" width={20} height={20} />
        </div>
      )}
    </button>
  );
};

export default eventDashboardBtn;

//사용법 적기

// <DashboardBtn name="새로운 컬럼 추가하기" type="addColumn"/>
//

// <DashboardBtn name="새로운 대시보드" type="newDashboard"/>

// <DashboardBtn type="addTodo"/>

// <DashboardBtn name="대시보드 삭제하기" type="deleteDashboard"/>
