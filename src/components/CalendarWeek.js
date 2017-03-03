import React from 'react';
import CalendarDay from './CalendarDay';

const CalendarWeek = ({
    timesheet,
    user,
    month,
    year,
    week_no,
    days_of_week,
    selected_week,
    selectWeek
}) => {
    const timeKey = `${user}:${month}-${year}`;
    let status = '';
    if (timeKey in timesheet.weeks && week_no in timesheet.weeks[timeKey]) {
        status = timesheet.weeks[timeKey][week_no].status || '';
    }
    const selected = week_no === selected_week ? ' selected' : '';
    return <div className={`row calendar-week ${status} ${selected}`} onClick={() => selectWeek(week_no)} >
        {days_of_week.map(day => {
            let duration = null;
            if (timeKey in timesheet.days && day in timesheet.days[timeKey]) {
                duration = timesheet.days[timeKey][day].hours;
            }
            return <CalendarDay key={day} day={day} duration={duration} week={week_no} />;
        })}
    </div>;
};

CalendarWeek.propTypes = {
    timesheet: React.PropTypes.object.isRequired,
    user: React.PropTypes.string,
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired,
    week_no: React.PropTypes.number.isRequired,
    days_of_week: React.PropTypes.array.isRequired,
    selected_week: React.PropTypes.number,
    selectWeek: React.PropTypes.func.isRequired
};

export default CalendarWeek;
