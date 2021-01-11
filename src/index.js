import React from 'react'

import { render } from 'react-dom'

import { App } from './components/App'

import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'

import { Provider } from 'react-redux'

// import { appReducer } from './reducers/appReducer'

// import { characterReducer } from './reducers/characterReducer'

import { Store } from './constants/Constants'




/**
 * * Redux Store setup
 */

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
})

let store = configureStore({
    reducer: counterSlice.reducer,
})

/**
 * * End of Redux Store Setup
 */


render(
    <Provider store={store}>
        <App/>
    </Provider> 
    , document.getElementById('root')
);