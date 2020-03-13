import React, { Fragment, useState } from 'react'

import { Button, Modal } from 'antd'

import { useSelector, useDispatch } from 'react-redux'


export const GenerateSpells = () => {

    const [visible, setvisible] = useState(false)

    const maxKnownSpells = useSelector(state => state.character.maxKnownSpells)

    return (
        <Fragment>
            <Button
                type="danger"
                onClick={() => {
                    setvisible(true)
                }}
            >
                Generate
            </Button>

            <Modal
                closable={false}
                destroyOnClose={true}
                centered={true}
                keyboard={true}
                mask={true}
                maskClosable={true}
                visible={visible}
                onCancel={() => {
                    setvisible(false)
                }}

                onOk={() => {
                    setvisible(false)
                }}
                title="Generate Spell Table"
            >

            </Modal>
        </Fragment>
        
    )
}
