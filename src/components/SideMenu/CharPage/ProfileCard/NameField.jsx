import React from 'react';

import { TextInputField, Button } from 'evergreen-ui';

import { connect } from 'react-redux';

import { updateCharName } from './../../../../actions/characterActions';

import { updateUserName } from './../../../../actions/userActions';

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
        this.state = {};
    }

    handleNameChange = (event) => {
        this.props.changeName(event.target.value);
    }
    
    render() {
        return (
            <div>
                <TextInputField
                    description={this.props.mode + " Name"}
                    isInvalid={this.props.name === "" ? true : false}
                    width={180}
                    value={this.props.name}
                    onChange={this.handleNameChange}
                />
            </div>
        );
    }

}

export default connect(null, mapDispatchToProps)(NameField);