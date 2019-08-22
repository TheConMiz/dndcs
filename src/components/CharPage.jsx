import React from 'react';
import ProfileCard from './ProfileCard';
import MainStats from './test/MainStats';

import { Pane } from 'evergreen-ui';
import ClassDisplay from './ClassDisplay';
import HitPointsDisplay from './HitPointsDisplay';

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
                <ProfileCard/>
                <ClassDisplay dbPath={this.props.dbPath} />
                <HitPointsDisplay/>
            </Pane>
                
            
        );
    }
}

export default CharPage;
