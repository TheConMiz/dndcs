import React from 'react';

import CharPage from './CharPage';

import { createMuiTheme } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange, purple } from '@material-ui/core/colors';

import '@blueprintjs/core/lib/css/blueprint.css';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: purple,
        secondary: green,
    },
    status: {
        danger: orange,
    },
});

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CharPage />
            </ThemeProvider>  
        );
    }
}

export default App;