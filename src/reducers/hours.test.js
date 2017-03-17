import hours from './hours';

test('default state', () => {
    expect(hours({}, {
        type: 'RECIEVE_MONTH_DATA',
        data: {
            1: 8
        }
    })).toHaveProperty('1', 8);
})
