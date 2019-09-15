import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Drawer, List, Divider, ListItemIcon, ListItemText, ListItem } from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DescriptionIcon from '@material-ui/icons/Description';
import SaveIcon from '@material-ui/icons/SaveSharp';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 205;

const useStyles = makeStyles(theme => (
    {
        root: {
            display: 'flex',
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
            width: theme.spacing(5) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        }
    }
));

export default function SideMenu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
                elevation={2}
            >
                <Divider />
                <List>
                {/* <ListItem>
                    <Avatar
                        alt="Tim Cerberus"
                    />
                    <ListItemText primary="Tim Cerberus" />
                </ListItem> */}

                    <ListItem button>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="New Character" />
                    </ListItem>

                    <Divider />

                    <ListItem button>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Spell Sheet" />
                    </ListItem>

                    <Divider />

                    <ListItem button>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItem>

                    <Divider />

                    <ListItem button>
                        <ListItemIcon>
                            <SaveIcon />
                        </ListItemIcon>
                        <ListItemText primary="Save" />
                    </ListItem>

                    <Divider />

                    <ListItem button onClick={!open ? handleDrawerOpen: handleDrawerClose}>
                        <ListItemIcon>
                            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon/>}
                        </ListItemIcon>
                    </ListItem>
                
                </List>

            </Drawer>
        </div>
    );
}