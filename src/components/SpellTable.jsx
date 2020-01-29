import React, {useState, Fragment, memo} from 'react'
import { Paper, TableContainer, Table, TableHead, TableCell, TableBody, Checkbox, TableRow, Toolbar, TextField, IconButton, Button, Typography } from '@material-ui/core'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import SpellTableRow from './SpellTableRow'

import { makeStyles } from '@material-ui/styles'

import SettingsIcon from '@material-ui/icons/Settings'

import FilterListIcon from '@material-ui/icons/FilterListRounded'

import { UPDATE_SPELL_SEARCH } from './../actions/appActions'

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

const SpellTable = () => {
    
    const spells = useSelector(state => state.app.spells)

    const classes = useStyles()

    const dispatch = useDispatch()

    const columns = [
        {
            id: "name",
            name: "Name",
            minWidth: 170,
            align: 'left',
            selected: true
        },
        {
            id: "description",
            name: "Description",
            minWidth: '70%',
            align: 'left',
            selected: true
        },
        {
            id: "range",
            name: "Range",
            minWidth: 170,
            align: 'left',
            selected: true
        },
        {
            id: "castingTime",
            name: "Time",
            minWidth: 170,
            align: 'left',
            selected: true
        },
        {
            id: "concentration",
            name: "Conc.",
            minWidth: 170,
            align: 'center',
            selected: true
        },
        {
            id: "ritual",
            name: "Ritual",
            minWidth: 170,
            align: 'center',
            selected: true
        },
        {
            id: "save",
            name: "Save",
            minWidth: 170,
            align: 'left',
            selected: true
        },
        {
            id: "components",
            name: "Comp.",
            minWidth: 170,
            align: 'left',
            selected: true
        },
        {
            id: "duration",
            name: "Duration",
            minWidth: 170,
            align: 'left',
            selected: true
        },
        {
            id: "information",
            name: "",
            minWidth: 170,
            align: 'center',
            selected: true
        },
    ]

    return (

        <TableContainer
            className={classes.tablePaper}
            component={Paper}
            
        >
            <Toolbar>
                {/* <TextField
                    onChange={(event) => dispatch({ type: UPDATE_SPELL_SEARCH, payload: event.target.value })}
                    value={spellSearch}
                /> */}

                <IconButton
                    disableFocusRipple
                >
                    <SettingsIcon/>
                </IconButton>

                <IconButton
                    disableFocusRipple
                >
                    <FilterListIcon />
                </IconButton>

                <Button
                    color="secondary"
                    variant="outlined"
                >
                    <Typography>
                        Clear Selection
                    </Typography>
                </Button>
            </Toolbar>
            <Table
                size="small"
                className={classes.table}
                stickyHeader
            >
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox" align="left">
                            <Checkbox
                                disableFocusRipple
                                disabled
                            />
                        </TableCell>

                        {
                            columns.map(item => {
                                return (
                                    <TableCell
                                        padding="checkbox"
                                        key={item.id}
                                        align={item.align}
                                        style={{ width: item.minWidth }}
                                    >
                                        {item.name}
                                    </TableCell>
                                );
                            })
                        }

                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        spells.length < 1 ? <Fragment />
                            : 
                        spells.map((item) => {

                            return (
                                <SpellTableRow
                                    spellData={item}
                                />
                            );
                        })
                    }
                </TableBody>

            </Table>
        </TableContainer>
    )
}

const MemoizedSpellTable = memo(SpellTable)

// export default SpellTable;

export default MemoizedSpellTable