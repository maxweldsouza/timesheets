import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Calendar extends React.Component {
    render () {
        return <div>
            <span onClick={this.props.onPrevMonth}>Prev</span>
                {months[this.props.month+1]}
            <span onClick={this.props.onNextMonth}>Next</span>
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        month: state.date.month
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
            }),
    };
};

Calendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default Calendar;
