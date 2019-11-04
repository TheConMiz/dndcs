import React, { Fragment, useState } from 'react';

import { TextField, Typography } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CHAR_XP } from '../actions/characterActions';

export default function XPMonitor() {

    const charXP = useSelector(state => state.character.xp);
    const levelRules = useSelector(state => state.rules.levels);

    const dispatch = useDispatch();

    for (const i in levelRules) {
        console.log(i)
        console.log("sd")
    }

    return (
        <Fragment>
            <TextField
                variant="outlined"
                type="number"
                label="XP"
                value={charXP}
                inputProps={{ min: 0, max: 1000 }}
                onChange={(event) => {
                    dispatch({
                        type: UPDATE_CHAR_XP,
                        payload: event.target.value
                    })
                }}
            />
            
            
        </Fragment>
    )
}
