import React from 'react';
import { connect } from 'react-redux';
import { putApproval } from '../actions';

let Approval = ({
    onPutApproval
}) => {
    return <div className='columns'>
        <div className='row'>
            <div className='small-6 columns'>
                <button className="button expanded" onClick={() => {
                    onPutApproval('approved');
                }}>Approve</button>
            </div>
            <div className='small-6 columns'>
                <button className="button expanded" onClick={() => {
                    onPutApproval('rejected');
                }}>Reject</button>
            </div>
        </div>
    </div>;
};

Approval.propTypes = {
    onPutApproval: React.PropTypes.func.isRequired
};

Approval = connect(null, {
    onPutApproval: putApproval
})(Approval);

export default Approval;
