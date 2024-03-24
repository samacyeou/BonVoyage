import { CreateDoItYourselfProps } from '@/@types/type';
import instance from '@/api/axios';
import { PropsWithChildren, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './createDoItYourselfTextarea.module.scss';

interface CommentData {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

export interface CommentProps {
  cardId: number;
  columnId: number;
  dashboardId: number;
  getCommentList?: () => void;
}

interface Props extends PropsWithChildren<CreateDoItYourselfProps> {
  commentProp: CommentProps;
}

export default function CreateDoItYourselfTextarea({
  title,
  commentProp,
}: Props) {
  const { handleSubmit, getValues, register, setValue } = useForm<Comment>();
  const content = getValues('content');

  const onSubmit = async (values: Comment) => {
    try {
      const commentData: CommentData = {
        content: values.comment,
        cardId: commentProp.cardId,
        columnId: commentProp.columnId,
        dashboardId: commentProp.dashboardId,
      };
      const res = await instance.post('/comments', commentData, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      });
      setValue('comment', '');
      commentProp.getCommentList?.();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <label className={styles.labelContainer}>{title}</label>
      <textarea
        {...register('comment')}
        placeholder={content}
        className={styles.textareaContainer}
      />
      <button type="submit" className={styles.submitButton}>
        입력
      </button>
    </form>
  );
}
