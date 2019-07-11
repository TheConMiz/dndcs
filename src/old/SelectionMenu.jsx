// TODO: Fix Filter Bar outlook

import React from 'react';

import { Button, MenuItem, Menu, Popover, InputGroup} from '@blueprintjs/core';

import { Select } from '@blueprintjs/select';

import Fuse from 'fuse.js';

// TODO: Remake Button with Sub-races
// TODO: Better Fuse Search Controls


class SelectionMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "Race",
            tableName: "",
            itemsList: [],
            subItemsList: [],
            currentSelection: {
                item: "",
                subItem: ""
            },
            fuseOptions: {
                keys: ["name"]
            }
        }

    }

    componentDidMount = () => {
        // Establish connection with database
        const knex = window.require('knex')({
            client: "sqlite3",
            connection: {
                filename: this.props.dbPath
            },
            useNullAsDefault: true,
            debug: true
        });

        

        let dbQuery = knex.select(["name", "index", "raceID"]).from("Subraces").orderBy("name", 'asc');
        dbQuery.then((rows) => {
            this.setState({ subItemsList: rows });
        });

        dbQuery = knex.select(["name", "index"]).from("Races").orderBy("name", 'asc');
        dbQuery.then((rows) => {
            this.setState({ itemsList: rows });
        });
    }

    renderItems = (item, { handleClick, modifiers }) => {
        const { name } = item;
        
        let fuse = new Fuse(this.state.subItemsList, this.state.fuseOptions);
        let results = fuse.search(item.index.toString());

        return (
            <MenuItem
                text={name}
                onClick={handleClick}
                active={modifiers.active}
                fill={true}
            >
                {results.length === 0 ? null : results.map(item => (
                    <MenuItem
                        text={item.name}
                        onClick={handleClick}
                        fill={true}
                    />))}
            </MenuItem>
        );
    }

    // TODO: Edit to include Sub-menu
    filterItem = (query, item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
    }

    // TODO: EDIT to include sub-menu
    setCurrentItem = selectedItem => {
        console.log(selectedItem);
        const parsedItem = JSON.stringify(selectedItem);
        this.setState({ currentSelection: parsedItem });
    }

    compareItems = (item1, item2) => {
        return item1.name.toLowerCase() === item2.name.toLowerCase();
    }

    // keyboardChangeItem = (newItem) => {
        // TODO: Missing Arrow Controls
        // TODO: Active item is automatically set to whatever is first on the list. this is bad.
        // TODO: While scrolling, leave previously chosen item as is until it is selected
        // TODO: On arrow click menu moves ==> due to gridbox?
        
    //     if (newItem !== null) {
    //         const parsedItem = JSON.stringify(newItem);
    //         this.setState({ currentSelection: parsedItem });
    //     }

    //     else if (newItem === null) {
    //         this.setState({ currentSelection: "" });
    //     }
    // }

    testText = (event) => {
        //console.log(event.target.value);
        let fuse = new Fuse(this.state.itemsList, this.state.fuseOptions);
        console.log(this.state.itemsList);
        let results = fuse.search(event.target.value.toString());

        console.log(results);
    }

    render() {
        
        return (
            <Popover content={<Menu><InputGroup onChange={this.testText}/><MenuItem text="sd"/></Menu>}>
                <Button

                >
                    Race
                </Button>
            </Popover>
            // <Select
            //     resetOnClose={true}
            //     resetOnQuery={true}
            //     scrollToActiveItem={true}
            //     items={this.state.itemsList}
            //     itemRenderer={this.renderItems}
            //     noResults={<MenuItem disabled={true} text="No results..." />}
            //     itemPredicate={this.filterItem}
            //     itemsEqual={this.compareItems}
            //     onItemSelect={this.setCurrentItem}
            //     // activeItem={
            //     //     this.state.currentSelection.item === "" ? null :
                        
            //     //         JSON.parse(this.state.currentSelection)
            //     // }
            // >
            //     <Button
            //         rightIcon="caret-down"
            //         autoFocus={false}
            //         fill={true}
            //         style={{ width: '130px' }}
            //         alignText='left'
            //     >
            //         Race
            //         {/* {this.state.currentSelection === "" ? this.state.mode : JSON.parse(this.state.currentSelection).name} */}
            //     </Button>
            // </Select>
        );
    }
}

export default SelectionMenu;