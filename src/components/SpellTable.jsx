import React from 'react'

import { Table, TableHead, TableCell, TableBody, Checkbox, TableRow } from '@material-ui/core';

function SpellTable() {



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