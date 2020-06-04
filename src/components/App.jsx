/**
 * Top-level App component
 */

const { ipcRenderer } = require('electron')

import React, { Fragment } from 'react'

import { UIShell } from './UIShell'


export const App = () => {
    return (
        <Fragment>

            <UIShell />
        
        </Fragment>
    );
}