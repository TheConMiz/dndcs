import React from 'react';
import { Pane, Card, Avatar, TextInputField } from 'evergreen-ui';

import { Paper, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import SelectionMenu from './ProfileCard/SelectionMenu';
import NameField from './ProfileCard/NameField';

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    // useStyles = makeStyles(theme => ({
    //     card: {
    //         padding: theme.spacing(3, 2),
    //     },
    // }));

    render() {
        return (
            <Paper
                elevation={1}
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
                            <Avatar name="" size={160} />
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