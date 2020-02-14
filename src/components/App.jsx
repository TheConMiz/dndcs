import React from 'react';

import { createMuiTheme, CssBaseline, Grid, Paper, Typography } from '@material-ui/core';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import DataPuller from './DataPuller';

import SpellTableShell from './SpellTableShell';
import NameInput from './NameInput';
import LevelView from './LevelView';

import SideBar from './SideBar'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        // primary: orange,
        // secondary: green,
        // background: {
        //     default: "#302929"
        // }
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
        minHeight: '100vh',
        width: "100%",
        padding: theme.spacing(1),
        userSelect: "none",
        overflow: 'auto',
    },
    testPaper: {
        textAlign: "center",
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
    }
}))



export default function App() {

    const classes = useStyles();

    return (
        <SideBar />
        
        // <ThemeProvider theme={theme}>
            
        //     {/* <DataPuller /> */}

        //     <CssBaseline />

            
            
        //     <Grid
        //         container
        //         className={classes.root}
        //         direction="column"
        //         justify="space-evenly"
        //         alignItems="stretch"
        //         spacing={2}
        //     >
        //         <Grid
        //             lg={12}
        //             md={12}
        //             sm={12}
        //             xs={12}
        //             item
        //             container
        //             spacing={2}
        //             alignItems="stretch"
        //             justify="space-evenly"
        //             direction="row"
        //         >

        //             <Grid
        //                 item
        //                 lg={3}
        //                 md={3}
        //                 sm={12}
        //                 xs={12}
        //             >
        //                 <Paper
        //                     elevation={0}
        //                     variant="outlined"
        //                 >

        //                     <Typography variant="h3" className={classes.testPaper}>
        //                         Background and Class Stuff
        //                 </Typography>
        //                 </Paper>

        //             </Grid>

        //             <Grid
        //                 item
        //                 lg={6}
        //                 md={6}
        //                 sm={12}
        //                 xs={12}
        //             >
        //                 <Paper
        //                     elevation={0}
        //                     variant="outlined"
        //                     className={classes.testPaper}
        //                 >

        //                     <Typography variant="h3">
        //                         Equipment and Level info?
        //                 </Typography>
        //                 </Paper>

        //             </Grid>

        //             <Grid
        //                 item
        //                 lg={3}
        //                 md={3}
        //                 sm={12}
        //                 xs={12}
        //             >
        //                 <Paper
        //                     elevation={0}
        //                     variant="outlined"
        //                     className={classes.testPaper}
        //                 >

        //                     <Typography variant="h3">
        //                         Character Particulars
        //                 </Typography>
        //                 </Paper>

        //             </Grid>

        //         </Grid>

        //         <Grid
        //             item
        //             lg={12}
        //             md={12}
        //             sm={12}
        //             xs={12}
        //         >
        //             <Paper
        //                 elevation={0}
        //                 variant="outlined"
        //                 className={classes.testPaper}
        //             >

        //                 <Typography variant="h3">
        //                     Spell Table
        //                 </Typography>
        //             </Paper>
        //         </Grid>
        //     </Grid>

        // </ThemeProvider>
    );
}
