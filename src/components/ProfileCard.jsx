import React from 'react';
import { Pane, Card, Avatar, TextInputField } from 'evergreen-ui';

import SelectionMenu from './SelectionMenu';
import ClassSelectionMenu from './ClassSelectionMenu';

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Card
                height={500}
                width={500}
                background="tint1"
                elevation={1}
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexDirection="row"
            >
                <Card
                    display="flex"
                    height="70%"
                    width="50%"
                    alignItems="center"
                    justifyContent="space-evenly"
                    flexDirection="column"
                >
                    <Avatar hashValue="id_124" name="Vishal Venkat" size={160} />
                    <ClassSelectionMenu/>
                    
                </Card>
                
                <Card
                    display="flex"
                    height="70%"
                    width="50%"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    flexDirection="column"
                >
                    <TextInputField
                        isInvalid={true}
                        placeholder="Character Name"
                        
                    />
                    <TextInputField
                        isInvalid={true}
                        placeholder="Player Name"
                    />
                    <SelectionMenu dbPath={this.props.dbPath} mode="Race" />
                    <SelectionMenu dbPath={this.props.dbPath} mode="Background" />
                </Card>

                
                
            </Card>
        )
    }
}

export default ProfileCard;