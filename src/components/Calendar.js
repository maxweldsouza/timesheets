import React from 'react';
import { connect } from 'react-redux';
import './calendar.scss';
import calendar from '../calendar';
import { nextMonthAndGetData, prevMonthAndGetData, selectWeek } from '../actions';
import CalendarWeek from './CalendarWeek';

const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

let Calendar = ({
    isFetching,
    selected_week,
    user,
    month,
    year,
    timesheet,
    onPrevMonth,
    onNextMonth,
    onSelectWeek
}) => {
    return <div className='columns calendar'>
        <div className='row calendar-header'>
            <div className='small-4 columns calendar-arrows'>
                <a onClick={onPrevMonth}>&#10094;</a>
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
                <a onClick={onNextMonth}>&#10095;</a>
            </div>
        </div>
        <div className='row calendar-weekdays-container'>
            <div>
                {weekdays.map(day => {
                    return <span key={day} className='calendar-weekday'>
                        {day}
                    </span>;
                })}
            </div>
        </div>
        {calendar.fillMonth({ month, year }).map((week, i) => {
            return <CalendarWeek
                key={i}
                timesheet={timesheet}
                user={user}
                month={month}
                year={year}
                week_no={i}
                days_of_week={week}
                selectWeek={onSelectWeek}
                selected_week={selected_week} />;
        })}
    </div>;
};

Calendar.propTypes = {
    selected_week: React.PropTypes.number,
    onSelectWeek: React.PropTypes.func.isRequired,
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
        selected_week: state.week,
        user: state.user,
        month: state.date.month,
        year: state.date.year,
        timesheet: state.timesheet
    };
};

const mapDispatchToProps = {
    onNextMonth: nextMonthAndGetData,
    onPrevMonth: prevMonthAndGetData,
    onSelectWeek: selectWeek
};

Calendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default Calendar;
