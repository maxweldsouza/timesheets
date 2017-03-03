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
                <option value={null}>Select User</option>
                {Object.keys(users).map(user => {
                    return <option value={user} key={user}>
                        {users[user].username}
                    </option>;
                })}
            </select>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

SelectUser = connect(mapStateToProps)(SelectUser);

export default SelectUser;
