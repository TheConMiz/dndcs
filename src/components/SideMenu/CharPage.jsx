import React from 'react';

import ProfileCard from './CharPage/ProfileCard';

import MainStats from './CharPage/MainStats';

import ClassDisplay from './CharPage/ClassDisplay';

import SpellTable from './CharPage/SpellTable';

import { Grid } from '@material-ui/core';

class CharPage extends React.Component {
    
    constructor() {
        super();
    }

    render() {
        return (
            <Grid>
                <ProfileCard />
                {/* <MainStats /> */}
                {/* <ClassDisplay />
                <SpellTable /> */}
            </Grid>    
        );
    }
}

export default CharPage;
