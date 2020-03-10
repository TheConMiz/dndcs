import React, { useState, Fragment } from 'react'
import { Table, Checkbox, Typography, Card, Button, AutoComplete, Popover, Collapse } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { getSpellLevels } from './../functions/spellUtility'
import { SpellDescription } from './SpellDescription'


export const SpellTable = () => {

    const spells = useSelector(state => state.app.spells)

    const dispatch = useDispatch()

    let levelList = getSpellLevels(spells)

    const abilityScores = useSelector(state => state.rules.abilityScores)

    const [activeTab, setActiveTab] = useState(0)

    /**
     * TODO: FIX DESCRIPTION POPUP SHADOW
     */
    const columns = [
        {
            dataIndex: "name",
            title: "Name",
            key: "id",
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
        },
        {
            dataIndex: "castingTime",
            title: "Time",
        },
        {
            dataIndex: "concentration",
            title: "Conc.",
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
            render: (content, item) => {
                return (
                    <Typography.Text
                        type="warning"
                    >
                        {
                            item.save
                        }
                    </Typography.Text>
                )
            },
            align: 'center'
            
        },
        {
            dataIndex: "components",
            title: "Components",
        },
        {
            dataIndex: "duration",
            title: "Duration",
        },
    ]
        
    return (
        <div>
            <Card
                title="Spell Sheet"
                loading={spells.length === 0 ? true : false}
                extra={
                    <Fragment>
                        <AutoComplete
                            style={{ width: 200 }}
                            placeholder="Input tags here"
                        >

                        </AutoComplete>
                        <Button
                            type="danger"
                            disabled={true}
                        >
                            Generate
                        </Button>

                    </Fragment>
                    
                }
            >
                <Collapse
                    defaultActiveKey={['0']}
                    bordered={false}
                    destroyInactivePanel={true}
                >
                    {
                        levelList.length !== 0 ? 
                        levelList.map((level) => {
                            return (
                                <Collapse.Panel
                                    key={level.key.toString()}
                                    disabled={spells.filter(spell => spell.level === level.key).length === 0}
                                    header={level.key === 0 ? "Cantrips" : "Level " + level.key}
                                >
                                    <Table
                                        style={{ width: '100%', maxHeight: '50vh', overflow: 'auto' }}
                                        size="middle"
                                        dataSource={spells.filter(spell => spell.level === level.key)}
                                        columns={columns}
                                        pagination={false}
                                    />
                                </Collapse.Panel>
                            )
                        })
                            :
                        <Fragment/>
                    }
                </Collapse>
            </Card>
            
        </div>

    )
}