// @flow
import React, { Component } from 'react';
import SelectUser from './SelectUser';
import Calendar from './Calendar';

class App extends Component {
    render () {
        return (
            <div className="App">
                <h1>Hello !</h1>
                <SelectUser />
                <Calendar month={1}/>
            </div>
        );
    }
}

export default App;
