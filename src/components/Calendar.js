import React from 'react';
import { connect } from 'react-redux';
import './calendar.scss';
import calendar from '../calendar';
import { nextMonthAndGetData, prevMonthAndGetData } from '../actions';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

let Calendar = ({
    isFetching,
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
                <div className='row'>
                    <div>
                        {months[month - 1]} {year}
                    </div>
                    <div className={isFetching ? 'calendar-loading' : 'calendar-loading hidden' }>
                        Loading...
                    </div>
                </div>
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
            const timeKey = `${user}:${month}-${year}`;
            let status = '';
            if (timeKey in timesheet.weeks && i in timesheet.weeks[timeKey]) {
                status = timesheet.weeks[timeKey][i].status || '';
            }
            return <div key={i} className={'row calendar-week ' + status}>
                {week.map(day => {
                    let cls = 'calendar-day';
                    if (i === 0 && day > 7 ||
                        i >= 4 && day < 14) {
                        cls += ' calendar-day-padding';
                    }
                    let approval = <div className='calendar-day-timing'>{' '}</div>;
                    if (timeKey in timesheet.days && day in timesheet.days[timeKey]) {
                        approval = <div className='calendar-day-timing'>
                            {timesheet.days[timeKey][day].hours} hrs
                        </div>;
                    }
                    return <span className={cls} key={day + month}>
                        <div>{day}</div>
                        {approval}
                    </span>;
                })}
            </div>;
        })}
    </div>;
};

Calendar.propTypes = {
    isFetching: React.PropTypes.bool.isRequired,
    user: React.PropTypes.string,
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired,
    timesheet: React.PropTypes.object.isRequired,
    onNextMonth: React.PropTypes.func.isRequired,
    onPrevMonth: React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        isFetching: state.timesheet.isFetching,
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
