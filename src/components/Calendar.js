import React from 'react';
import { connect } from 'react-redux';
import './calendar.scss';
import calendar from '../calendar';
import { selectWeek } from '../actions';
import CalendarWeek from './CalendarWeek';
import CalendarHeader from './CalendarHeader';
const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

let Calendar = ({
    hours,
    selected_week,
    user,
    month,
    year,
    weeks,
    onSelectWeek
}) => {
    return <div className='columns calendar'>
        <CalendarHeader />
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
                hours={hours}
                key={i}
                user={user}
                month={month}
                year={year}
                weeks={weeks}
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
    user: React.PropTypes.string,
    weeks: React.PropTypes.object.isRequired,
    hours: React.PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        isFetching: state.weeks.isFetching,
        selected_week: state.week,
        month: state.date.month,
        year: state.date.year,
        user: state.selectedUser,
        hours: state.hours,
        weeks: state.weeks
    };
};

const mapDispatchToProps = {
    onSelectWeek: selectWeek
};

Calendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default Calendar;
