import React from 'react';
import { connect } from 'react-redux';
import { sendApproval } from '../actions';

let Approval = ({
    sendApproval,
}) => {
    return <div className='columns'>
        <div className='row'>
            <div className='small-6 columns'>
                <button className="button expanded" onClick={() => {
                    sendApproval('approved');
                }}>Approve</button>
            </div>
            <div className='small-6 columns'>
                <button className="button expanded" onClick={() => {
                    sendApproval('rejected;');
                }}>Reject</button>
            </div>
        </div>
    </div>;
};

Approval = connect(null, { sendApproval })(Approval);
export default Approval;
