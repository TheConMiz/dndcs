import React from 'react';

import '@blueprintjs/core/lib/css/blueprint.css';
import CharPage from './CharPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="bp3-dark">
                <CharPage dbPath={this.props.dbPath} />
            </div>
        );
    }
}

export default App;