/**
 * Spell Table Generation Component
 * - Allow user to choose spells to add to table
 * TODO: Add all spells
 * TODO: Filter based on class, level, max. number of spells known, etc.
 */

/**
 * Components from 3rd-party Libraries
 */
import React, { Fragment, useState } from 'react'
import { Button, Modal, Select, Typography, Dropdown, Menu, Icon } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

/**
 * Self-generated utility functions
 */
import { getSpellLevels, sortSpells } from '../../functions/spellUtility'

/**
 * Redux actions
 */
import { UPDATE_CHAR_KNOWN_SPELLS } from '../../actions/characterActions'

const Options = () => (
    <Menu
        onSelect={() => {
            console.log("l")
        }}
    >
        <Menu.Item key="1">Select from ALL Spells</Menu.Item>
        <Menu.Item key="2">Dump 'em all</Menu.Item>
    </Menu>
)


export const Generator = () => {

    /**
     * Keyword for dispatch to Redux store
     */
    const dispatch = useDispatch()
    
    /**
     * Access known spells and complete spell list in Redux store
     */
    const knownSpells = useSelector(state => state.character.knownSpells)
    const spells = useSelector(state => state.app.spells)
    
    /**
     * Extract spell levels available in database 
     */
    let levelList = getSpellLevels(spells)

    /**
     * Local state for temporarily storing user's spell selections, and visibility of Modal component 
     */
    const [tempKnownSpells, setTempKnownSpells] = useState([])
    const [visible, setvisible] = useState(false)

    return (
        <Fragment>

            <Dropdown overlay={Options}>
                <Button
                    type={knownSpells.length === 0 ? "default" : "danger"}
                    onClick={() => {
                        setvisible(true)
                    }}
                >
                    {knownSpells.length === 0 ? "Generate" : "Re-Generate"}

                    <Icon type="down"/>

                </Button>
            </Dropdown>

            <Modal
                closable={false}
                destroyOnClose={true}
                centered={true}
                mask={true}
                maskClosable={false}
                visible={visible}
                onCancel={() => {
                    /**
                     * If user hasn't already selected spells, it is safe to remove the temporary array of user-selected spells
                     */
                    if (knownSpells.length === 0) {
                        setTempKnownSpells([])                        
                    }

                    else {
                        let cachedKnownSpells = knownSpells.slice()
                        setTempKnownSpells(cachedKnownSpells)
                    }
                    /**
                     * The Modal is closed
                     */
                    setvisible(false)
                }}

                onOk={() => {
                    /**
                     * Sort the spells in alphabetical order
                     */
                    let sortedSpells = sortSpells(tempKnownSpells)

                    /**
                     * Dispatch user-selected spells to the Redux Store
                     */
                    dispatch({ type: UPDATE_CHAR_KNOWN_SPELLS, payload: sortedSpells })
                    /**
                     * Close the Modal
                     */
                    setvisible(false)
                }}
                
                title="Generate Spell Table"
            >
                {
                    levelList.map((level) => {
                        return (
                            <Select
                                mode="multiple"
                                style={{ width: '100%', overflowX: 'auto' }}
                                showArrow={true}

                                /**
                                 * On re-opening the Modal, this line ensures that previously-selected spells remain selected
                                 */
                                defaultValue={tempKnownSpells.length === 0 ? tempKnownSpells : tempKnownSpells.filter(spell => spell.level === level.key).map(spell => spell.name)}
                                
                                // TODO: Custom spell searching
                                // filterOption={(input, option) => {
                                //     console.log(option.props.data)
                                //     return (
                                //         option.props.data.name.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                //     )
                                // }}
                                // optionFilterProp="props.data.name"
                                
                                /**
                                 * Level 0 spells are called Cantrips, and this line handles generation of placeholder text in this case 
                                 */
                                placeholder={
                                    level.key === 0 ? "Cantrips" : "Level " + level.key + " Spell(s)"
                                }
                                
                                /**
                                 * Selected spells are stored in a local state variable
                                 */
                                onSelect={(item, instance) => {
                                    let finalKnownSpells = tempKnownSpells.slice()
                                    
                                    finalKnownSpells.push(instance.props.data)
                                    
                                    setTempKnownSpells(finalKnownSpells)
                                }}
                                /**
                                 * De-Selected spells are removed from the local state variable
                                 */
                                onDeselect={(item, instance) => {
                                    let finalKnownSpells = tempKnownSpells.slice().filter(spell => spell.id !== instance.props.data.id)
                                    
                                    setTempKnownSpells(finalKnownSpells)
                                }}

                            >
                                {
                                    /**
                                     * Ensures that the options available to each Selection component correspond to the required spell level
                                     */
                                }
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
