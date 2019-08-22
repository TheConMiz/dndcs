import React from 'react';

import ClassTable from './ClassDisplay/ClassTable';
import ClassSelectionMenu from './ClassDisplay/ClassSelectionMenu';

class ClassDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedClasses: []
        };
    }

    render() {
        return (
            <div>
                <ClassTable dbPath={this.props.dbPath}/>
                <ClassSelectionMenu bPath={this.props.dbPath}/>
            </div>
        );
    }
}

export default ClassDisplay;