// TODO: Fix Filter Bar outlook

import React from 'react';

import { Button, MenuItem, Menu} from '@blueprintjs/core';

import { Select } from '@blueprintjs/select';
import { POSITION_BOTTOM } from '@blueprintjs/core/lib/esm/common/classes';

import './css/selectionMenu.css';

class SelectionMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsList: [],
            currentSelection: "",
            buttonName: ""
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

        let dbQuery = knex({
            sr: 'Subraces'
        })
            .select({
                subraceName: 'sr.name',
                subraceID: 'sr.index',
                raceName: 'r.name',
                raceID: 'r.index'
            })
            
            .leftJoin({ r: 'Races' }, "r.index", "sr.raceID")
            .union(knex.select([0, 0, "name", "index"]).from("Races"))
            .orderBy("r.name", "asc");
        
        dbQuery.then((rows) => {
            this.setState({ itemsList: rows });
        });
    }

    renderItems = (item, { handleClick, modifiers }) => {
        return (
            <MenuItem
                text={
                    item.subraceID === 0 ? item.raceName : item.raceName + ", " + item.subraceName
                }
                onClick={handleClick}
                active={modifiers.active}
                fill={true}
            />            
        );
    }

    filterItem = (query, item) => {
        return (
            item.raceName.toString().toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
            item.subraceName.toString().toLowerCase().indexOf(query.toLowerCase()) >= 0
        );
    }

    setCurrentItem = selectedItem => {
        let tempString = "";
        if (selectedItem.subraceID === 0) {
            tempString = selectedItem.raceName;
        }
        else {
            tempString = selectedItem.raceName + ", " + selectedItem.subraceName;
        }

        const parsedItem = JSON.stringify(selectedItem);
        this.setState({
            currentSelection: parsedItem,
            buttonName: tempString
        });
    }

    compareItems = (item1, item2) => {
        return item1.raceName.toString().toLowerCase() === item2.raceName.toString().toLowerCase() && item1.subraceName.toString().toLowerCase() === item2.subraceName.toString().toLowerCase()
    }

    keyboardControls = (newItem) => {
    // TODO: Missing Arrow Controls
    // TODO: Active item is automatically set to whatever is first on the list. this is bad.
    // TODO: While scrolling, leave previously chosen item as is until it is selected
        //console.log(newItem);
        
        // if (newItem !== null) {
        //     const parsedItem = JSON.stringify(newItem);
        //     this.setState({ currentSelection: parsedItem });
        //     console.log(this.state.currentSelection)
        // }

        // else {
        //     return
        // }
    }

    render() {
        return (
            <Select
                resetOnClose={true}
                resetOnQuery={true}
                scrollToActiveItem={true}
                items={this.state.itemsList}
                itemRenderer={this.renderItems}
                noResults={<MenuItem disabled={true} text="No results..." />}
                itemPredicate={this.filterItem}
                itemsEqual={this.compareItems}
                onItemSelect={this.setCurrentItem}
                activeItem={this.state.currentSelection === "" ? null : JSON.parse(this.state.currentSelection)}
                onQueryChange={this.keyboardControls}
                popoverProps={{ inheritDarkTheme: false, popoverClassName: "selectionMenu" }}
                // onActiveItemChange={this.keyboardControls}
            >
                <Button
                    rightIcon="caret-down"
                    autoFocus={false}
                    fill={true}
                    style={{ width: '175px' }}
                    alignText='left'
                >
                    {
                        this.state.buttonName === "" ? "Race" : this.state.buttonName
                    }
                </Button>
            </Select>
        );
    }
}

export default SelectionMenu;