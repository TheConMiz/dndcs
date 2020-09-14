/**
 * Top-level App component
 */

import React, { Fragment } from 'react'

import { UIShell } from './UIShell'

import { DataPuller } from './DataPuller'

import {CharacterInit} from './CharacterInit'

export const App = () => {
    return (
        <Fragment>

            <DataPuller />

            <CharacterInit/>

            <UIShell />

        </Fragment>
    );
}
