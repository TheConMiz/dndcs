import React from 'react'

import { Table, TableHead, TableCell, TableBody } from '@material-ui/core';

import { useSelector } from 'react-redux';

// const getSpells = () => {
//     // Establish connection with database
//     const knex = window.require('knex')({
//         client: "sqlite3",
//         connection: {
//             filename: this.props.dbPath
//         },
//         useNullAsDefault: true,
//         debug: true
//     });

//     let dbQuery = knex({
//         sp: "00-SPELLS"
//     })
//         .select({
//             spellName: "sp.name",
//             spellID: "sp.index",
//             desc: "sp.desc",
//             level: "sp.level"
//         })
//         .orderBy(spellName, "asc");

//     dbQuery.then((rows) => {
//         // this.setState({ classList: rows });

//     });
// }

function SpellTable() {



    let columns = ["Name", "Description", "Save", "School", "Time", "Range", "Components", "Duration", "Source"];

    return (

        <Table size="small">
            <TableHead>
                {
                    columns.map(item => {
                        return (
                            <TableCell padding="checkbox" align="left">{item}</TableCell>
                        );
                    })
                }
            </TableHead>

            
            <TableBody>

            </TableBody>


        </Table>
    )
}

export default SpellTable;