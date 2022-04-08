import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';

export const ThisDay = () => {
  return (
    <div className={s.today}>
      <div className={s.today_top}>
        <div className={s.wrapper}>
          <div className={s.today_top_temp}>20°</div>
          <div className={s.today_top_day}>Сьогодні</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.today_bottom}>
        <div className={s.today_bottom_time}>
          Час: <span>17:55</span>
        </div>
        <div className={s.today_bottom_city}>
          Місто: <span>Вінниця</span>
        </div>
      </div>
    </div>
  );
};
