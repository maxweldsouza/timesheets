import React, { Component } from 'react';
import SelectUser from './SelectUser';
import Calendar from './Calendar';
import Approval from './Approval';

class App extends Component {
    render () {
        return (
            <div className='row'>
                <SelectUser />
                <Calendar month={1}/>
                <Approval />
            </div>
        );
    }
}

export default App;
