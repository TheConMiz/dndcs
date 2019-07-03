import React from 'react';
import { Button, Popover, Menu, InputGroup, MenuDivider, MenuItem, Spinner} from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

//TODO: UNIQUE ID FOR EACH RACE


class RaceMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            races: [],
            currentRace: "",
            filterValue: ""
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
        console.log(this.state.currentRace);
    }

    renderRaces = (item) => {
        //console.log(item);
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



    render() {
        // const raceItems = this.state.races.map(
        //     item => {
        //         const { name } = item;
        //         return (
        //             <MenuItem
        //                 text={name}
        //                 onClick={() => {
        //                     this.selectRace(event.target);
        //                 }}
        //             />
        //         );
        //     }
        // );

        // const raceMenu = (
        //     <Menu>
        //         <InputGroup
        //             leftIcon="filter"
        //             placeholder="Filter races..."
        //             rightElement={this.state.filterValue === "" ? undefined : <Spinner size={Icon.SIZE_STANDARD} />}
        //             onChange={(event) => {
        //                 console.log(event);
        //             }}
        //         />
        //         <MenuDivider title="Player's Handbook"/>
        //             {raceItems}
        //         <MenuDivider title="Some Other Source" />
        //     </Menu>            
        // )

        //TODO: FIX MENU SEARCH BOX VISUALS, ADD SEARCHING
        return (
            <div>
                <Select
                    inputProps={{ value: this.state.races[0], onChange: this.selectRace }}
                    items={this.state.races}
                    filterable={true}
                    itemRenderer={this.renderRaces}
                    onItemSelect={this.selectRace}
                    noResults={<MenuItem disabled text="No Results..."/>}
                >
                    <Button
                        rightIcon="caret-down"
                        text={this.state.currentRace === "" ? "Race" : this.state.currentRace}
                        fill={true}
                    />
                </Select>
                {/* <Popover content={raceMenu}>
                    <Button
                        rightIcon="caret-down"
                        text={this.state.currentRace === "" ? "Race" : this.state.currentRace}
                        fill={true}
                    />
                </Popover> */}
            </div>
        );
    }
}

export default RaceMenu;