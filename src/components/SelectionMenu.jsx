// TODO: Fix Filter Bar outlook

import React from 'react';

import { Button, MenuItem} from '@blueprintjs/core';

import { Select } from '@blueprintjs/select';

class SelectionMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "Race",
            tableName: "",
            itemsList: [],
            currentSelection: ""
        }
    }

    connectToDB = () => {
        // Establish connection with database
        const knex = window.require('knex')({
            client: "sqlite3",
            connection: {
                filename: this.props.dbPath
            },
            useNullAsDefault: true,
            debug: true
        });

        let result = knex.select(["name", "index"]).from("Races").orderBy("name", 'asc');
        result.then((rows) => {
            this.setState({ itemsList: rows });
        });
    }

    renderItems = (item, { handleClick, modifiers }) => {
        const { name } = item;
        return (
            <MenuItem
                text={name}
                onClick={handleClick}
                active={modifiers.active}
                fill={true}
            />
        );
    }

    filterItem = (query, item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
    }

    setCurrentItem = selectedItem => {
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

    render() {
        
        return (

            <Select
                resetOnClose={true}
                resetOnQuery={true}
                scrollToActiveItem={true}
                items={this.state.itemsList}
                // itemListRenderer={this.renderMenu}
                itemRenderer={this.renderItems}
                noResults={<MenuItem disabled={true} text="No results..." />}
                itemPredicate={this.filterItem}
                itemsEqual={this.compareItems}
                onItemSelect={this.setCurrentItem}
                activeItem={this.state.currentSelection === "" ? null : JSON.parse(this.state.currentSelection)}
                // onActiveItemChange={this.keyboardChangeRace}
            >
                <Button
                    rightIcon="caret-down"
                    autoFocus={false}
                    fill={true}
                    style={{ width: '150px' }}
                    alignText='left'
                >
                    {this.state.currentSelection === "" ? this.state.mode : JSON.parse(this.state.currentSelection).name}
                </Button>
            </Select>
        );
    }
}

export default SelectionMenu;