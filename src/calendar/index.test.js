import calendar from './index';

describe ('Calendar weekdays', () => {
    test('2-3-2017', () => {
        expect(calendar.weekday({
            day: 2,
            month: 3,
            year: 2017
        }))
        .toEqual('THU');
    });

    test('1-1-2017', () => {
        expect(calendar.weekday({
            day: 1,
            month: 1,
            year: 2017
        }))
        .toEqual('SUN');
    });

    test('31-12-2017', () => {
        expect(calendar.weekday({
            day: 31,
            month: 12,
            year: 2017
        }))
        .toEqual('SUN');
    });

    test('1-1-2016', () => {
        expect(calendar.weekday({
            day: 1,
            month: 1,
            year: 2016
        }))
        .toEqual('FRI');
    });

    test('1-1-2000', () => {
        expect(calendar.weekday({
            day: 1,
            month: 1,
            year: 2000
        }))
        .toEqual('SAT');
    });
});

describe('Fill month', () => {
    test('March 2017', () => {
        expect(calendar.fillMonth({
            month: 3,
            year: 2017
        }))
        .toEqual([
            [27, 28, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26],
            [27, 28, 29, 30, 31, 1, 2],
            [3, 4, 5, 6, 7, 8, 9]
        ]);
    });

    test('Jan 2017', () => {
        expect(calendar.fillMonth({
            month: 1,
            year: 2017
        }))
        .toEqual([
            [26, 27, 28, 29, 30, 31, 1],
            [2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20, 21, 22],
            [23, 24, 25, 26, 27, 28, 29],
            [30, 31, 1, 2, 3, 4, 5]
        ]);
    });
});

describe('Is leap year', () => {
    test('2016', () => {
        expect(calendar.isLeapYear(2016)).toBe(true);
    });
    test('2015', () => {
        expect(calendar.isLeapYear(2015)).toBe(false);
    });
    test('2100', () => {
        expect(calendar.isLeapYear(2100)).toBe(false);
    });
    test('2400', () => {
        expect(calendar.isLeapYear(2400)).toBe(true);
    });
});
