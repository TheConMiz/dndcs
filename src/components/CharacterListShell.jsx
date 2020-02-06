import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Drawer, List, Divider, ListItemIcon, ListItem, Grid, Avatar } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import SettingsIcon from '@material-ui/icons/Settings';

const drawerWidth = 205;

const useStyles = makeStyles(theme => (
    {
        drawer: {
            overflowX: 'hidden',
            width: 55,
            display: "flex",
        },
    }
));

export default function SideMenu() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Drawer
                variant="permanent"
                className={classes.drawer}

                classes={{
                    paper: classes.drawer
                }}
                open={open}
                elevation={2}
            >

                <List>

                    <Divider />

                    <ListItem button disabled={true}>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                    </ListItem>

                    <Divider />

                    <ListItem button disabled={true}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                    </ListItem>

                    <Divider />
                </List>

            </Drawer>
        </div>
    );
}