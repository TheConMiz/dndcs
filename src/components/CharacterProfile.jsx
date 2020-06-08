import React, { useState } from 'react'


import { Card, Row, Col } from 'antd'

import { NameInput } from './CharacterProfile/NameInput'



export const CharacterProfile = () => {

    return (
        <Card>

            <Row>
                <Col>
                    
                </Col>

                <Col>
                    <NameInput />

                </Col>
            </Row>

            

            
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
