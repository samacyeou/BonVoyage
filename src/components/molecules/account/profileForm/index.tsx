import styles from './profileForm.module.scss'
import ImageInput from '@/components/molecules/imageInput/ImageInput'
import Button from '@/components/atoms/buttons/button'
const ProfileForm = () => {
  return (
    <div className={styles.container}>
      <h1>프로필</h1>
      <ImageInput size='big'/>
      <Button name='저장' type='modal' color='blue'/>
    </div>
  )
}

export default ProfileForm

//여기에는 프로필 수정 폼
//이미지 업로드하는 부분, 이메일 인풋, 닉네임 인풋