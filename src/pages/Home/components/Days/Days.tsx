import { Card } from './Card';
import s from './Days.module.scss';
import { Tabs } from './Tabs';

export interface Day {
  today: string;
  dayInfo: string;
  iconId: string;
  tempDay: string;
  tempNight: string;
  info: string;
}

export const Days = () => {
  const days: Day[] = [
    {
      today: 'Сьогодні',
      dayInfo: '28 серп',
      iconId: 'sun',
      tempDay: '+18°',
      tempNight: '+15°',
      info: 'Хмарно',
    },
    {
      today: 'Завтра',
      dayInfo: '28 серп',
      iconId: 'small_rain_sun',
      tempDay: '+18°',
      tempNight: '+15°',
      info: 'Невеликий дощ',
    },
    {
      today: 'Ср',
      dayInfo: '28 серп',
      iconId: 'small_rain',
      tempDay: '+18°',
      tempNight: '+15°',
      info: 'Хмарно',
    },
    {
      today: 'Чт',
      dayInfo: '28 серп',
      iconId: 'small_rain',
      tempDay: '+18°',
      tempNight: '+15°',
      info: 'Хмарно',
    },
    {
      today: 'Пт',
      dayInfo: '28 серп',
      iconId: 'mainly_cloudy',
      tempDay: '+18°',
      tempNight: '+15°',
      info: 'Хмарно',
    },
    {
      today: 'Сб',
      dayInfo: '28 серп',
      iconId: 'small_rain',
      tempDay: '+18°',
      tempNight: '+15°',
      info: 'Хмарно',
    },
    {
      today: 'Нд',
      dayInfo: '28 серп',
      iconId: 'sun',
      tempDay: '+18°',
      tempNight: '+15°',
      info: 'Хмарно',
    },
  ];

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => {
          return <Card key={day.today} day={day} />;
        })}
      </div>
    </>
  );
};
