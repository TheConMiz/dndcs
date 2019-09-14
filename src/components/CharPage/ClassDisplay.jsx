import React from 'react';

import ClassTable from './ClassDisplay/ClassTable';

import ClassSelectionMenu from './ClassDisplay/ClassSelectionMenu';

import { Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
        display: "flex"
    },
}));

class ClassDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const classes = useStyles;
        return (
            <Paper
                className={classes.paper}
            >
                <ClassTable/>
                <ClassSelectionMenu/>
            </Paper>
        );
    }
}

export default ClassDisplay;