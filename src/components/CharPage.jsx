import React from 'react';
import ProfileCard from './ProfileCard';
import MainStats from './MainStats';

class CharPage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            
        }
        
    }

    render() {
        return (
            <div>
                <ProfileCard dbPath={this.props.dbPath} />
                {/* <MainStats dbPath={this.props.dbPath} /> */}
            </div>
            
        );
    }
}

export default CharPage;
