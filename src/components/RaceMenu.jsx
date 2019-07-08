// TODO: Fix Filter Bar outlook

import React from 'react';

import { Button, MenuItem} from '@blueprintjs/core';

import { Select } from '@blueprintjs/select';


class RaceMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: "",
            races: [],
            currentRace: ""
        }
    }

    componentDidMount = () => {
        const knex = window.require('knex')({
            client: "sqlite3",
            connection: {
                filename: this.props['dbPath']
            },
            useNullAsDefault: true,
            debug: true
        });

        let result = knex.select(["name", "index"]).from("Races").orderBy("name", 'asc');

        result.then((rows) => {
            this.setState({ races: rows });
        });
    }

    // TODO: Optional Customization of the Menu itself
    // renderMenu = ({ }) => {
    //     return (
    //         <Menu>

    //         </Menu>
    //     );
    // }

    renderRace = (raceItem, { handleClick, modifiers }) => {
        const { name } = raceItem;
        return (
            
            <MenuItem
                text={name}
                onClick={handleClick}
                active={modifiers.active}
                fill={true}
            />
        );
    }

    filterRace = (query, race) => {
        return race.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
    }

    setCurrentRace = selectedRace => {
        const parsedRace = JSON.stringify(selectedRace);
        this.setState({ currentRace: parsedRace });
        console.log(this.state.currentRace);
    }

    compareRace = (race1, race2) => {
        return race1.name.toLowerCase() === race2.name.toLowerCase();
    }

    keyboardChangeRace = (newRace) => {
        // TODO: Missing Arrow Controls
        // TODO: Active item is automatically set to whatever is first on the list. this is bad.
        // TODO: While scrolling, leave previously chosen item as is until it is selected
        // TODO: On arrow click menu moves ==> due to gridbox?
        
        if (newRace !== null) {
            const parsedRace = JSON.stringify(newRace);
            this.setState({ currentRace: parsedRace });
        }

        else if (newRace === null) {
            this.setState({ currentRace: "" });
        }
    }

    render() {
        return (
            <div>
                <Select
                    resetOnClose={true}
                    resetOnQuery={true}
                    scrollToActiveItem={true}
                    items={this.state.races}
                    // itemListRenderer={this.renderMenu}
                    itemRenderer={this.renderRace}
                    noResults={<MenuItem disabled={true} text="No results..." />}
                    itemPredicate={this.filterRace}
                    itemsEqual={this.compareRace}
                    onItemSelect={this.setCurrentRace}
                    activeItem={this.state.currentRace === "" ? null : JSON.parse(this.state.currentRace)}
                    // onActiveItemChange={this.keyboardChangeRace}
                >
                    <Button
                        rightIcon="caret-down"
                        minimal={true}
                        autoFocus={false}
                    >
                        {this.state.currentRace === "" ? "Race" : JSON.parse(this.state.currentRace).name}
                    </Button>
                </Select>
            </div>
        );
    }
}

export default RaceMenu;