import { ButtonProps } from "@/@types/type";
import styles from "./myDashboardBtn.module.scss";
import Image from "next/image";
import forwardArrowIcon from "../../../../public/assets/icon/forwardArrowIcon.svg";

const MyDashboard = ({ name, src, src2, iconAlt, onClick }: ButtonProps) => {
  return (
    <button className={styles.myDashboardBtn} onClick={onClick}>
      <div className={styles.container}>
        {src && <Image src={src} alt={iconAlt} width={20} height={20} />}
        {name}
        {src && <Image src={src2 ?? ""} alt={iconAlt} width={20} height={20} />}
      </div>
      <div>
        <Image
          src={forwardArrowIcon}
          alt="forwardArrowIcon"
          className={styles.arrowIcon}
          width={18}
          height={18}
        />
      </div>
    </button>
  );
};

export default MyDashboard;
