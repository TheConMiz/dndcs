import React from 'react';
import { Pane, Card, Avatar, TextInputField } from 'evergreen-ui';

import SelectionMenu from './ProfileCard/SelectionMenu';
import ClassSelectionMenu from './ProfileCard/ClassSelectionMenu';
import ClassDisplay from './ProfileCard/ClassDisplay';
import NameField from './ProfileCard/NameField';

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
                <Pane
                    display="flex"
                    height="70%"
                    width="50%"
                    alignItems="center"
                    justifyContent="space-between"
                    flexDirection="column"
                >
                    <Avatar name="" size={160} />
                    <ClassSelectionMenu dbPath={this.props.dbPath} />
                    <ClassDisplay/>
                    
                </Pane>
                
                <Card
                    display="flex"
                    height="70%"
                    width="50%"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    flexDirection="column"
                >
                    <NameField mode="Character"/>
                    <NameField mode="Player"/>
                    
                    <SelectionMenu dbPath={this.props.dbPath} mode="Race" />
                    <SelectionMenu dbPath={this.props.dbPath} mode="Background" />
                </Card>

                
                
            </Card>
        )
    }
}

export default ProfileCard;