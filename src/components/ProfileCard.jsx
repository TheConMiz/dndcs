import React from 'react';
import { Card, Elevation, InputGroup, Button, Icon, NumericInput } from '@blueprintjs/core';
import Grid from '@material-ui/core/Grid';

import RaceMenu from './RaceMenu';

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
                <Card interactive={false} elevation={Elevation.TWO} style={{ width: '40em', height: "30em" }}>
                    

                    <Grid container direction="row" spacing={5}>
                        <Grid item>
                            <Grid container direction="row">
                                <Grid item>
                                    <Card interactive={true} style={{ width: '250px', height: '150px', textAlign: 'center' }}>
                                        <Grid container spacing={10} justify="center" alignItems="center" direction="column">
                                            <Grid item>
                                                <Icon icon="plus" iconSize={90} intent="primary" />
                                            </Grid>
                                        </Grid>
                                        
                                        <div className=".bp3-text-large.bp3-text-muted">
                                            Character Portrait
                                        </div>
                                     
                                    </Card>
                                    <NumericInput
                                        min={0}
                                        max={20}
                                        selectAllOnFocus={true}
                                        placeholder="Level 0"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={2}>
                                <Grid item>
                                    <InputGroup
                                        placeholder="Player Name"
                                        large={true}
                                        intent="warning"
                                    />
                                </Grid>

                                <Grid item>
                                    <InputGroup
                                        placeholder="Character Name"
                                        large={true}
                                        intent="warning"
                                    />
                                </Grid>
                                
                                <Grid item>
                                    <RaceMenu dbPath={this.props['dbPath']} />
                                </Grid>

                                <Grid item>
                                    <Button rightIcon="caret-down" fill={true}>
                                        Background
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
 
                    <Button large={false} rightIcon="caret-down" fill={true} alignText="left">
                        Class
                    </Button>
                </Card>
            </div>

        );
    }
}

export default ProfileCard;