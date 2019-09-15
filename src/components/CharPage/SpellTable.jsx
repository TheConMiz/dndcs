import React from 'react';

import { Button } from '@material-ui/core';

import MaterialTable from 'material-table';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dbPath: state.app.dbPath,
        classes: state.character.classes
    };
}

class SpellTable extends React.Component {
    constructor() {
        super();

        this.state = {
            spellList: []
        };
    }

    generateSpellTable = () => {
        const knex = window.require('knex')({
            client: "sqlite3",
            connection: {
                filename: this.props.dbPath
            },
            useNullAsDefault: true,
            debug: true
        });

        let temp = []

        this.props.classes.map(item => {
            temp.push(item.classValue.value.classID);
        })

        console.log(temp);

        let dbQuery =
            knex({
                spells: "Spells"
            })
                
                .join("SpellsToClass", "spells.index", "=", "SpellsToClass.spellID")
                .join("Classes", "Classes.index", "=", "SpellsToClass.classID")
                .whereIn("SpellsToClass.classID", temp)
                .select({
                    index: "spells.index",
                    name: "spells.name",
                    level: "spells.level"

                })

                .distinct()
                
                .orderBy("spells.name", "asc")
                .orderBy("spells.level", "asc")
        
        dbQuery.then((rows) => {
            console.log(rows);
            this.setState({ spellList: rows });
        });

    }

    render() {
        return (
            <div>
                <MaterialTable
                    columns={[
                        { title: "Name", field: "name" },
                        
                    ]}
                    data={
                        this.state.spellList.length === 0 ? [] : 
                            this.state.spellList.map((item, index) => {
                                return {
                                    name: item.name
                                }
                            })
                    }
                />
                
                <Button onClick={this.generateSpellTable}>
                    Database Test
                </Button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SpellTable);