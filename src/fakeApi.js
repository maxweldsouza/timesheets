const users = [
    {
        username: 'Carl',
        id: 1
    },
    {
        username: 'Richard',
        id: 2
    }
];

const monthData = {
    '1:3-2017': {
        weeks: [
            {
                week_number: 0,
                status: 'approved',
                approved_by: null,
                days: [
                    {
                        day_number: 0,
                        hours: 7
                    },
                    {
                        day_number: 1,
                        hours: 3
                    },
                    {
                        day_number: 2,
                        hours: 6
                    },
                    {
                        day_number: 3,
                        hours: 5
                    },
                    {
                        day_number: 4,
                        hours: 7
                    },
                    {
                        day_number: 5,
                        hours: 8
                    }
                ]
            }
        ]
    },
    '2:3-2017': {
        weeks: [
            {
                week_number: 0,
                status: 'rejected',
                approved_by: null,
                days: [
                    {
                        day_number: 0,
                        hours: 6
                    },
                    {
                        day_number: 1,
                        hours: 5
                    },
                    {
                        day_number: 2,
                        hours: 7
                    },
                    {
                        day_number: 3,
                        hours: 6
                    },
                    {
                        day_number: 4,
                        hours: 7
                    },
                    {
                        day_number: 5,
                        hours: 8
                    }
                ]
            }
        ]
    }
};

export const getUsers = () => {
    return new Promise(resolve => {
        resolve(users);
    });
};

export const getMonthData = (user, month, year) => {
    return new Promise(resolve => {
        resolve(monthData[`${user}:${month}-${year}`]);
    });
};

export const setWeekApproval = (month, week, year, user, status, approved_by = 3) => {
    monthData[`${user}:${month}-${year}`].weeks[week].status = status;
    monthData[`${user}:${month}-${year}`].weeks[week].approved_by = approved_by;
    return new Promise(resolve => {
        resolve();
    });
};
