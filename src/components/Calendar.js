import React from 'react';
import { connect } from 'react-redux';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let Calendar = ({
    month,
    year,
    onPrevMonth,
    onNextMonth
}) => {
    return <div>
        <span onClick={onPrevMonth}>Prev</span>
            {months[month - 1]} {year}
        <span onClick={onNextMonth}>Next</span>
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
