import React from 'react';

import { AppBar, Toolbar, IconButton, Icon, Tabs, Tab } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <AppBar>
                <Toolbar>
                    <IconButton disableFocusRipple color="secondary">
                        <MenuIcon />
                        
                    </IconButton>
                    <Tabs>
                        <Tab
                            label="Character"
                            disableFocusRipple
                        />
                        <Tab
                            label="Equipment"
                            disableFocusRipple
                        />
                        <Tab
                            label="Test 3"
                            disableFocusRipple
                        />
                    </Tabs>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopBar;