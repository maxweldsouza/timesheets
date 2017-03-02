const user = (state = null, action) => {
    switch (action.type) {
    case 'SELECT_USER':
        return action.id;
    default:
        return null;
    }
};

export default user;
