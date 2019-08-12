import React from 'react';

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
        return (
            <div>
                <CharPage dbPath={this.props.dbPath} />
                <MainStats dbPath={this.props.dbPath}/>
            </div>               
        );
    }
}

export default App;