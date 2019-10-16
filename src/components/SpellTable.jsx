import React, {useState} from 'react'

import { Table, TableHead, TableCell, TableBody, Checkbox, TableRow } from '@material-ui/core';

import { useSelector } from 'react-redux';

function SpellTable() {

    const [spells, setSpells] = useState([]);

    const dbPath = useSelector(state => state.app.dbPath);

    const knex = window.require("knex")({
        client: "sqlite3",
        connection: {
            filename: dbPath
        },
        useNullAsDefault: true,
        debug: true
    });

    let temp = []

    let dbQuery = knex({
        sp: '00-SPELLS'
    })
        .select({
            name: "sp.name",
            index: "sp.index",
            desc: "sp.desc",
            level: "sp.level"
        })
        .orderBy("sp.level", "asc")
        .orderBy("sp.name", "asc");

    dbQuery.then((rows) => {
        // console.log(rows);
        temp = rows;
    });

    let columns = ["Name", "Description", "Save", "School", "Time", "Range", "Components", "Duration", "Source"];

    return (

        <Table size="small">
            <TableHead>
                <TableRow>

                    <TableCell padding="checkbox" align="left">
                        <Checkbox />
                    </TableCell>
                    
                    {
                        columns.map(item => {
                            return (
                                <TableCell padding="checkbox" align="left">{item}</TableCell>
                            );
                        })
                    }
                
                </TableRow>
                
            </TableHead>

            
            <TableBody>

            </TableBody>


        </Table>
    )
}

export default SpellTable;