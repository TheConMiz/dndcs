import React, { useState } from 'react';
import { Button, Typography, Fab, CircularProgress, Popover } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

import { UPDATE_CHAR_XP } from '../actions/characterActions';

const useStyles = makeStyles(theme => ({
    
}));

export default function LevelView() {

    const classes = useStyles();

    const xp = useSelector(state => state.app.xp)
    
    return (
        <Fab
            disableFocusRipple
            variant="round"
        >
            <Typography
                color="primary"
            >
                2
                </Typography>
        </Fab>
    );
}