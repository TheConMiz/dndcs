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
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
            >
                <Pane
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexDirection="row"
                    height={280}
                    width={500}
                >
                    <Pane
                        display="flex"
                        width="50%"
                        height="100%"
                        alignItems="center"
                        justifyContent="space-around"
                        flexDirection="column"
                    >
                        <Avatar name="" size={160} />
                        <ClassSelectionMenu dbPath={this.props.dbPath} />
                    </Pane>

                    <Pane
                        display="flex"
                        height="100%"
                        width="50%"
                        alignItems="center"
                        justifyContent="space-around"
                        flexDirection="column"
                    >
                        <NameField mode="Character" />
                        <NameField mode="Player" />

                        <SelectionMenu dbPath={this.props.dbPath} mode="Race" />
                        <SelectionMenu dbPath={this.props.dbPath} mode="Background" />
                    </Pane>

                </Pane>

                <Pane width={500} height={20} />

                <Pane
                    width={500}
                    height={200}
                >
                    <ClassDisplay />
                </Pane>

            </Card>
        )
    }
}

export default ProfileCard;