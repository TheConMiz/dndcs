import React from 'react';

import { Drawer, List, ListItem, IconButton, Divider, ListItemIcon, ListItemText } from '@material-ui/core';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import SaveIcon from '@material-ui/icons/SaveSharp';


export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            menuOpen: false
        };
    }

    handleMenuToggle = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
        console.log(this.state.menuOpen);
    }

    render() {
        return (
            <div>
                <Drawer
                    variant="permanent"
                    open={this.state.menuOpen}
                >

                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <SaveIcon />
                            </ListItemIcon>
                            <ListItemText primary="Save" />
                        </ListItem>
                        
                        <Divider/>

                        <ListItem button>
                            <ListItemIcon>
                                <SaveIcon />
                            </ListItemIcon>
                            <ListItemText primary="Save" />
                        </ListItem>
                    </List>
                    <div>
                        <IconButton disableFocusRipple onClick={this.handleMenuToggle}>
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                        
                    
                </Drawer>
            </div>
        );
    }
}