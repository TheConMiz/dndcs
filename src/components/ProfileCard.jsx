import React from 'react';

import { Paper, Grid } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';

import SelectionMenu from './ProfileCard/SelectionMenu';

import NameField from './ProfileCard/NameField';

import CharAvatar from './ProfileCard/CharAvatar';


const styles = theme => ({
    root: {
        padding: theme.spacing(2)
    }
})


class ProfileCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper
                elevation={1}
                className={classes.root}
            >
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid
                        container
                        item
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        spacing={2}
                    >
                        <Grid
                            item
                        >
                            <CharAvatar/>
                            <SelectionMenu mode="Race" />
                        </Grid>

                        <Grid
                            item
                        >
                            <NameField mode="Character" />
                            <NameField mode="Player" />
                            <SelectionMenu mode="Background" />
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(ProfileCard);