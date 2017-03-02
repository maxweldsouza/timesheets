import React from 'react';
import { connect } from 'react-redux';
import './calendar.scss';
import calendar from '../calendar';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

let Calendar = ({
    month,
    year,
    onPrevMonth,
    onNextMonth
}) => {
    return <div className='row'>
        <div className='col-xs-12'>
            <div className='row calendar-header'>
                <div className='col-xs-4'>
                    <a href='#' onClick={onPrevMonth}>Prev</a>
                </div>
                <div className='col-xs-4'>
                    {months[month - 1]} {year}
                </div>
                <div className='col-xs-4 text-right'>
                    <a href='#' onClick={onNextMonth}>Next</a>
                </div>
            </div>
            <div className='row calendar-weekdays-container'>
                <div className='col-xs-12'>
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
                    return <span className={cls} key={day + month}>
                        {day}
                    </span>;
                });
            })}
        </div>
    </div>;
};

const mapStateToProps = state => {
    return {
        month: state.date.month,
        year: state.date.year
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onNextMonth: () =>
        dispatch({
            type: 'NEXT_MONTH'
        }),
        onPrevMonth: () =>
        dispatch({
            type: 'PREV_MONTH'
        })
    };
};

Calendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default Calendar;
