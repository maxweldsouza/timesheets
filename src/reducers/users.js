const users = (state = {}, action) => {
    switch (action.type) {
    case 'RECIEVE_USERS':
        const newState = Object.assign({}, state);
        action.users.map(user => {
            newState[user.id] = {
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
