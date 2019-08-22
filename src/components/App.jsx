import React from 'react';

import { Grid } from '@material-ui/core';

import CharPage from './CharPage';

import '@blueprintjs/core/lib/css/blueprint.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Grid>
                <CharPage />
            </Grid>
        );
    }
}

export default App;