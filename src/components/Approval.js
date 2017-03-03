import React from 'react';
import { connect } from 'react-redux';
import { sendApproval } from '../actions';

let Approval = ({
    sendApproval,
}) => {
    return <div className='columns'>
        <div className='row'>
            <div className='small-6 columns'>
                <a className="button expanded" href="#" onClick={() => {
                    sendApproval('approved');
                }}>Approve</a>
            </div>
            <div className='small-6 columns'>
                <a className="button expanded" href="#" onClick={() => {
                    sendApproval('rejected;');
                }}>Reject</a>
            </div>
        </div>
    </div>;
};

Approval = connect(null, { sendApproval })(Approval);
export default Approval;
