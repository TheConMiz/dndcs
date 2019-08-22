import React from 'react';

import { TextInputField, Button } from 'evergreen-ui';

import { connect } from 'react-redux';

import { updateCharName } from './../../actions/characterActions';
import { updateUserName } from './../../actions/userActions';

const mapStateToProps = (state, ownProps) => {
    
    if (ownProps.mode === "Character") {
        const name = state.character.name;
        return { name };
    }

    else if (ownProps.mode === "Player") {
        const name = state.user.name;
        return { name };
    }
    
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeName: (newName) => {

            if (ownProps.mode === "Character") {
                dispatch(updateCharName(newName));
            }

            else if (ownProps.mode === "Player") {
                dispatch(updateUserName(newName));
            }
        }
    }
}

class NameField extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }

    handleNameChange = (event) => {
        
        this.setState({ name: event.target.value });
        this.props.changeName(this.state.name);
    }
    
    render() {
        return (
            <div>
                <TextInputField
                    description={this.props.mode + " Name"}
                    isInvalid={this.state.name === "" ? true : false}
                    width={180}
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(NameField);