// @flow
import { connect } from 'react-redux';
import React from 'react';
import { selectUser } from '../actions';

let SelectUser = ({ dispatch, users }) => {
    return (
        <div>
            Select User:
            <select onChange={event => {
                dispatch(selectUser(event.target.value))
            }}>
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
