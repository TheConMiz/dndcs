import React from 'react';

import { connect } from 'react-redux';

import { updateCharName } from './../actions/characterActions';

import { Grid, LinearProgress, Avatar } from '@material-ui/core';

import TopBar from './TopBar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    render() {
        return (
            <div>
                <TopBar />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapActionsToProps = {
    onUpdateCharName: updateCharName
};

export default connect(mapStateToProps, mapActionsToProps) (App);