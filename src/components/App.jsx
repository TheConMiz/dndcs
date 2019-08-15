import React from 'react';

import { connect } from 'react-redux';

import '@blueprintjs/core/lib/css/blueprint.css';
import CharPage from './CharPage';
import MainStats from './MainStats';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            playerName: "",

            character: {
                name: "",
                classesSelected: [],
                abilityScores: [],
                race: "",
                background: "",    
            }
        };
    }

    render() {

        console.log(this.props);
        return (
            <div>
                <CharPage dbPath={this.props.dbPath} />
                <MainStats dbPath={this.props.dbPath}/>
            </div>               
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapActionsToProps = {

};

export default connect(mapStateToProps, mapActionsToProps) (App);