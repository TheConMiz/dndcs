import React from 'react';
import ProfileCard from './ProfileCard';
import MainStats from './MainStats';

import { Pane } from 'evergreen-ui';

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
                <MainStats dbPath={this.props.dbPath} />
            </Pane>
                
            
        );
    }
}

export default CharPage;
