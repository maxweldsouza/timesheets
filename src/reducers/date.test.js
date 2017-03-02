import date from './date';

test('sets the day', () => {
    expect(date({}, {
        type: 'SET_DAY',
        day: 10
    })).toEqual({
        day: 10
    });
});

test('next month', () => {
    expect(date({
        month: 1
    }, {
        type: 'NEXT_MONTH'
    })).toEqual({
        month: 2
    });
});

test('next month december', () => {
    expect(date({
        month: 12,
        year: 2016
    }, {
        type: 'NEXT_MONTH'
    })).toEqual({
        month: 1,
        year: 2017
    });
});

test('prev month', () => {
    expect(date({
        month: 5
    }, {
        type: 'PREV_MONTH'
    })).toEqual({
        month: 4
    });
});


test('next month january', () => {
    expect(date({
        month: 1,
        year: 2016
    }, {
        type: 'PREV_MONTH'
    })).toEqual({
        month: 12,
        year: 2015
    });
});
