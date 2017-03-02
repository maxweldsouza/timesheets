const month_value = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = year => {
    return year % 4 == 0 || year % 100 == 0;
};

const weekday = ({ day, month, year }) => {
    let year_last_2 = year % 100;
    let result = Math.floor(year_last_2 / 4);
    result += day;
    result += month_value[month - 1];
    if (isLeapYear(year) && month <= 2) {
        result -= 1;
    }
    // century code
    result += 6;
    result += year_last_2;
    result %= 7;
    if (result === 0) {
        // Special case 1st Jan 2000
        result = 7;
    }
    return weekdays[result - 1];
};

const prevMonth = ({ month, year }) => {
    if (month === 1) {
        return { month: 12, year: year - 1 };
    }
    return { month: month - 1, year };
};

const nextMonth = ({ month, year }) => {
    if (month === 12) {
        return { month: 1, year: year + 1 };
    }
    return { month: month + 1, year };
};

const integers = (n) => {
    const result = [];
    let i;
    for (i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
};

const fillMonth = ({ month, year }) => {
    const first = weekday({ day: 1, month, year });
    const weekday_no = weekdays.indexOf(first);
    const pad_before = (7 + weekday_no - 1) % 7;
    const pad_after = 7 * 5 - days_in_month[month - 1] - pad_before;
    const days_in_prev_month = days_in_month[prevMonth({ month, year }).month - 1];
    const flat = [...integers(days_in_prev_month).slice(days_in_prev_month - pad_before), ...integers(days_in_month[month - 1]), ...integers(31)];
    return [
        flat.slice(0, 7),
        flat.slice(7, 14),
        flat.slice(14, 21),
        flat.slice(21, 28),
        flat.slice(28, 35),
        flat.slice(35, 42)
    ];
};

export default {
    weekday,
    isLeapYear,
    fillMonth
};
