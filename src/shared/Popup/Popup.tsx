import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import { Item } from 'pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayIfoItems } from 'pages/Home/components/ThisDayInfo/ThisDayInfoItems';
import s from './Popup.module.scss';

export const Popup = () => {
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
    <>
      <div className={s.blur}>
        <div className={s.popup}>
          <div className={s.day}>
            <div className={s.day_temp}>12°</div>
            <div className={s.day_name}>Середа</div>
            <div className={s.img}>
              <GlobalSvgSelector id="sun" />
            </div>
            <div className={s.day_time}>
              Час: <span>17:55</span>
            </div>
            <div className={s.day_city}>
              Місто: <span>Вінниця</span>
            </div>
          </div>
          <div className={s.this_day_info_items}>
            {items.map((item: Item) => (
              <ThisDayIfoItems key={item.id} item={item} />
            ))}
          </div>
          <div className={s.close}>
            <GlobalSvgSelector id="close" />
          </div>
        </div>
      </div>
    </>
  );
};
