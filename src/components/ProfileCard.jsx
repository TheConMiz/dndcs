import React from 'react';
import { Card, Elevation, InputGroup,  } from '@blueprintjs/core';

import SelectionMenu from './SelectionMenu';
import MainStats from './MainStats';

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
            >
                <div>
                    <InputGroup
                        intent={this.state.charName === "" ? "warning" : "success"}
                        placeholder="Character Name"
                        leftIcon="person"
                        onChange={() => {
                            this.setState({ charName: event.target.value });
                        }}
                    />
                    <InputGroup
                        intent={this.state.playerName === "" ? "warning" : "success"}
                        placeholder="Player Name"
                        leftIcon="person"
                        onChange={() => {
                            this.setState({ playerName: event.target.value });
                        }}
                    />
                    <SelectionMenu dbPath={this.props.dbPath} mode="Race"/>
                    <SelectionMenu dbPath={this.props.dbPath} mode="Background" />
                    
                    <MainStats dbPath={this.props.dbPath}/>
                </div>
            </Card>            
        );
    }
}

export default ProfileCard;