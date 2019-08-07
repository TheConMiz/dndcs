import React from 'react';

import '@blueprintjs/core/lib/css/blueprint.css';
import CharPage from './CharPage';

import { Pane } from 'evergreen-ui';
import SelectionMenu from './SelectionMenu';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <CharPage dbPath={this.props.dbPath} />
            </div>
                                  
        );
    }
}

export default App;