import React from 'react';
import { Card, Elevation, InputGroup, Button, Icon, NumericInput } from '@blueprintjs/core';
import Grid from '@material-ui/core/Grid';

import RaceMenu from './RaceMenu';
import SelectionMenu from './SelectionMenu';

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ["TEst", "Test2"]
        }
    }

    componentDidMount = () => {
        
    }

    render() {
        return (
            <div>
                <Card
                    interactive={false}
                    elevation={Elevation.ZERO}
                    style={{ width: '25em', height: "9em" }}
                >
                    <Grid
                        container
                        justify="space-between"
                        spacing={2}
                        direction='column'
                        alignItems='center'
                    >

                        <Grid
                            container
                            item
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            spacing={1}
                        >
                            <Grid item>
                                <SelectionMenu
                                    mode="Race"
                                    dbPath={this.props['dbPath']}
                                />
                            </Grid>
                            
                        </Grid>                                    
                    </Grid>
                </Card>
            </div>

        );
    }
}

export default ProfileCard;