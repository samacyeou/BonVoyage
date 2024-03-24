import { useColumnListState } from '@/hooks/contexts';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';
import ChipProgress from '../chipProgress/ChipProgress';
import styles from './statusDropDown.module.scss';

const cn = classNames.bind(styles);
interface Props {
  columnId: number;
}

export default function StatusDropDown({ columnId }: Props) {
  const [itemList] = useColumnListState();
  const [nowItem, setNowItem] = useState(columnId);
  const [isOpenItemList, setIsOpenItemList] = useState(false);

  const onClickItem = (columnId: number) => {
    setNowItem(columnId);
    setIsOpenItemList(false);
  };

  return (
    <div className={cn('container')}>
      <span className={cn('dropDownName')}>상태</span>
      <div className={cn('dropDown')}>
        <div
          className={cn('nowItem', { focus: isOpenItemList })}
          onClick={() => setIsOpenItemList((preStatus) => !preStatus)}
        >
          <ChipProgress
            column={
              itemList?.findLast((item) => item.id === columnId)
                ?.title as string
            }
          />
          <Image
            width={26}
            height={26}
            src="/assets/icon/dropDownArrowIcon.svg"
            alt="아래 삼각형 아이콘"
          />
        </div>
        {isOpenItemList && (
          <div className={cn('itemList')}>
            {itemList?.map((element) => {
              let check = false;
              if (nowItem === element.id) {
                check = true;
              }

              return (
                <div
                  key={element.id}
                  className={cn('itemBox')}
                  onClick={() => onClickItem(element.id)}
                >
                  <div className={cn('check')}>
                    {check && (
                      <Image
                        width={22}
                        height={22}
                        src="/assets/icon/checkIcon.svg"
                        alt="check 아이콘"
                      />
                    )}
                  </div>
                  <div>
                    <ChipProgress column={element.title} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
