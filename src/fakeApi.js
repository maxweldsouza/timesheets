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
        hours: {
            1: 3,
            2: 6,
            3: 8,
            4: 7,
            5: 8,
            6: 6,
            7: 8
        },
        weeks: {
            0: {
                status: 'approved',
                approved_by: null
            }
        }
    },
    '2:3-2017': {
        hours: {
            1: 7,
            2: 3,
            3: 6,
            4: 7,
            5: 4,
            6: 7,
            7: 5
        },
        weeks: {
            0: {
                status: 'rejected',
                approved_by: null
            }
        }
    }
};

export const getUsers = () => {
    return new Promise(resolve => {
        resolve(users);
    });
};

export const getMonthData = (user, month, year) => {
    const key = `${user}:${month}-${year}`;
    return new Promise(resolve => {
        if (key in monthData) {
            resolve(monthData[key]);
        } else {
            resolve({ hours: {}, weeks: {} });
        }
    });
};

export const setWeekApproval = (month, week, year, user, status, approved_by = 3) => {
    monthData[`${user}:${month}-${year}`].weeks[week].status = status;
    monthData[`${user}:${month}-${year}`].weeks[week].approved_by = approved_by;
    return new Promise(resolve => {
        resolve();
    });
};
