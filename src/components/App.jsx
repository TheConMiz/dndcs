import React from 'react';
// import {Button} from 'antd';
import { Button, CssBaseline } from '@material-ui/core';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <CssBaseline/>
                <Button color="secondary">Test YAY it</Button>
            </div>
        );
    }
}

export default App;