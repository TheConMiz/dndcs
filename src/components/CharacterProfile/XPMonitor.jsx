import React, { Fragment } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { UPDATE_CHAR_XP } from '../../actions/characterActions'
import { InputNumber } from 'antd';

export default function XPMonitor() {

    const dispatch = useDispatch();

    const currentXP = useSelector(state => state.character.xp);
    
    const levels = useSelector(state => state.rules.levels);

    return (
        <Fragment>
            <InputNumber>
            </InputNumber>
            <InputNumber>
            </InputNumber>
        </Fragment>
    )
}
