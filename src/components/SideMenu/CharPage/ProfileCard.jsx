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
                    direction="row"
                    alignItems="center"
                    justify="space-evenly"
                >
                    
                    <Grid item direction="column" spacing={2}>
                        <Grid item>
                            <CharAvatar />
                        </Grid>

                        <Grid item>
                            {/* <SelectionMenu mode="Race" /> */}
                            <SelectionMenu/>
                        </Grid>        
                    </Grid>

                    <Grid item direction="column" spacing={2}>
                        <Grid item>
                            <NameField mode="Character" />
                        </Grid>
                        
                        <Grid item>
                            {/* <SelectionMenu mode="Background" /> */}
                        </Grid>
                                
                    </Grid>
       
                </Grid>

            </Paper>
        );
    }
}

export default withStyles(styles)(ProfileCard);