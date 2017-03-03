const week = (state = null, action) => {
    switch (action.type) {
    case 'SELECT_WEEK':
        return action.week;
    default:
        return state;
    }
};

export default week;
