import React from 'react';
import styles from './Calender.module.scss';

const Calendar: React.FC = () => {
  const daysInMonth = 30;
  const firstDayOfMonth = 4; // Thursday

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <div className={styles.monthYear}>June 2022</div>
      </div>
      <div className={styles.calendarGrid}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
          <div key={index} className={styles.calendarDay}>
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }, (_, i) => i).map((_, i) => (
          <div key={i} className={styles.calendarDay} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((date) => (
          <div key={date} className={styles.calendarDay}>
            {date}
          </div>
        ))}
      </div>
      <div className={styles.btnGroup}>
        <button className={styles.btnCancel}>Cancel</button>
        <button className={styles.btnSetDate}>Set date</button>
      </div>
    </div>
  );
};

export default Calendar;