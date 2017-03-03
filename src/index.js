import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { fetchUsers } from './actions';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
);
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <App>
        </App>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(fetchUsers(store.getState()));
