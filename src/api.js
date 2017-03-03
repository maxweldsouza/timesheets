const fetchUsers = dispatch => {
    fetch('https://timesheet-staging-aurity.herokuapp.com/api/users')
    .then(response => {
        if (response.status !== 200) {
            return;
        }

        // Examine the text in the response
        response.json().then(function (users) {
            dispatch({
                type: 'RECIEVE_USERS',
                users
            });
        });
    })
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
};

export default {
    fetchUsers
};
