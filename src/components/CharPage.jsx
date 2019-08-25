import React from 'react';
import ProfileCard from './ProfileCard';
import MainStats from './test/MainStats';

import ClassDisplay from './ClassDisplay';


import { Grid } from '@material-ui/core';

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
                direction="column"
                justify="center"
                alignItems="center"
            >
                <ProfileCard />

                <ClassDisplay />

                <MainStats/>

            </Grid>
        );
    }
}

export default CharPage;
