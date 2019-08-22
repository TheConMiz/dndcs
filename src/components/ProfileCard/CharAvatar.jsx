import React from 'react';

import { Avatar, Button } from 'evergreen-ui';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    const name = state.character.name;

    return {
        name: state.character.name
    };
}


class CharAvatar extends React.Component {
    constructor() {
        super();

        this.state = {};
    }
    
    render() {
        
        return (
            <div>
                <Avatar name={this.props.name} size={160} />
            </div>
            
        );
    }
}

export default connect(mapStateToProps, null)(CharAvatar);