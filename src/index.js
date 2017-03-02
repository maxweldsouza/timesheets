import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <App>
        </App>
    </Provider>,
    document.getElementById('root')
);

fetch('https://timesheet-staging-aurity.herokuapp.com/api/users')
.then(
    function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function (users) {
            store.dispatch({
                type: 'RECIEVE_USERS',
                users
            });
        });
    }
)
.catch(function (err) {
    console.log('Fetch Error :-S', err);
});
