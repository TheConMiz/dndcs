import React from 'react';
import { Card, Elevation, InputGroup, Divider } from '@blueprintjs/core';

import SelectionMenu from './SelectionMenu';
import MainStats from './MainStats';

import { Image } from 'semantic-ui-react';

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            charName: ""
        }
    }

    render() {
        return (
            <Card
                interactive={false}
                elevation={Elevation.ZERO}
                style={{width: '700px'}}
            >
                <div style={{ display: 'grid' }}>
                    <div style={{display: 'flex'}}>
                        

                        <div>
                            <Card
                                elevation={Elevation.FOUR}
                                interactive={true}
                                style={{width: '300px', height: '240px'}}
                            >
                                <Image fluid rounded/>
                            </Card>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <InputGroup
                                intent={this.state.charName === "" ? "warning" : "success"}
                                placeholder="Character Name"
                                leftIcon="person"
                                onChange={() => {
                                    this.setState({ charName: event.target.value });
                                }}
                                style={{ width: '175px' }}
                            />
                            <InputGroup
                                intent={this.state.playerName === "" ? "warning" : "success"}
                                placeholder="Player Name"
                                leftIcon="person"
                                onChange={() => {
                                    this.setState({ playerName: event.target.value });
                                }}
                                style={{ width: '175px' }}
                            />
                            <SelectionMenu dbPath={this.props.dbPath} mode="Race" />
                            <SelectionMenu dbPath={this.props.dbPath} mode="Background" />
                        </div>
                    </div>
                    <div>
                        <Card
                            elevation={Elevation.FOUR}
                            interactive={true}
                            style={{ height: '50px' }}
                        >
                            <Divider/>
                        </Card>
                    </div>
                </div>
            </Card>            
        );
    }
}

export default ProfileCard;