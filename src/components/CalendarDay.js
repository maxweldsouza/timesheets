import React from 'react';

const CalendarDay = ({
    day,
    duration,
    isPadding
}) => {
    let cls = 'calendar-day';
    if (isPadding) {
        cls += ' calendar-day-padding';
    }
    return <span className={cls}>
        <div>{day}</div>
        {duration && !isPadding ? <div className='calendar-day-timing'>
            {duration} hrs
        </div> : <div className='calendar-day-timing'>{' '}</div>}
    </span>;
};

CalendarDay.propTypes = {
    day: React.PropTypes.number.isRequired,
    duration: React.PropTypes.number,
    isPadding: React.PropTypes.bool.isRequired
};

export default CalendarDay;
