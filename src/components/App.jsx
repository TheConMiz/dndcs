import React from 'react';

import { Grid, Button } from '@material-ui/core';

import CharPage from './CharPage';

import { connect } from 'react-redux';

import '@blueprintjs/core/lib/css/blueprint.css';

/**
 * MapStateToProps: get data from the store
 */

// const mapStateToProps = state => {
//     return state;
// }

// const mapDispatchToProps = dispatch => {
//     console.log(dispatch);
// }



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Grid>
                <CharPage dbPath={this.props.dbPath} />
            </Grid>
        );
    }
}

export default App;
    // connect(mapStateToProps, mapDispatchToProps)(App);