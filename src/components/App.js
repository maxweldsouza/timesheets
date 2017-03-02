// @flow
import React, { Component } from 'react';
import SelectUser from './SelectUser';
import Calendar from './Calendar';

class App extends Component {
    render () {
        return (
            <div className='row'>
                <div className='columns'>
                    <h1>Timesheets</h1>
                    <SelectUser />
                </div>
                <Calendar month={1}/>
            </div>
        );
    }
}

export default App;
