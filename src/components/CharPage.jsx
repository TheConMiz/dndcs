import React from 'react';
import ProfileCard from './ProfileCard';
import MainStats from './MainStats';

import { Pane } from 'evergreen-ui';
import ClassSelectionMenu from './ProfileCard/ClassSelectionMenu';

class CharPage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            
        }
        
    }

    render() {
        return (
            <Pane
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyItems="space-evenly"
                width="100%"
                height="100%"
            >
                <ProfileCard dbPath={this.props.dbPath} />
                <ClassSelectionMenu dbPath={this.props.dbPath} />
            </Pane>
                
            
        );
    }
}

export default CharPage;
