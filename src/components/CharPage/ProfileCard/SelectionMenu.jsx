import React from 'react';

import { SelectMenu, Card, Pane, Text, IconButton, Button } from 'evergreen-ui';

import { connect } from 'react-redux';

import { updateCharRace, updateCharBackground } from './../../../actions/characterActions';

const mapStateToProps = (state, ownProps) => {
    
    const dbPath = state.app.dbPath;
    const race = state.character.race;
    const background = state.character.background;

    return { dbPath, race, background };

}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.mode === "Race") {
        return {
            changeRace: (newRace) => {
                dispatch(updateCharRace(newRace));
            }
        }
    }

    else if (ownProps.mode === "Background") {
        return {
            changeBackground: (newBackground) => {
                dispatch(updateCharBackground(newBackground));
            }
        }
    }
}

class SelectionMenu extends React.Component {
    constructor(props) {
        
        super(props);

        this.state = {
            itemsList: [],
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

        if (this.props.mode === "Race") {
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

        if (this.props.mode === "Background") {
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
        
        if (this.props.mode === "Race") {
            this.props.changeRace(null);
        }

        else if (this.props.mode === "Background") {
            this.props.changeBackground(null);
        }
        
    }

    selectItem = (item) => {

        console.log(item);

        if (this.props.mode === "Race") {

            this.props.changeRace(item.value);
        }

        else if (this.props.mode === "Background") {
            this.props.changeBackground(item.value);
        }
    }

    render() {
        return (      
            <Pane
                display="flex"
                border="muted"
            >
                <SelectMenu
                    title={"Select a " + this.props.mode}
                    options={
                        this.props.mode === "Race" ? 
                        this.state.itemsList.map(label => ({
                            label: label.subraceID === 0 ? label.raceName : label.raceName + ", " + label.subraceName, value: label
                        }))
                            :
                        this.state.itemsList.map(label => ({
                            label: label.backgroundName, value: label
                        }))
                    }

                    selected={this.props.mode === "Race" ? (this.props.race) : this.props.mode === "Background" ? (this.props.background) : null}

                    onSelect={this.selectItem}

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
                        appearance={
                            this.props.mode === "Race" ?
                            (this.props.race === null ? "none" : "primary") :
                            this.props.mode === "Background" ?
                                (this.props.background === null ? "none" : "primary")
                                : "none"
                        }
                    >
                        {
                            this.props.mode === "Race" ? (
                                this.props.race === null ? "Race" : this.props.race.subraceID === 0 ? this.props.race.raceName : this.props.race.raceName + ", " + this.props.race.subraceName
                            ) : 
                            
                                (this.props.background === null ? "Background" : this.props.background.backgroundName)
                        }
                    </Button>
                </SelectMenu>

                <IconButton
                    appearance="minimal"
                    icon="trash"
                    intent="danger"
                    onClick={this.clearData}
                    disabled={
                        this.props.mode === "Race" ? (this.props.race === null ? true : false) : this.props.mode === "Background" ? (this.props.background === null ? true : false) : true}
                />
            </Pane>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionMenu);