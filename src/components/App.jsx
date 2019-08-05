import React from 'react';

import '@blueprintjs/core/lib/css/blueprint.css';
import CharPage from './CharPage';
import SideBar from './SideBar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="bp3-dark">
                <div style={{margin: '100px'}}>
                    <CharPage dbPath={this.props.dbPath} />
                </div>
                
                <SideBar/>
            </div>
        );
    }
}

export default App;