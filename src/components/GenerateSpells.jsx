import React, { Fragment, useState } from 'react'

import { Button, Modal, Select, Typography } from 'antd'

import { useSelector, useDispatch } from 'react-redux'

import { getSpellLevels } from './../functions/spellUtility'

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
                type="danger"
                onClick={() => {
                    setvisible(true)
                }}
            >
                Generate
            </Button>

            <Modal
                closable={false}
                destroyOnClose={true}
                centered={true}
                keyboard={true}
                mask={true}
                maskClosable={true}
                visible={visible}
                onCancel={() => {
                    setTempKnownSpells([])

                    setvisible(false)
                }}

                onOk={() => {
                    setvisible(false)

                    dispatch({type: UPDATE_CHAR_KNOWN_SPELLS, payload: tempKnownSpells})
                }}
                
                title="Generate Spell Table"
            >
                {
                    levelList.map((level) => {
                        return (
                            <Select
                                mode="multiple"
                                // allowClear={true}
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
