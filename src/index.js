import React from 'react'

import { render } from 'react-dom'

import { App } from './components/App';

import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';

import { appSlice } from './slices/Slices';

/**
 * * Redux Store setup
 */

const store = configureStore({

    reducer: appSlice.reducer

});


/**
 * * End of Redux Store Setup
 */


render(
    <Provider store={store}>
        <App/>
    </Provider> 
    , document.getElementById('root')
);