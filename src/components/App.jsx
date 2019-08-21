import React from 'react';

import { Grid } from '@material-ui/core';

import CharPage from './CharPage';


import '@blueprintjs/core/lib/css/blueprint.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    render() {
        return (
            <Grid>
                <CharPage dbPath={this.props.dbPath}/>
            </Grid>
        );
    }
}

export default App;