/**
 * Top-Level SpellTable
 * - Parent to spell selection component
 */

/**
 * Components from 3rd-party Libraries
 */
import React, { Fragment } from 'react'
import { Table, Card } from 'antd'
import { useSelector } from 'react-redux'

/**
 * Self-generated components
 */
import { Generator } from './SpellTable/Generator'

/**
 * Self-generated utility functions
 */
import { getSaveFilters } from './../functions/spellUtility'
import { getSpellTableColumns } from './SpellTable/Columns'

export const SpellTable = () => {

    /**
     * Access spells and ability scores from Redux store
     */
    const spells = useSelector(state => state.character.knownSpells)
    const abilityScores = useSelector(state => state.rules.abilityScores)

    /**
     * Access columns from 
     */
    const columns = getSpellTableColumns(abilityScores, getSaveFilters)
        
    return (
        <Fragment>
            <Card
                title="Spell Sheet"
                style={{width: '100%', minWidth: '700px'}}
                extra={
                    <Fragment>
                        <Generator/>
                    </Fragment>
                }
            >               
                <Table
                    style={{ width: '100%', overflow: 'auto' }}
                    size="middle"
                    dataSource={spells}
                    columns={columns}
                    pagination={false}
                    scroll={{y: 500}}
                />
            </Card>
        </Fragment>
    )
}