/**
 * Top-level App component
 */

import React, { Fragment } from 'react'

import { DataPuller } from './DataPuller'

import { UIShell } from './UIShell'

export const App = () => {
    return (
        <Fragment>
            
            <DataPuller />
            
            <UIShell />
        
        </Fragment>
    );
}