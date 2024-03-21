import { CreateDoItYourselfProps } from '@/@types/type';
import { forwardRef } from 'react';
import CreateDoItYourselfInput from '../createDoItYourselfCommonInput/CreateDoItYourselfInput';

const CreateDoItYourselfTitle = forwardRef<
  HTMLInputElement,
  Partial<CreateDoItYourselfProps>
>(function (props, ref, value, onChange) {
  return (
    <CreateDoItYourselfInput
      title="제목"
      content="제목을 입력해 주세요"
      ref={ref}
      required
      {...props}
      value={value}
      onChange={onChange}
    />
  );
});

CreateDoItYourselfTitle.displayName = 'CreateDoItYourselfTitle';

export default CreateDoItYourselfTitle;
