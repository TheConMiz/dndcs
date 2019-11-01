import React, { Fragment, useState } from 'react';

import { TextField } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import {UPDATE_CHAR_NAME} from './../actions/characterActions';
    

export default function NameInput() {

    const charName = useSelector(state => state.character.name)

    const dispatch = useDispatch()

    return (
        <Fragment>
            <TextField
                variant="outlined"
                label="Character Name"
                value={charName}
                onChange={(event) => dispatch({ type: UPDATE_CHAR_NAME, payload: event.target.value })}
                error={charName === "" ? true: false}
            />
        </Fragment>
    )
}
