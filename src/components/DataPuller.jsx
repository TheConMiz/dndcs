import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import SpellPuller from './DataPuller/SpellPuller'
import RulePuller from './DataPuller/RulePuller'

export const DataPuller = () => {
    
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