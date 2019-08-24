import React from 'react';

import { Paper, Grid } from '@material-ui/core';

import SelectionMenu from './ProfileCard/SelectionMenu';

import NameField from './ProfileCard/NameField';

import CharAvatar from './ProfileCard/CharAvatar';


class ProfileCard extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <Paper
                elevation={1}
                className={classes.papier}
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
                    >
                        <Grid>
                            <CharAvatar/>
                            <SelectionMenu mode="Race" />
                        </Grid>

                        <Grid>
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

export default ProfileCard;