import React, { useState } from 'react'


import { Card, Row, Col, Upload, Icon, Cascader, Table, Input, Button, InputNumber, Drawer, Collapse } from 'antd'

import { NameInput } from './CharacterProfile/NameInput'

// import { ClassSelection } from './CharacterProfile/ClassSelection'

import { XPMonitor } from './CharacterProfile/XPMonitor'


export const CharacterProfile = () => {

    return (
        <Card>
            {/* <Upload
                name="avatar"
                listType="picture-card"
            >
                {    
                    <div>
                        <Icon type='plus'/>
                        <div className="ant-upload-text">Upload</div>
                    </div>
                }
            </Upload> */}

            <XPMonitor/>

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

            {/* <ClassSelection/> */}

        </Card>
    )
}
