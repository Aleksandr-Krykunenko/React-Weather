import { IndicatorSvgSelector } from 'assets/icons/indicators/IndicatorsSvgSelector';
import { Item } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss';

interface Props {
  item: Item;
}

export const ThisDayIfoItems = ({ item }: Props) => {
  const { id, name, value } = item;
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <div className={s.item_icon}>
          <IndicatorSvgSelector key={item.id} id={id} />
        </div>
        <div className={s.item_name}>{name}</div>
      </div>
      <div className={s.item_value}>{value}</div>
    </div>
  );
};
