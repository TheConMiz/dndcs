import React, {useEffect} from 'react';

import { createMuiTheme, CssBaseline } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange } from '@material-ui/core/colors';

import { useSelector, useDispatch } from 'react-redux';

import SpellTable from './SpellTable';

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
