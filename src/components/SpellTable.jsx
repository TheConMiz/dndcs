import React, {useState} from 'react'

import { Table, TableHead, TableCell, TableBody, Checkbox, TableRow } from '@material-ui/core';

import { useSelector } from 'react-redux';

function SpellTable() {

    // let columns = ["Name", "Description", "Save", "School", "Time", "Range", "Components", "Duration", "Source"];
    let columns = ["Name", "Description", "School", "Time", "Range", "Components", "Duration", "Source"];
    // let columns = ["Name", "Level"];

    const spells = useSelector(state => state.app.spells);

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

                {spells.map((item) => {
                    return (

                        <TableRow>

                            <TableCell padding="checkbox" align="left">
                                <Checkbox/>
                            </TableCell>

                            <TableCell padding="checkbox" align="left">
                                {item.name}
                            </TableCell>

                            <TableCell padding="checkbox" align="left">
                                {item.level}
                            </TableCell>

                        </TableRow>


                    );
                })}

            </TableBody>


        </Table>
    )
}

export default SpellTable;