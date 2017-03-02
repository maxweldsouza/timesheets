const user = (state = null, action) => {
    switch (action.type) {
    case 'SELECT_USER':
        return action.user;
    default:
        return state;
    }
};

export default user;
