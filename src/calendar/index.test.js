import calendar from './index';

describe ('calendar weekdays', () => {
    test('test 2-3-2017', () => {
        expect(calendar.weekday({
            day: 2,
            month: 3,
            year: 2017
        }))
        .toEqual('THU');
    });

    test('test 1-1-2017', () => {
        expect(calendar.weekday({
            day: 1,
            month: 1,
            year: 2017
        }))
        .toEqual('SUN');
    });

    test('test 31-12-2017', () => {
        expect(calendar.weekday({
            day: 31,
            month: 12,
            year: 2017
        }))
        .toEqual('SUN');
    });

    test('test 1-1-2016', () => {
        expect(calendar.weekday({
            day: 1,
            month: 1,
            year: 2016
        }))
        .toEqual('FRI');
    });

    test('test 1-1-2000', () => {
        expect(calendar.weekday({
            day: 1,
            month: 1,
            year: 2000
        }))
        .toEqual('SAT');
    });
});

describe('fill month', () => {
    test('march 2017', () => {
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
});

describe('fill month', () => {
    test('jan 2017', () => {
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
