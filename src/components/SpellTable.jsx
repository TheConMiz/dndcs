import React, { useState, Fragment } from 'react'
import { Table, Radio, Typography, Card, Button, AutoComplete, Popover } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { getSaveFilters } from './../functions/spellUtility'

import { SpellDescription } from './SpellDescription'

import { GenerateSpells } from './GenerateSpells'

export const SpellTable = () => {

    const spells = useSelector(state => state.character.knownSpells)

    const dispatch = useDispatch()

    const abilityScores = useSelector(state => state.rules.abilityScores)

    /**
     * TODO: FIX DESCRIPTION POPUP SHADOW
     */
    const columns = [
        {
            dataIndex: "name",
            title: "Name",
            key: "id",
            width: '10%',
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['descend'],
            render: (content, item) => {
                return (
                    <Typography.Text
                        strong={true}
                    >
                        {
                            item.name
                        }
                    </Typography.Text>
                )
            }
        },
        {
            dataIndex: "shortDesc",
            title: "Description",
            width: '35%',
            render: (content, item) => {
                return (
                    <Popover
                        trigger="hover"
                        arrowPointAtCenter={true}
                        placement="right"
                        overlayStyle={{
                            maxWidth: '400px',
                            maxHeight: '250px',
                            overflowY: 'auto',
                            // boxShadow: "0px 0px 26px 8px rgba(148,148,148,1)"
                        }}
                        // title="Full Description"
                        content={
                            <SpellDescription
                                fullDesc={item.fullDesc}
                                altName={item.altName}
                                highLevelDesc={item.highLevelDesc}
                            />
                        }
                    >
                        <Typography.Text>
                            {content}
                        </Typography.Text>
                    </Popover>
                    
                )
            }
        },
        {
            dataIndex: "range",
            title: "Range",
            width: '7%',
        },
        {
            dataIndex: "castingTime",
            title: "Time",
            width: '8%',
        },
        {
            dataIndex: "concentration",
            title: "Conc.",
            width: '8%',
            render: (content, item) => {
                return (
                    <Checkbox
                        checked={item.concentration === 1 ? true : false}
                        disabled={item.concentration === 0 ? true : false}
                    />
                )
            },
            filters: [
                {
                    text: "Non-Concentration",
                    value: 0
                },
                {
                    text: "Concentration",
                    value: 1
                }
            ],
            onFilter: (content, item) => item.concentration === content,
            align: 'center',
        },
        {
            dataIndex: "ritual",
            title: "Ritual",
            width: '8%',
            render: (content, item) => {
                return (
                    <Checkbox
                        checked={item.ritual === 1 ? true : false}
                        disabled={item.ritual === 0 ? true : false}
                    />
                )
            },
            filters: [
                {
                    text: "Non-Ritual",
                    value: 0
                },
                {
                    text: "Ritual",
                    value: 1
                }
            ],
            onFilter: (content, item) => item.ritual === content,
            align: 'center'
        },

        {
            dataIndex: "save",
            title: "Save",
            width: '8%',
            render: (content, item) => {
                return (
                    <Typography.Text
                        type="warning"
                    >
                        {
                            abilityScores.filter(aScore => aScore.id === item.save).length !== 0 ?
                                abilityScores.filter(aScore => aScore.id === item.save)[0].abbr
                            :
                                ""
                        }
                    </Typography.Text>
                )
            },
            align: 'center',
            filters: getSaveFilters(abilityScores),
            onFilter: (content, item) => item.save === content 
        },
        {
            dataIndex: "components",
            title: "Comp.",
            width: '6%',
        },
        {
            dataIndex: "duration",
            title: "Duration",
            width: '10%',
        },
    ]

    /**
     * TODO: Spell Materials
     * TODO: Alt. Spell Names
     * TODO: Spell Levelling ==> NESTED TABLES
     */
        
    return (
        <Fragment>
            <Card
                title="Spell Sheet"
                style={{width: '100%', minWidth: '700px'}}
                // loading={spells.length === 0 ? true : false}
                extra={
                    <Fragment>

                        <GenerateSpells/>

                    </Fragment>
                    
                }
            >
                {/* <Card
                    style={{ width: '50px', height: '50px' }}
                >
                    <Radio />
                </Card> */}
               
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