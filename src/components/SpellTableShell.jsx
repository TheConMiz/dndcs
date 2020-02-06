import React from 'react'

import { Paper, TableContainer, Table, TableHead, TableBody } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

// import { VariableSizeList } from 'react-window'

import MemoizedSpellTableRowShell from "./SpellTable/SpellTableRowShell"
import SpellTableToolbarShell from "./SpellTable/SpellTableToolbarShell"
import SpellTableColumns from './SpellTable/SpellTableColumns'

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: '500px',
        width: '60vw',

    },
    tablePaper: {
        minHeight: '500px',
        overflowY: 'scroll',
        height: "60vh"
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
                    <SpellTableColumns/>
                </TableHead>

                <TableBody>
                    {/* <VariableSizeList>
                    </VariableSizeList> */}

                        <MemoizedSpellTableRowShell />

                    
                </TableBody>

            </Table>
        </TableContainer>
    )
}

export default SpellTableShell