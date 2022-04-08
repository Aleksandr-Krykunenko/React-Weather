import s from './ThisDayInfo.module.scss';
import cloud from 'assets/images/cloud.png';
import { ThisDayIfoItems } from './ThisDayInfoItems';

export interface Item {
  id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = () => {
  const items = [
    {
      id: 'temp',
      name: 'Температура',
      value: '20° - відчувається як 17°',
    },
    {
      id: 'pressure',
      name: 'Тиск',
      value: '765 мм ртутного стовпу - нормальний',
    },
    {
      id: 'precipitation',
      name: 'Опади',
      value: 'Без опадів',
    },
    {
      id: 'wind',
      name: 'Вітер',
      value: '3м/с північно-західний - легкий вітер',
    },
  ];

  return (
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}>
        {items.map((item: Item) => (
          <ThisDayIfoItems key={item.id} item={item} />
        ))}
      </div>
      <img className={s.cloud_img} src={cloud} alt="Хмара" />
    </div>
  );
};
