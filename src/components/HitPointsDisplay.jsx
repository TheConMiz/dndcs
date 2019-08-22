import React from 'react';

import { Paper, Divider, TextField } from '@material-ui/core';

export default class HitPointsDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Paper>
                <TextField
                    type="number"
                    label="Current HP"
                />
                <div style={{height: '15px'}}/>
                <Divider
                    orientation="vertical"
                />
                <div style={{height: '15px'}}/>
                <TextField
                    type="number"
                    label="Temp. HP"
                />
            </Paper>
        );
    }
}