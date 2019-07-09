import React from 'react';

import '@blueprintjs/core/lib/css/blueprint.css';
import CharPage from './CharPage';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="bp3-dark">
                <CharPage />
            </div>
        );
    }
}

export default App;