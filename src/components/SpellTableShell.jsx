import React, {useState} from 'react'
import { Table, Checkbox, Typography, Popover, Card, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_CHAR_PREPARED_SPELLS, UPDATE_CHAR_MAX_PREPARED_SPELLS } from './../actions/characterActions'

import { some } from 'lodash'

import { getSpellLevels } from './../functions/spellUtility'


export const SpellTableShell = () => {

    const spells = useSelector(state => state.app.spells)

    const dispatch = useDispatch()

    let levelList = getSpellLevels(spells)

    const abilityScores = useSelector(state => state.rules.abilityScores)
    
    const preparedSpells = useSelector(state => state.character.preparedSpells)
    
    const maxPreparedSpells = useSelector(state => state.character.maxPreparedSpells)

    const [activeTab, setActiveTab] = useState(0)
    
    const columns = [
        {
            dataIndex: "name",
            title: "Name",
            key: "id",
            sorter: (a, b) => a.name.lo+leCompare(b.name),
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
                        title="Full Description"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est ligula, convallis a ante at, cursus tempus sem. Nullam lacinia porta ligula, sit amet vestibulum risus interdum cursus. Mauris et porttitor lectus."
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
                            typeof (abilityScores.find(i => item.save === i.index)) === "undefined" ?
                                ""
                                :
                                abilityScores.find(i => item.save === i.index).abbr
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
                tabList={levelList}
                activeTabKey={activeTab.toString()}
                loading={spells.length === 0 ? true : false}
                onTabChange={key => {
                    setActiveTab(key)
                }}
                extra={
                    <Button
                        type="danger"
                        disabled={true}
                    >
                        Generate
                    </Button>
                }
            >
                <Table
                    style={{ width: '100%', height: '75vh', overflow: 'auto' }}
                    size="middle"
                    dataSource={spells.filter(spell => spell.level === Number(activeTab))}
                    columns={columns}
                    pagination={false}
                    // rowSelection={{
                    //     onChange: (selectedRowKeys, selectedRows) => {
                    //         console.log(selectedRowKeys, selectedRows)
                    //         dispatch({ type: UPDATE_CHAR_PREPARED_SPELLS, payload: selectedRows.length === 0 ? [] : selectedRows })
                    //     },
                    //     getCheckboxProps: record => ({
                    //         checked: some(preparedSpells, record),
                    //         name: record.name
                    //     })
                    // }}
                />
            </Card>
            
        </div>

    )
}