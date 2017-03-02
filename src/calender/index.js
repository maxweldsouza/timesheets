const month_value = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

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

export default {
    weekday,
    isLeapYear
};
