import React from 'react';
import { Card, Elevation, InputGroup,  } from '@blueprintjs/core';

import SelectionMenu from './SelectionMenu';

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
                <SelectionMenu dbPath={this.props.dbPath} />
            </Card>            
        );
    }
}

export default ProfileCard;