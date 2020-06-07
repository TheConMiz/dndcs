/**
 * Top-level App component
 */

import React, { Fragment } from 'react'

import { UIShell } from './UIShell'

import { DataPuller } from './DataPuller'

export const App = () => {
    return (
        <Fragment>

            <DataPuller />
            
            <UIShell />
        
        </Fragment>
    );
}