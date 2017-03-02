const fetchUsers = dispatch => {
    fetch('https://timesheet-staging-aurity.herokuapp.com/api/users')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function (users) {
                dispatch({
                    type: 'RECIEVE_USERS',
                    users
                });
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
};

const fetchMonthData = (dispatch, month, year, user) => {
    fetch(`
https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${month}/${year}/${user}`)
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                dispatch({
                    type: 'RECIEVE_MONTH_DATA',
                    data
                });
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
}

export default {
    fetchUsers
};
