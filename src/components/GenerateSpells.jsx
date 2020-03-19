import React, { Fragment, useState } from 'react'

import { Button, Modal, Select, Typography } from 'antd'

import { useSelector, useDispatch } from 'react-redux'

import { getSpellLevels, sortSpells, getDefaultSpells } from './../functions/spellUtility'

import { UPDATE_CHAR_KNOWN_SPELLS } from './../actions/characterActions'

export const GenerateSpells = () => {

    const [visible, setvisible] = useState(false)

    // const maxKnownSpells = useSelector(state => state.character.maxKnownSpells)

    const knownSpells = useSelector(state => state.character.knownSpells)

    const spells = useSelector(state => state.app.spells)

    let levelList = getSpellLevels(spells)

    const [tempKnownSpells, setTempKnownSpells] = useState([])

    const dispatch = useDispatch()

    return (
        <Fragment>
            <Button
                type={knownSpells.length === 0 ? "primary" : "danger"}
                
                onClick={() => {
                    setvisible(true)
                }}
            >
                {knownSpells.length === 0 ? "Generate" : "Re-Generate"}
            </Button>

            <Modal
                closable={false}
                destroyOnClose={true}
                centered={true}
                mask={true}
                maskClosable={false}
                visible={visible}
                onCancel={() => {
                    if (knownSpells.length === 0) {
                        setTempKnownSpells([])                        
                    }

                    else {
                        let cachedKnownSpells = knownSpells.slice()
                        setTempKnownSpells(cachedKnownSpells)
                    }
                    setvisible(false)
                }}

                onOk={() => {
                    let sortedSpells = sortSpells(tempKnownSpells)

                    dispatch({ type: UPDATE_CHAR_KNOWN_SPELLS, payload: sortedSpells })

                    setvisible(false)
                }}
                
                title="Generate Spell Table"
            >
                {
                    levelList.map((level) => {
                        return (
                            <Select
                                mode="multiple"
                                defaultValue={tempKnownSpells.length === 0 ? tempKnownSpells : tempKnownSpells.filter(spell => spell.level === level.key).map(spell => spell.name)}
                                // TODO: Custom spell searching
                                // filterOption={(input, option) => {
                                //     console.log(option.props.data)
                                //     return (
                                //         option.props.data.name.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                //     )
                                // }}
                                // optionFilterProp="props.data.name"
                                
                                showArrow={true}

                                placeholder={
                                    level.key === 0 ? "Cantrips" : "Level " + level.key + " Spell(s)"
                                }
                                
                                style={{ width: '100%', overflowX: 'auto' }}
                                onSelect={(item, instance) => {
                                    let finalKnownSpells = tempKnownSpells.slice()
                                    
                                    finalKnownSpells.push(instance.props.data)
                                    
                                    setTempKnownSpells(finalKnownSpells)
                                }}

                                onDeselect={(item, instance) => {
                                    let finalKnownSpells = tempKnownSpells.slice().filter(spell => spell.id !== instance.props.data.id)
                                    
                                    setTempKnownSpells(finalKnownSpells)
                                }}
                            >
                                {spells.filter(spell => spell.level === level.key).map(spell => {
                                    return (
                                        <Select.Option
                                            value={spell.name}
                                            label={spell.name}
                                            key={spell.id}
                                            data={spell}
                                        >
                                            <Typography>
                                                {spell.name}
                                            </Typography>
                                        </Select.Option>
                                    )
                                })}
                            </Select>     
                        )
                    })
                }
            </Modal>
        </Fragment>
        
    )
}
