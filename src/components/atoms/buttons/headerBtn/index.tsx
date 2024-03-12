import styles from './HeaderBtn.module.scss';
import { ButtonProps } from '@/@types/type';

const HeaderBtn = ({ name, type, color, onClick }: ButtonProps) => {
  const editImg = '/assets/icon/settingsIcon.svg';
  const addBoxImg = '/assets/icon/addBoxIcon.svg';
  const addBoxImgWhite = '/assets/icon/addBoxIconWhite.svg';

  const classNamas = (type: ButtonProps['type']) => {
    switch (type) {
      case 'edit':
        return styles.edit;
      case 'invite':
        return color === 'blue' ? styles.inviteBlue : styles.invite;
      default:
        return '';
    }
  };

  return (
    <button className={classNamas(type)} color={color} onClick={onClick}>
      {type === 'edit' ? (
        <img src={editImg} alt="settings" className={styles.editImg} />
      ) : color === 'blue' ? (
        <img
          src={addBoxImgWhite}
          alt="addBoxWhite"
          className={styles.addBoxImg}
        />
      ) : (
        <img src={addBoxImg} alt="addBox" className={styles.addBoxImg} />
      )}
      {name}
    </button>
  );
};

export default HeaderBtn;

//사용법 적기

//<HeaderBtn name='관리' type='edit'/>
//-> 관리버튼

//<HeaderBtn name='초대하기' type='invite'/>
//-> 흰색 초대하기버튼, 흰색 버튼이 기본값

//<HeaderBtn name="초대하기" type="invite" color='blue'/>
//-> 파란색 초대하기버튼
