import React, { Fragment } from 'react'

import {Input } from 'antd'

import { useSelector, useDispatch } from 'react-redux';

import { UPDATE_CHAR_NAME } from '../../actions/characterActions'


export const NameInput = () => {

    const charName = useSelector(state => state.character.name)

    const dispatch = useDispatch()

    return (
        
        <Input
            placeholder="Character Name"
            value={charName}
            style={{width: '200px'}}
            onChange={(event) => dispatch({ type: UPDATE_CHAR_NAME, payload: event.target.value })}
        />
    )
}
