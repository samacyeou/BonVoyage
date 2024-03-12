import { HTMLInputTypeAttribute, ReactNode } from 'react';

// 할 일 모달 Input props
export interface CreateDoItYourselfProps {
  title: string;
  content?: string;
  className?: string;
  icon?: ReactNode;
  name?: string;
  required?: boolean;
  isVertical?: boolean;
  isSpecialInput?: boolean; // 특수한 input이 필요한 경우 사용
  type?: HTMLInputTypeAttribute | 'textarea';
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
