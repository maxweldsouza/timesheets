import React, { PropTypes } from 'react';
import { nextMonthAndGetData, prevMonthAndGetData } from '../actions';
import { connect } from 'react-redux';

const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

let CalendarHeader = ({
    isFetching,
    month,
    year,
    onPrevMonth,
    onNextMonth
}) => {
    return <div className='row calendar-header'>
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
  </div>;
};

CalendarHeader.propTypes = {
    isFetching: React.PropTypes.bool.isRequired,
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired,
    onNextMonth: React.PropTypes.func.isRequired,
    onPrevMonth: React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        month: state.date.month,
        year: state.date.year,
        isFetching: state.weeks.isFetching
    };
};

const mapDispatchToProps = {
    onNextMonth: nextMonthAndGetData,
    onPrevMonth: prevMonthAndGetData
};

CalendarHeader = connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);

export default CalendarHeader;
