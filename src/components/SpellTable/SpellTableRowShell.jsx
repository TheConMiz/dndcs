import React, { memo } from 'react'

import { useSelector } from 'react-redux'

import SpellTableRow from './SpellTableRow'

const SpellTableRowShell = () => {
    
    const spells = useSelector(state => state.app.spells)
    
    return (
        spells.map((item) => {
            return (
                <SpellTableRow
                    spellData={item}
                />
            )
        })
    )
}

const MemoizedSpellTableRowShell = memo(SpellTableRowShell)

export default MemoizedSpellTableRowShell