// TODO: Fix Filter Bar outlook

import React from 'react';

import { SelectMenu,  Card, Pane, Text, IconButton, Button } from 'evergreen-ui';

class SelectionMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode,
            itemsList: [],
            selected: null
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

        let dbQuery;

        if (this.state.mode === "Race") {
            dbQuery =
                knex({
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

        if (this.state.mode === "Background") {
            dbQuery =
                knex({
                    bg: 'Backgrounds'
                })
                    .select({
                        backgroundName: 'bg.name',
                        backgroundID: 'bg.index',
                    })
                    .orderBy('bg.name', 'asc');

            dbQuery.then((rows) => {
            this.setState({ itemsList: rows });
        });
        }
    }

    clearData = () => {
        this.setState({ selected: null });
    }

    render() {
        return (      
            <Pane
                display="flex"
                border="muted"
            >
                <SelectMenu
                    title={"Select a " + this.state.mode}
                    options={
                        this.state.mode === "Race" ? 
                        this.state.itemsList.map(label => ({
                            label: label.subraceID === 0 ? label.raceName : label.raceName + ", " + label.subraceName, value: label
                        }))
                            :
                        this.state.itemsList.map(label => ({
                            label: label.backgroundName, value: label
                        }))
                    }

                    selected={this.state.selected}

                    onSelect={item => {
                        this.setState({ selected: item.value });
                    }}

                    emptyView={(
                        <Card
                            height="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            background="tint2"
                        >
                            <Text
                                size={300}
                            >
                                No Results
                        </Text>
                        </Card>
                    )}

                    closeOnSelect={true}
                >
                    <Button
                        style={{ width: '150px' }}
                        appearance={this.state.selected === null ? "none" : "primary"}
                    >
                        {
                            this.state.mode === "Race" ? (
                                this.state.selected === null ? "Race" : this.state.selected.subraceID === 0 ? this.state.selected.raceName : this.state.selected.raceName + ", " + this.state.selected.subraceName
                            ) : 
                            
                            (this.state.selected === null ? "Background" : this.state.selected.backgroundName)
                        }
                    </Button>
                </SelectMenu>
                <IconButton
                    appearance="minimal"
                    icon="trash"
                    intent="danger"
                    onClick={this.clearData}
                    disabled={this.state.selected === null ? true: false}
                />  
            </Pane>
        );
    }
}

export default SelectionMenu;