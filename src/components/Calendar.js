import React from 'react';
import { connect } from 'react-redux';
import './calendar.scss';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let Calendar = ({
    month,
    year,
    onPrevMonth,
    onNextMonth
}) => {
    return <div className='row calendar-header'>
        <div className='col-xs-4'>
            <a href='#' onClick={onPrevMonth}>Prev</a>
        </div>
        <div className='col-xs-4'>
            {months[month - 1]} {year}
        </div>
        <div className='col-xs-4 text-right'>
            <a href='#' onClick={onNextMonth}>Next</a>
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
