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

        </Card>
    )
}
