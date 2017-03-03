import React from 'react';
import { connect } from 'react-redux';
import './calendar.scss';
import calendar from '../calendar';
import { nextMonthAndGetData, prevMonthAndGetData } from '../actions';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

let Calendar = ({
    user,
    month,
    year,
    timesheet,
    onPrevMonth,
    onNextMonth
}) => {
    return <div className='columns'>
        <div className='row calendar-header'>
            <div className='small-4 columns calendar-arrows'>
                <a href='#' onClick={onPrevMonth}>&#10094;</a>
            </div>
            <div className='small-4 columns text-center'>
                {months[month - 1]} {year}
            </div>
            <div className='small-4 columns text-right calendar-arrows'>
                <a href='#' onClick={onNextMonth}>&#10095;</a>
            </div>
        </div>
        <div className='row calendar-weekdays-container'>
            <div className='columns'>
                {weekdays.map(day => {
                    return <span key={day} className='calendar-weekday'>
                        {day}
                    </span>;
                })}
            </div>
        </div>
        {calendar.fillMonth({ month, year }).map((week, i) => {
            return week.map(day => {
                let cls = 'calendar-day';
                if ((i === 0 && day > 7) ||
                (i >= 4 && day < 14)) {
                    cls += ' calendar-day-padding';
                }
                const timeKey = `${user}:${month}-${year}`;
                let approval = <div className='calendar-day-timing'>{' '}</div>;
                if (timeKey in timesheet && day in timesheet[timeKey]) {
                    approval = <div className='calendar-day-timing'>
                        {timesheet[timeKey][day].hours} hrs
                    </div>;
                }
                return <span className={cls} key={day + month}>
                    <div>{day}</div>
                    {approval}
                </span>;
            });
        })}
    </div>;
};

const mapStateToProps = state => {
    return {
        user: state.user,
        month: state.date.month,
        year: state.date.year,
        timesheet: state.timesheet
    };
};

const mapDispatchToProps = {
    onNextMonth: nextMonthAndGetData,
    onPrevMonth: prevMonthAndGetData
};

Calendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default Calendar;
