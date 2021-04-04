import React, { Fragment } from 'react'

import { Modal } from "antd"


const SelectionPage = (props) => {
    return (
        <Fragment>
            <Modal
                centered
                closable
                mask={true}
                

                visible={props.visible}
                onOk={props.onOk}
            >
                <p>
                    This is a test
                </p>
            </Modal>
        </Fragment>
    )
}

export default SelectionPage
