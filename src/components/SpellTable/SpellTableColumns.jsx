import React, { Fragment } from 'react'

import { TableCell, TableRow, Toolbar, Checkbox } from '@material-ui/core'

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
        minWidth: 150,
        align: 'left',
        selected: true
    },
    {
        id: "castingTime",
        name: "Time",
        minWidth: 180,
        align: 'left',
        selected: true
    },
    {
        id: "concentration",
        name: "Conc.",
        minWidth: 150,
        align: 'center',
        selected: true
    },
    {
        id: "ritual",
        name: "Ritual",
        minWidth: 150,
        align: 'center',
        selected: true
    },
    {
        id: "save",
        name: "Save",
        minWidth: 150,
        align: 'left',
        selected: true
    },
    {
        id: "components",
        name: "Comp.",
        minWidth: 150,
        align: 'left',
        selected: true
    },
    {
        id: "duration",
        name: "Duration",
        minWidth: 150,
        align: 'left',
        selected: true
    },
    {
        id: "information",
        name: "",
        minWidth: 100,
        align: 'center',
        selected: true
    },
]

const SpellTableColumns = () => {
    return (
        <TableRow>

            <TableCell
                padding="checkbox"
                align="left"
            >
                {/* <Checkbox
                    disableFocusRipple
                    disabled
                /> */}
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
    )
}

export default SpellTableColumns
