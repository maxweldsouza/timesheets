import React from 'react';
import { connect } from 'react-redux';
import { postApproval } from '../actions';

let Approval = ({
    onPostApproval
}) => {
    return <div className='columns'>
        <div className='row'>
            <div className='small-6 columns'>
                <button className="button expanded" onClick={() => {
                    onPostApproval('approved');
                }}>Approve</button>
            </div>
            <div className='small-6 columns'>
                <button className="button expanded" onClick={() => {
                    onPostApproval('rejected');
                }}>Reject</button>
            </div>
        </div>
    </div>;
};

Approval.propTypes = {
    onPostApproval: React.PropTypes.func.isRequired
};

Approval = connect(null, {
    onPostApproval: postApproval
})(Approval);

export default Approval;
