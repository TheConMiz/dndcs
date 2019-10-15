import React from 'react';

import SideMenu from './SideMenu'

import { createMuiTheme, CssBaseline, Button } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange } from '@material-ui/core/colors';


// Hook API transition 
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: orange,
        secondary: green,
        background: {
            default: "#302929",
            paper: "#4f1e00",
        }
    }
});

export default function App() {
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button color="primary">Test</Button>
            <Button color="primary">Test</Button>
            <Button color="primary">Test</Button>
            <Button color="primary">Test</Button>
            <Button color="primary">Test</Button>
        </ThemeProvider>
    );
}
