import React from 'react';

import { createMuiTheme, CssBaseline, Button } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange } from '@material-ui/core/colors';

import SpellTable from './SpellTable'

// Hook API transition 
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: orange,
        secondary: green,
        background: {
            default: "#302929"
        }
    }
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SpellTable/>
        </ThemeProvider>
    );
}
