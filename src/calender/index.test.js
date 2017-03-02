import calendar from './index';

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
