import { ButtonProps } from "@/@types/type";
import styles from "./dashboardBtn.module.scss";
import Image from "next/image";
import plus_png from "../../../../public/assets/icon/plus.png";

const DashboardBtn = ({ name, type, onClick }: ButtonProps) => {
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

export default DashboardBtn;

