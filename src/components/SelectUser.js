// @flow
import { connect } from 'react-redux';
import React from 'react';
import { selectUserAndGetData } from '../actions';

let SelectUser = ({ dispatch, users }) => {
    return (
        <div>
            <select onChange={event => {
                dispatch(selectUserAndGetData(event.target.value));
            }} defaultValue={null}>
                <option value={null}>{users.isFetching ? 'Loading...' : 'Select User' }</option>
                {Object.keys(users.data).map(user => {
                    return <option value={user} key={user}>
                        {users.data[user].username}
                    </option>;
                })}
            </select>
        </div>
    );
};

SelectUser.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    users: React.PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

SelectUser = connect(mapStateToProps)(SelectUser);

export default SelectUser;
