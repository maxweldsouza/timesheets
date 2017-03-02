// @flow
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { selectUser } from '../actions';

let SelectUser = ({ dispatch }) => {
    const users = [{"username":"User_1","id":1,"email":"user_1@aurity.co"},{"username":"User_2","id":2,"email":"user_2@aurity.co"},{"username":"User_3","id":3,"email":"user_3@aurity.co"},{"username":"User_4","id":4,"email":"user_4@aurity.co"},{"username":"User_5","id":5,"email":"user_5@aurity.co"},{"username":"User_6","id":6,"email":"user_6@aurity.co"},{"username":"User_7","id":7,"email":"user_7@aurity.co"},{"username":"User_8","id":8,"email":"user_8@aurity.co"},{"username":"User_9","id":9,"email":"user_9@aurity.co"},{"username":"User_10","id":10,"email":"user_10@aurity.co"}];
    return (
        <div>
            Select User:
            <select onChange={event => {
                dispatch(selectUser(event.target.value))
            }}>
                {users.map(user => {
                    return <option value={user.id} key={user.id}>
                        {user.username}
                    </option>;
                })}
            </select>
        </div>
    );
};


SelectUser = connect()(SelectUser);

export default SelectUser;
