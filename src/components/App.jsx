import React from 'react';
// import {Button} from 'antd';
import { Button, CssBaseline, createMuiTheme, MenuList, MenuItem, Divider, ListItemText } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

const themeDark = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const themeLight = createMuiTheme({
    palette: {
        type: 'light',
    },
});

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            light: true,
            conditions: [],
            list: false
        }
    }

    // listItems;

    databaseTest = () => {
        ipcRenderer.send('mainWindowLoaded');
        ipcRenderer.on("resultSent", (evt, result) => {

            // console.log(result);

            let tempArray = [];

            for (let i = 0; i < result.length; ++i){
                // console.log(result[i].name.toString());
                tempArray.push(result[i].name.toString());
            }

            this.setState({ conditions: tempArray });
            console.log(this.state.conditions);
        });
        
        // this.listItems = this.state.conditions.map((item, key) => {
        //     <MenuItem button disableFocusRipple key={key}>
        //         <ListItemText primary={item} />
        //     </MenuItem>
        // });
    }

    lightHandler = () => {
        this.setState({ light: !this.state.light });
        console.log(this.state.light);
    }

    showList = () => {
        this.setState({ list: true});
        console.log(this.state.list);
    }

    render() {
        let listTest = (
            <div>
                <MenuList>

                    <MenuItem button disableFocusRipple>
                        <ListItemText primary={this.state.conditions[2]}/>
                    </MenuItem>

                </MenuList>
            </div>
        );
        return (
            <ThemeProvider theme={this.state.light ? themeLight : themeDark}>
                <div>
                    <CssBaseline />
                    <Button color="secondary" variant="outlined" disableFocusRipple onClick={this.databaseTest}>Database Init</Button>
                    <Button variant="outlined" color="primary" onClick={this.lightHandler} disableFocusRipple>{this.state.light ? "Lights Off" : "Lights On"}</Button>
                    {/* <Button variant="outlined" color="secondary" onClick={this.showList} disableFocusRipple>List</Button>
                    {this.state.list ? <MenuList>{this.listItems}</MenuList> : <p>No list yet</p>} */}
                </div>
            </ThemeProvider>

        );
    }
}

export default App;