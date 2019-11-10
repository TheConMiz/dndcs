import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    levelButton: {
        width: 50,
        height: 55
    }
}));

export default function LevelView() {

    const classes = useStyles();
    
    return (
        <Button className={classes.levelButton} variant="contained" color="primary">
            <Typography variant="h5">

            </Typography>
        </Button>
    );
}