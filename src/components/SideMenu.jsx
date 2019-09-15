import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Drawer, List, Divider, ListItemIcon, ListItemText, ListItem, Grid } from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DescriptionIcon from '@material-ui/icons/Description';
import SaveIcon from '@material-ui/icons/SaveSharp';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

import CharPage from './SideMenu/CharPage';

import SelectionMenu from './SideMenu/CharPage/ProfileCard/SelectionMenu';
import ClassDisplay from './SideMenu/CharPage/ClassDisplay';

const drawerWidth = 205;

const useStyles = makeStyles(theme => (
    {
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap'
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
            width: 55
        },
    }
));

export default function SideMenu() {

    const classes = useStyles();

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

                <List>
                    <Divider />

                    <ListItem button disabled={true}>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="New Character" />
                    </ListItem>

                    <Divider />

                    <ListItem button disabled={true}>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Spell Sheet" />
                    </ListItem>

                    <Divider />

                    <ListItem button disabled={true}>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItem>

                    <Divider />

                    <ListItem button disabled={true}>
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

                    <Divider />
                
                </List>

            </Drawer>
            
            <Grid>
                {/* <CharPage /> */}
                {/* <SelectionMenu/> */}
                <ClassDisplay/>
            </Grid>
        </div>
    );
}