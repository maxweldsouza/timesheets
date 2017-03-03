import React from 'react';
import { connect } from 'react-redux';
import { sendApproval } from '../actions';

let Approval = ({
    onSendApproval
}) => {
    return <div className='columns'>
        <div className='row'>
            <div className='small-6 columns'>
                <button className="button expanded" onClick={() => {
                    onSendApproval('approved');
                }}>Approve</button>
            </div>
            <div className='small-6 columns'>
                <button className="button expanded" onClick={() => {
                    onSendApproval('rejected;');
                }}>Reject</button>
            </div>
        </div>
    </div>;
};

Approval.propTypes = {
    onSendApproval: React.PropTypes.func.isRequired
};

Approval = connect(null, { sendApproval })(Approval);
export default Approval;
