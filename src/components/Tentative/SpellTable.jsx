/**
 * Top-Level SpellTable
 * - Parent to spell selection component
 */

/**
 * Components from 3rd-party Libraries
 */
import React, { Fragment } from 'react'
import { Table, Card, Button } from 'antd'
// import { useSelector } from 'react-redux'

/**
 * Self-generated components
 */
// import { Generator } from './Old/SpellTable/Generator'

/**
 * Self-generated utility functions
 */
// import { getSaveFilters, getMagicSchoolFilters } from './../functions/spellUtility'
// import { getSpellTableColumns } from './Old/SpellTable/Columns'

export const SpellTable = () => {

    /**
     * Access spells and ability scores from Redux store
     */
    // const spells = useSelector(state => state.character.knownSpells)

    // const rules = useSelector(state => state.rules)


    /**
     * Access columns from 
     */
    // const columns = getSpellTableColumns(getSaveFilters, getMagicSchoolFilters, rules)
        
    // return (
    //     <Fragment>

    //         <Card
    //             title="Spell Sheet"
    //             style={{width: '100%', minWidth: '700px'}}
    //             extra={
    //                 <Fragment>

    //                     {/* <Generator/> */}

    //                     <Button>
    //                         Generate
    //                     </Button>
                    
    //                 </Fragment>
    //             }
    //         >               
    //             <Table
    //                 style={{ width: '100%', overflow: 'auto', minWidth: "700px" }}
    //                 size="middle"
    //                 // dataSource={spells}
    //                 // columns={columns}
    //                 pagination={false}
    //                 scroll={{y: 500}}
    //             />
    //         </Card>
    //     </Fragment>
    // )

    return (
        <Table
            style={{ width: '100%', overflow: 'auto', minWidth: "700px" }}
            size="middle"
            // dataSource={spells}
            // columns={columns}
            pagination={false}
            scroll={{y: 500}}
        />
    );
}