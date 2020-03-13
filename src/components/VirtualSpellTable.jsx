import React, { Fragment } from 'react'

import { Table, Column } from 'react-virtualized'

import { useSelector, useDispatch } from 'react-redux'


export const VirtualSpellTable = () => {

    const spells = useSelector(state => state.app.spells)

    const columns = (
        <Column
            dataKey={spells.name}
            width={200}
            label="Test"
            columnData={spells}
        />
    )


    return (
        <Fragment>

            <Table
                headerHeight={200}
                height="100%"
                rowCount={spells.length}
                rowHeight={200}
                rowGetter={() => {
                    return 1
                }}
                children={columns}
            />
            
        </Fragment>
    )
}
