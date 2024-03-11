import { useState } from 'react';
import styles from './statusDropDown.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import ChipProgress from '../../molecules/ChipProgress/ChipProgress';

const cn = classNames.bind(styles);

interface Props {
  items: string[];
}
export default function StatusDropDown({ items }: Props) {
  const [nowItem, setNowItem] = useState(items[0]);
  const [itemList] = useState(items);
  const [isOpenItemList, setIsOpenItemList] = useState(false);

  const onClickItem = (element: string) => {
    setNowItem(element);
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
          <ChipProgress column={nowItem} />
          <Image
            width={26}
            height={26}
            src='/assets/icon/dropDownArrowIcon.svg'
            alt='아래 삼각형 아이콘'
          />
        </div>
        {isOpenItemList && (
          <div className={cn('itemList')}>
            {itemList.map((element) => {
              let check = false;
              if (nowItem === element) {
                check = true;
              }

              return (
                <div
                  className={cn('itemBox')}
                  onClick={() => onClickItem(element)}
                >
                  <div className={cn('check')}>
                    {check && (
                      <Image
                        width={22}
                        height={22}
                        src='/assets/icon/checkIcon.svg'
                        alt='check 아이콘'
                      />
                    )}
                  </div>
                  <div>
                    <ChipProgress column={element} />
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
