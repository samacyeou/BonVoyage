import { createPortal } from 'react-dom';
import { MouseEvent, ReactNode } from 'react';
import styles from './BaseModal.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  closeModal: () => void;
  children: ReactNode;
}

export default function BaseModal({ closeModal, children }: Props) {
  const portalModal = document.getElementById('modal') as HTMLElement;

  const onClickOutside = (e: MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {createPortal(
        <div className={cn('modal-container')} onClick={onClickOutside}>
          <div className={cn('modal')}>{children}</div>
        </div>,
        portalModal,
      )}
    </>
  );
}
