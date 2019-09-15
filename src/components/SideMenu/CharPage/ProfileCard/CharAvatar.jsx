import React from 'react';

import { Avatar, Button } from 'evergreen-ui';

import { Grid, TextField } from '@material-ui/core';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    
    return {
        name: state.character.name
    };
}


class CharAvatar extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        
        return (
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Avatar name={this.props.name} size={160} />
                </Grid>

                {/* <Grid item>
                    <TextField
                        style={{width: "0px"}}
                        label="Experience"
                        type="number"
                    />
                </Grid> */}
               
            </Grid>         
        );
    }
}

export default connect(mapStateToProps, null)(CharAvatar);