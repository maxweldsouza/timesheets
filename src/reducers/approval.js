const approval = (state = { approvalPending: false }, action) => {
    switch (action.type) {
    case 'SEND_APPROVAL':
        return { approvalPending: true };
    case 'APPROVAL_SUCCESS':
        return { approvalPending: false };
    case 'APPROVAL_FAILURE':
        return { approvalPending: false };
    default:
        return state;
    }
};

export default approval;
