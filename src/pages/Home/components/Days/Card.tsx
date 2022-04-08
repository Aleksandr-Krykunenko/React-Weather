import s from './Days.module.scss';
import { Day } from './Days';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';

interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {
  const { today, dayInfo, iconId, tempDay, tempNight, info } = day;
  return (
    <div className={s.card}>
      <div className={s.day}>{today}</div>
      <div className={s.day_info}>{dayInfo}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={iconId} />
      </div>
      <div className={s.temp_day}>{tempDay}</div>
      <div className={s.temp_night}>{tempNight}</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};
