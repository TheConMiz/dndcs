// /**
//  * Top-level App component
//  */

import React, { useState } from 'react'

import clsx from 'clsx';
import { createMuiTheme, ThemeProvider, makeStyles, useTheme } from '@material-ui/core/styles';
import { Avatar, Card, List, Drawer, Divider, Typography } from "@material-ui/core"

// import { createMuiTheme , makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import SettingsIcon from '@material-ui/icons/Settings';
import NoteIcon from '@material-ui/icons/Note';

const drawerWidth = 240;

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },

    sidebarItems: {
        alignItems: 'center',
        justifyContent: "center",
        display: "flex",
        padding: theme.spacing(0, 1),
        flexDirection: "column",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

}));

export const App = () => {
    const classes = useStyles();

    const [sideBar, setSideBar] = useState(false)

    return (
        <div className={classes.root}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: sideBar,
                        [classes.drawerClose]: !sideBar,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: sideBar,
                            [classes.drawerClose]: !sideBar,
                        }),
                    }}
                >
                    <div className={classes.sidebarItems}>
                        <Avatar/>
                    </div>
                    <Divider />
                    <List className={classes.sidebarItems}>
                        {/* Characters */}
                    </List>

                    <Divider />

                    <Divider />


                    <List className={classes.sidebarItems} >
                        <ListItem button>
                            <ListItemIcon>
                                <NoteIcon />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button >
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>

                        </ListItem>

                        <IconButton
                            onClick={() => {
                                setSideBar(!sideBar)
                            }}

                        >
                            {sideBar ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>

                    </List>

                </Drawer>
                
                <main className={classes.content}>


                    <div className={classes.toolbar} />


                    <Card>
                        <Typography>
                            Player Profile
                        </Typography>
                    </Card>

                    <Card>
                        <Typography>
                            Spell Table
                        </Typography>
                    </Card>

                    <Card>
                        Search Bar
                    </Card>

                </main>
            </ThemeProvider>


        </div>
    );
}