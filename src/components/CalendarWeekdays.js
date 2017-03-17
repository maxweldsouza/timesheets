import React from 'react';
const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const Calendar = () => {
    return <div className='row calendar-weekdays-container'>
        <div>
            {weekdays.map(day => {
                return <span key={day} className='calendar-weekday'>
                    {day}
                </span>;
            })}
        </div>
    </div>;
};

export default Calendar;
