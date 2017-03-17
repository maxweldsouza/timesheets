import hours from './hours';

test('default state', () => {
    expect(hours({}, {
        type: 'RECIEVE_MONTH_DATA',
        timesheet: {
            hours: {
                1: 8
            }
        }
    })).toHaveProperty('1', 8);
});
