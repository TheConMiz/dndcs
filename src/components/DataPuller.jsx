import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import SpellPuller from './SpellPuller'
import RulePuller from './RulePuller'

export default function DataPuller() {

    const dbPath = useSelector(state => state.app.dbPath);

    return (
        <Fragment>
            <SpellPuller
                dbPath={dbPath}
            />

            <RulePuller
                dbPath={dbPath}
            />

        </Fragment>
    );
}