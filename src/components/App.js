// @flow
import React, { Component } from 'react';
import SelectUser from './SelectUser';
import Calendar from './Calendar';

class App extends Component {
    render () {
        return (
            <div className='row'>
                <div className='columns'>
                    <SelectUser />
                </div>
                <Calendar month={1}/>
                <div className='columns'>
                    <textarea placeholder="Notes"></textarea>
                    <div className='row'>
                        <div className='small-6 columns'>
                            <a className="button expanded" href="#">Approve</a>
                        </div>
                        <div className='small-6 columns'>
                            <a className="button expanded" href="#">Reject</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
