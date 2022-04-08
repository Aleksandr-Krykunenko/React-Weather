import s from './Days.module.scss';

export const Tabs = () => {
  const tabs = [
    {
      value: 'На тиждень',
    },
    {
      value: 'На 10 днів',
    },
    {
      value: 'На місяць',
    },
  ];

  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {tabs.map((tab) => (
          <div className={s.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Відмінити</div>
    </div>
  );
};
