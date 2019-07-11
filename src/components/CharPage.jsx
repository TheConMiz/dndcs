import React from 'react';
import ProfileCard from './ProfileCard';

class CharPage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            
        }
        
    }

    render() {
        return (
            <ProfileCard dbPath={this.props.dbPath}/>
        );
    }
}

export default CharPage;
