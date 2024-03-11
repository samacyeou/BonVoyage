import Image from 'next/image';
import CreateDoItYourselfInput from './CreateDoItYourselfInput';

export default function CreateDoItYourselfDate() {
  const calendarIcon = (
    <Image
      src="/assets/icon/calendarIcon.svg"
      width={22}
      height={22}
      alt="pick date"
    />
  );
  return (
    <CreateDoItYourselfInput
      title="마감일"
      content="날짜를 입력해 주세요"
      type="text"
      icon={calendarIcon}
    />
  );
}
