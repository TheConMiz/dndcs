import React from 'react';

import CharPage from './CharPage';

import SideMenu from './InProgress/SideMenu'

import { createMuiTheme, CssBaseline } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange } from '@material-ui/core/colors';

// import '@blueprintjs/core/lib/css/blueprint.css';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: orange,
        secondary: green,
        background: {
            default: "#573535",
            paper: "#4f1e00"
        }
    }
});

export default function App() {
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SideMenu />
            <CharPage />
            
        </ThemeProvider>
    );
}
