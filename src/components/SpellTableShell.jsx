import React, {useState} from 'react'
import { Table, Checkbox, Typography, Popover, Tabs, Card, Button } from 'antd'
import { useSelector } from 'react-redux'

const SpellTableShell = () => {

    const spells = useSelector(state => state.app.spells)

    const abilityScores = useSelector(state => state.rules.abilityScores)

    const [activeTab, setActiveTab] = useState(0)
    
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
    
    /**TODO: FIX HARDCODED SPELL LEVELS */
    const levels = [
        {
            key: 0,
            tab: "Cantrips"
        },
        {
            key: 1,
            tab: "Level 1"
        },
        {
            key: 2,
            tab: "Level 2"
        },
        {
            key: 3,
            tab: "Level 3"
        },
        {
            key: 4,
            tab: "Level 4"
        },
        {
            key: 5,
            tab: "Level 5"
        },
        {
            key: 6,
            tab: "Level 6"
        },
        {
            key: 7,
            tab: "Level 7"
        },
        {
            key: 8,
            tab: "Level 8"
        },
        {
            key: 9,
            tab: "Level 9"
        },
    ]

    
    return (        
        <div>
            <Card
                title="Spell Sheet"
                tabList={levels}
                activeTabKey={activeTab.toString()}
                onTabChange={key => {
                    setActiveTab(key)
                    console.log(key)
                }}

                // actions={[<Button>Generate</Button>]}

                extra={
                    <Button
                        type="danger"
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
                    rowSelection={{
                        onChange: (rowKeys, rows) => {
                            console.log(rowKeys, rows)
                        }
                    }}
                />
            </Card>
            
        </div>

    )
}

export default SpellTableShell