import React from 'react'

import { Toolbar, TextField, IconButton, Button, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'

import {useDispatch, useSelector} from 'react-redux'

import SettingsIcon from '@material-ui/icons/Settings'

import FilterListIcon from '@material-ui/icons/FilterListRounded'

import {UPDATE_SPELL_SEARCH} from './../../actions/appActions'

const useStyles = makeStyles(theme => ({


}));


const SpellTableToolbarShell = () => {
    const spellSearch = useSelector(state => state.app.spellSearch)

    const dispatch = useDispatch()

    const classes = useStyles()

    return (
        <Toolbar>
            <TextField
                    onChange={(event) => dispatch({ type: UPDATE_SPELL_SEARCH, payload: event.target.value })}
                    value={spellSearch}
                />

            <IconButton
                disableFocusRipple
            >
                <SettingsIcon />
            </IconButton>

            <IconButton
                disableFocusRipple
            >
                <FilterListIcon />
            </IconButton>

            <Button
                color="secondary"
                variant="outlined"
            >
                <Typography>
                    Clear Selection
                    </Typography>
            </Button>
        </Toolbar>
    )
}

export default SpellTableToolbarShell