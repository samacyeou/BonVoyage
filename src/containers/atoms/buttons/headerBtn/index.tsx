import styles from './headerBtn.module.scss';
import { ButtonProps } from '@/@types/type';

const HeaderBtn = ({ name, type, onClick }: ButtonProps) => {
  const editImg = '/assets/icon/settingsIcon.svg';
  const addBoxImg = '/assets/icon/addBoxIcon.svg';

  //이미지 컴포넌트를 사용하면 display:none이 적용이 안돼서 img태그로 대체

  const classNamas = (type: ButtonProps['type']) => {
    switch (type) {
      case 'edit':
        return styles.edit;
      case 'invite':
        return styles.invite;
      default:
        return '';
    }
  };

  return (
    <button className={classNamas(type)} onClick={onClick}>
      {type === 'edit' ? (
        <img src={editImg} alt='settings' className={styles.editImg} />
      ) : (
        <img src={addBoxImg} alt='addBox' className={styles.addBoxImg} />
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
//-> 초대하기버튼 (사실 초대하기 버튼은 type 없어도 되는데 통일성을 위해 적어놓음)