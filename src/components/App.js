import React from 'react';
import SelectUser from './SelectUser';
import Calendar from './Calendar';
import Approval from './Approval';

const App = () => {
    return (
        <div className='row'>
            <SelectUser />
            <Calendar />
            <Approval />
        </div>
    );
};

export default App;
