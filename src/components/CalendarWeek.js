import React from 'react';
import CalendarDay from './CalendarDay';

const isPadding = (week, day) => {
    return week === 0 && day > 7 || week >= 4 && day < 14;
};

const CalendarWeek = ({
    hours,
    weeks,
    week_no,
    days_of_week,
    selected_week,
    selectWeek
}) => {
    const status = weeks[week_no] && weeks[week_no].status || '';
    const selected = week_no === selected_week ? ' selected' : '';
    return <div
        className={`row calendar-week ${status} ${selected}`}
        onClick={() => selectWeek(week_no)} >
        {days_of_week.map(day => {
            return <CalendarDay
                key={day}
                day={day}
                isPadding={isPadding(week_no, day)}
                duration={hours[day]} />;
        })}
    </div>;
};

CalendarWeek.propTypes = {
    hours: React.PropTypes.object.isRequired,
    weeks: React.PropTypes.object.isRequired,
    user: React.PropTypes.string,
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired,
    week_no: React.PropTypes.number.isRequired,
    days_of_week: React.PropTypes.array.isRequired,
    selected_week: React.PropTypes.number,
    selectWeek: React.PropTypes.func.isRequired
};

export default CalendarWeek;
