import React from 'react';

import SideMenu from './SideMenu'

import { createMuiTheme, CssBaseline } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange } from '@material-ui/core/colors';

<<<<<<< HEAD

// Hook API transition 
=======
>>>>>>> 98c517860d1a22632beb0895afb066aed6abac86
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
            <SideMenu />            
        </ThemeProvider>
    );
}
