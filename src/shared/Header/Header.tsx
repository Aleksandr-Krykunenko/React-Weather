import Select from 'react-select';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';

export const Header = () => {
  const options = [
    { value: 'city-1', label: 'Вінниця' },
    { value: 'city-2', label: 'Новодністровськ' },
    { value: 'city-3', label: 'Хмельницький' },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.tittle}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </div>
    </header>
  );
};
