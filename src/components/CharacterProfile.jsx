import React, { useState } from 'react'

import { Card, Row, Col } from 'antd'

import { NameInput } from './CharacterProfile'

export const CharacterProfile = () => {

    return (
        <Card>

            <Row>

                <Col>
                    <NameInput />
                </Col>
            </Row>

        </Card>
    )
}
