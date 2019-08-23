import React from 'react';

import ClassTable from './ClassDisplay/ClassTable';
import ClassSelectionMenu from './ClassDisplay/ClassSelectionMenu';

class ClassDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <ClassTable/>
                <ClassSelectionMenu/>
            </div>
        );
    }
}

export default ClassDisplay;