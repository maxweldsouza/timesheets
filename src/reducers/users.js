const users = (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
    case 'REQUEST_USERS':
        return { ...state, isFetching: true };
    case 'RECIEVE_USERS':
        const newState = { ...state, isFetching: false };
        action.users.map(user => {
            newState.data[user.id] = {
                username: user.username,
                email: user.email
            };
        });
        return newState;
    default:
        return state;
    }
};

export default users;
