import React, { useState } from 'react'


import { Card, Row, Col, Upload, Icon, Cascader, Table, Input, Button, InputNumber, Drawer, Collapse } from 'antd'

import { NameInput } from './CharacterProfile/NameInput'

export const CharacterProfile = () => {

    const [openClassModal, setOpenClassModal] = useState(false)

    return (
        <Card
            
        >
            <Upload
                name="avatar"
                listType="picture-card"
            >
                {    
                    <div>
                        <Icon type='plus'/>
                        <div className="ant-upload-text">Upload</div>
                    </div>
                }
            </Upload>

            <NameInput />
            
            <Cascader
                allowClear={true}
                placeholder="Character Race"
            />

            <Cascader
                allowClear={true}
                showSearch={true}
                placeholder="Character Background"
            />

            <Input.Group>
                <InputNumber
                    placeholder="XP"
                />

            </Input.Group>

            <Button
                type="primary"
                onClick={() => {
                    setOpenClassModal(true)
                }}
            >
                Select Class(es)
            </Button>

            <Table
                bordered
                size="small"
                columns={[
                    { title: "Level", dataIndex: "classLevel" },
                    { title: "Class", dataIndex: "class" },
                    { title: "Sub-Class", dataIndex: "subclass" }
                ]}
                size="small"
            >

            </Table>
            
            <Drawer
                title="To-Do"
                placement="left"
                visible={openClassModal}
                closable={true}

            >
                <Collapse>
                    
                    <Collapse.Panel
                        header="Select Class(es)"
                        key={1}
                    >
                        <Card>
                            <Cascader
                                placeholder="Select a Class"
                            />
                        </Card>
                    </Collapse.Panel>

                    <Collapse.Panel
                        header="Select Race"
                        key={2}
                    >
                    
                    </Collapse.Panel>
                    
                </Collapse>
   
            </Drawer>



        </Card>
    )
}
