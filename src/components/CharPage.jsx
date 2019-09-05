import React from 'react';
import ProfileCard from './ProfileCard';
import MainStats from './test/MainStats';

import ClassDisplay from './ClassDisplay';


import { Grid, Paper } from '@material-ui/core';
import SpellTable from './SpellTable';

class CharPage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            
        }
        
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={4}
            >

                <Grid
                    item
                    direction="column"
                >
                    <Grid
                        item
                    >
                        <ProfileCard />
                    </Grid>

                    <Grid
                        item
                    >
                        <MainStats />
                    </Grid>
                </Grid>

                <Grid item direction="column">
                    <Grid item>
                        <ClassDisplay />
                    </Grid>
                    
                </Grid>
            </Grid>
        );
    }
}

export default CharPage;
