import React from 'react';
import { Card, Elevation} from '@blueprintjs/core';

import SelectionMenu from './SelectionMenu';

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <Card
                interactive={false}
                elevation={Elevation.ZERO}
                style={{ width: '25em', height: "9em" }}
            >
                <SelectionMenu/>
            </Card>
            
        );
    }
}

export default ProfileCard;