import React, {useState} from 'react'

import { Table, TableHead, TableCell, TableBody, Checkbox, TableRow } from '@material-ui/core';

import { useSelector } from 'react-redux';


function SpellTable() {

    let columns = ["Name", "Description", "Material", "Range", "Casting Time", "Save", "School", "Components", "Duration", "Source"];
    
    const spells = useSelector(state => state.app.spells);

    return (

        <Table size="small">
            <TableHead>
                <TableRow>

                    <TableCell padding="checkbox" align="left">

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

                {
                    spells.map((item) => {
                    return (

                        <TableRow
                            hover={true}
                        >

                            <TableCell padding="checkbox" align="left">
                                <Checkbox
                                    disableFocusRipple
                                />
                            </TableCell>

                            <TableCell padding="checkbox" align="left">
                                {item.name}
                            </TableCell>

                            <TableCell padding="checkbox" align="left">
                                {item.shortDesc}
                            </TableCell>

                            <TableCell padding="checkbox" align="left">
                                {item.material}
                            </TableCell>

                            <TableCell padding="checkbox" align="left">
                                {item.range}
                            </TableCell>

                            <TableCell padding="checkbox" align="left">
                                {item.castingTime}
                            </TableCell>

                        </TableRow>

                    );
                })}

            </TableBody>


        </Table>
    )
}

export default SpellTable;