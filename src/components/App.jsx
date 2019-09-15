import React from 'react';

import CharPage from './CharPage';

import SideMenu from './InProgress/SideMenu'

import { createMuiTheme } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange } from '@material-ui/core/colors';

import '@blueprintjs/core/lib/css/blueprint.css';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: orange,
        secondary: green,
    },
    status: {
        danger: orange,
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CharPage />
                <SideMenu/>
            </ThemeProvider>  
        );
    }
}

export default App;