import React, { useState } from 'react'


import { Card, Row, Col, Upload, Icon, Cascader, Table, Input, Button, InputNumber, Drawer, Collapse } from 'antd'

import { NameInput } from './CharacterProfile/NameInput'

import { ClassSelection } from './CharacterProfile/ClassSelection'

export const CharacterProfile = () => {

    return (
        <Card>
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
            
            {/* <Cascader
                allowClear={true}
                placeholder="Character Race"
            />

            <Cascader
                allowClear={true}
                showSearch={true}
                placeholder="Character Background"
            /> */}

            {/* <Input.Group>
                <InputNumber
                    placeholder="XP"
                />

            </Input.Group> */}

            {/* <Table
                bordered
                size="small"
                columns={[
                    { title: "Level", dataIndex: "classLevel" },
                    { title: "Class", dataIndex: "class" },
                    { title: "Sub-Class", dataIndex: "subclass" }
                ]}
                size="small"
            >

            </Table> */}

            <ClassSelection/>

        </Card>
    )
}
