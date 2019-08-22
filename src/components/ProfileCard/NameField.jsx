import React from 'react';

import { TextInputField } from 'evergreen-ui';

import { connect } from 'react-redux';

import { updateCharName } from './../../actions/characterActions';

const mapStateToProps = state => {
    // console.log(state);

    const { character } = state;

    console.log(character);
}

class NameField extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }
    
    render() {
        return (
            <div>
                <TextInputField
                    description={this.props.mode + " Name"}
                    isInvalid={this.state.name === "" ? true : false}
                    width={180}
                    value={this.state.name}
                    onChange={event =>{this.setState({name: event.target.value})}}
                />
            </div>
        );
    }

}

export default connect(mapStateToProps)(NameField);