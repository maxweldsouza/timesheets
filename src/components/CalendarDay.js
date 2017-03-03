import React from 'react';

let CalendarDay = ({
    day,
    duration,
    week
}) => {
    let cls = 'calendar-day';
    if (week === 0 && day > 7 ||
        week >= 4 && day < 14) {
        cls += ' calendar-day-padding';
    }
    return <span className={cls}>
        <div>{day}</div>
        {duration !== null ? <div className='calendar-day-timing'>
            {duration} hrs
        </div> : <div className='calendar-day-timing'>{' '}</div>}
    </span>;
};

export default CalendarDay;
