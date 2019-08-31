import React from 'react';

import { Table, TableHead, TableCell, TableRow, Checkbox, TableBody, Tabs, Tab, Paper } from '@material-ui/core';

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

    componentDidMount = () => {
        const knex = window.require('knex')({
            client: "sqlite3",
            connection: {
                filename: this.props.dbPath
            },
            useNullAsDefault: true,
            debug: true
        });

        let dbQuery =
            knex({
                spells: "Spells"
            })
            
                .select({
                    name: "spells.name",
                    index: "spells.index",
                    desc: "spells.desc/0"
                })
            
                .orderBy("spells.name", "asc");
        
        dbQuery.then((rows) => {
            this.setState({ spellList: rows });
        });

    }

    render() {
        return (

            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell
                            align="center"
                            padding="checkbox"
                        >
                            Prep.
                </TableCell>
                        <TableCell
                            align="center"
                            padding="checkbox"
                        >
                            Spell
                </TableCell>
                        <TableCell
                            align="center"
                            padding="checkbox"
                        >
                            Description
                </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {this.state.spellList.length === 0 ? "" : this.state.spellList.map((item, index) => {
                        return (
                            <TableRow>
                                <TableCell
                                    align="center"
                                    padding="checkbox"
                                >
                                    <Checkbox disableFocusRipple />
                                </TableCell>
                                <TableCell
                                    align="center"
                                    padding="checkbox"
                                >
                                    {item.name}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    padding="checkbox"
                                >
                                    {item.desc}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>            
        );
    }
}

export default connect(mapStateToProps)(SpellTable);