import React, { Fragment, useState, useEffect } from 'react'

import { Table } from 'antd'

import { useSelector, useDispatch } from 'react-redux'

import { sortBy } from 'lodash'

const prepareClasses = (classList) => {

    let tempOptions = []

    classList.map(item => {
        let tempClass = Object.assign({}, {}, {
            desc: item.desc,
            value: item.id,
            label: item.name
        })

        tempOptions.push(tempClass)
    })

    let finalOptions = sortBy(tempOptions, ["value"])
    
    return finalOptions
}

/**
 * TODO: Implement filter
 */
const filter = (inputValue, path) => {
    return "Bar";
}


export const ClassSelection = () => {

    const dispatch = useDispatch()

    // const [openMenu, setOpenMenu] = useState(false)
    
    let classList = useSelector(state => state.app.classes)

    let options = prepareClasses(classList)

    return (
        <Fragment>
            <Table>
                
            </Table>
            {/* <Button
                type="primary"
                onClick={() => setOpenMenu(true)}
            >
                Select Class(es)
            </Button>

            <Drawer
                title="Select Class(es)"
                placement="right"
                visible={openMenu}
                closable={true}
                onClose={() => setOpenMenu(false)}
                keyboard={true}
                width={400}
            >
                <Cascader
                    options={options}
                    placeholder="Select a Class"
                    showSearch={{ filter }}
                />
   
            </Drawer> */}
        </Fragment>
        
    )
}
