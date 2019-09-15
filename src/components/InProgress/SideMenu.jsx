import React, {useState} from 'react';

import { Drawer, List, ListItem, Divider, ListItemIcon, ListItemText, Switch, Avatar } from '@material-ui/core';

import {makeStyles, useTheme } from '@material-ui/styles';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DescriptionIcon from '@material-ui/icons/Description';
import SaveIcon from '@material-ui/icons/SaveSharp';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    drawer: {
        width: 240
    }
}));

export default function SideMenu() {
    
    const classes = useStyles();

    return (
        <div>
            <Drawer
                variant="permanent"
                className={classes.drawer}
            >
                <List>
                    <ListItem>
                        <Avatar
                            alt="Tim Cerberus"
                        />
                        <ListItemText primary="Tim Cerberus" />
                    </ListItem>

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

                    <ListItem>
                        <Switch
                            size="medium"
                        >

                        </Switch>
                    </ListItem>

                    <Divider />

                    <ListItem button>
                        <ListItemIcon>
                            <ChevronRightIcon />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}