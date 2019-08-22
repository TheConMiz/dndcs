import React from 'react';

import { TextInputField, Button } from 'evergreen-ui';

import { connect } from 'react-redux';

import { updateCharName } from './../../actions/characterActions';

import { updateUserName } from './../../actions/userActions';

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

export default connect(null, mapDispatchToProps)(NameField);