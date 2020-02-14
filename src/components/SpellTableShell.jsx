import React from 'react'

import { Paper, TableContainer, Table, TableHead, TableBody } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Skeleton } from '@material-ui/lab'
import MemoizedSpellTableRowShell from "./SpellTable/SpellTableRowShell"
import SpellTableToolbarShell from "./SpellTable/SpellTableToolbarShell"
import SpellTableColumns from './SpellTable/SpellTableColumns'

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: '60%',
        width: '80%',
    },
    tablePaper: {
        minHeight: '40%',
        height: "60%",
        width: "80%",
        minWidth: '80%',
    }
}));

const SpellTableShell = () => {
    const classes = useStyles()

    return (

        <TableContainer
            className={classes.tablePaper}
            component={Paper}
        >

            <SpellTableToolbarShell/>
            
            <Table
                size="small"
                className={classes.table}
                stickyHeader
            >

                <TableHead>
                    {/* <SpellTableColumns/> */}
                </TableHead>

                <TableBody>
                    {/* <MemoizedSpellTableRowShell /> */}

                </TableBody>

            </Table>
        </TableContainer>
    )
}

export default SpellTableShell