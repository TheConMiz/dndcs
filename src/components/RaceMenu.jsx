import React from 'react';
import { Button, Popover, Menu, InputGroup, MenuDivider, MenuItem, Spinner, Icon } from '@blueprintjs/core';
import Fuse from 'fuse.js';

class RaceMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            races: [],
            currentRace: "",
            filterValue: "",
            filteredRaces: [],
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
            //console.log(rows);
            this.setState({ races: rows });
        });
    }

    selectRace = raceChoice => {
        //console.log(raceChoice);
        this.setState({ currentRace: raceChoice.innerText });
        //console.log(this.state.currentRace);
    }

    editFilter = item => {
        this.setState({ filterValue: item });
        this.searchRaces(this.state.filterValue);
        //console.log(this.state.filterValue);
    }

    searchRaces = (searchValue) => {
        // Fuzzy Search Setup
        let options = {
            keys: ['name']
        };

        const fuse = new Fuse(this.state.races, options);
        let temp = fuse.search(searchValue)

        this.setState({ filteredRaces: temp});
        
        //console.log(this.state.filteredRaces);
    }

    renderRaces = raceList => {
        raceList.map(
            item => {
                const { name } = item;
                return (
                    <MenuItem
                        text={name}
                        onClick={() => {
                            this.selectRace(event.target);
                        }}
                    />
                );
            }
        )
    }

    render() {

        const startRaces = this.state.races.map(
            item => {
                const { name } = item;
                return (
                    <MenuItem
                        text={name}
                        onClick={() => {
                            this.selectRace(event.target);
                        }}
                    />
                );
            }
        );

        const raceMenu = (
            <Menu>
                <InputGroup
                    value={this.state.filterValue === "" ? "" : this.state.filterValue}
                    leftIcon="filter"
                    placeholder="Filter races..."
                    onChange={(event) => {
                        // console.log(event.target.value);
                        this.editFilter(event.target.value);
                    }}
                />
                <MenuDivider title="Player's Handbook"/>
                    {startRaces}
                <MenuDivider title="Some Other Source" />
            </Menu>            
        )

        return (
            <div>
                <Popover content={raceMenu}>
                    <Button
                        rightIcon="caret-down"
                        text={this.state.currentRace === "" ? "Race" : this.state.currentRace}
                        fill={true}
                    />
                </Popover>
            </div>
        );
    }
}

export default RaceMenu;