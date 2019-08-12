import React from 'react';

import { Dialog, Pane, Button, SelectMenu, IconButton, Text } from 'evergreen-ui';

import { NumericInput } from '@blueprintjs/core';

import update from 'immutability-helper';

export default class ClassSelectionMenu extends React.Component {
    constructor() {
        super();

        /*
        *   selectedClasses.classValue stores the SelectMenu component that is chosen
        *   selectedClasses.subClassValue stores the SelectMenu component that is chosen
        */
        this.state = {
            open: false,
            
            classSelected: false,
            
            classList: [],
            
            subclassList: [],

            selectedClasses: [
                {
                    classValue: null,
                    subClassValue: null,
                    level: 0
                }
            ],
        };
    }

    componentDidMount = () => {
        // Establish connection with database
        const knex = window.require('knex')({
            client: "sqlite3",
            connection: {
                filename: this.props.dbPath
            },
            useNullAsDefault: true,
            debug: true
        });

        let dbQuery = knex({
            cl: 'Classes'
        })
        .select({
            className: "cl.name",
            classID: "cl.index"
        })
        .orderBy("cl.name", "asc");
        
        dbQuery.then((rows) => {
            this.setState({ classList: rows });
        });

    }

    /**
     * Method for toggling Class Selection Menu into and out of view
     */
    toggleDialog = () => {
        this.setState({ open: true });
    }

    /**
     * Method for adding new class and subClass elements to the selectedClasses state array
     * Note the technique used to set state: more efficient than copying and replacing array
     */
    addClassArrayElement = () => {
        let newElement = {
            classValue: null,
            subClassValue: null,
            level: 0
        }
        
        this.setState(state => {
            const list = state.selectedClasses.concat(newElement);
            return {
                selectedClasses: list
            }
        })
    }

    clearClassArrayElements = (classCellID) => {
        let tempClassCell = update(this.state.selectedClasses[classCellID], {
            classValue: { $set: null },
            subClassValue: { $set: null },
            level: {$set: 0}
        })

        let tempList = this.state.selectedClasses;

        tempList[classCellID] = tempClassCell;

        this.setState({ selectedClasses: tempList });

        // console.log(this.state.selectedClasses[classCellID].classValue);
    }

    setClassValue = (item, classCellID) => {

            let tempClassCell = update(this.state.selectedClasses[classCellID], {
                classValue: { $set: item.value }
            });

            let tempList = this.state.selectedClasses;

            tempList[classCellID] = tempClassCell;

            this.setState({ selectedClasses: tempList });
        
    }

    setSubClassValue = () => {
        
    }

    setLevelValue = (levelValue, classCellID) => {
        let tempClassCell = update(this.state.selectedClasses[classCellID], {
            level: { $set: levelValue}
        })

        let tempList = this.state.selectedClasses;

        tempList[classCellID] = tempClassCell;

        this.setState({ selectedClasses: tempList });
    }

    confirmChoices = (classCellID) => {
        
    }
    
    /**
     * Method for rendering class values stored in the selectedClass state array
     * The classValue argument stores the assets required for generating the class and sub-class SelectMenus
     * The classCellID argument stores the index of the provided classValue within the selectedClass state array
     */
    classCell = (classCellID) => (
        <Pane
            width="100%"
            display="flex"
            justifyContent="space-evenly"
            alignItems="space-between"
            padding={12}
 
            background="tint2"
        >
            <SelectMenu
                title="Class(es)"

                options={this.state.classList.map(label => ({
                    label: label.className, value: label
                }))}

                selected={this.state.selectedClasses[classCellID].classValue === "" ? null : this.state.selectedClasses[classCellID].classValue }

                onSelect={item => {
                    this.setClassValue(item, classCellID);
                }}

                emptyView={(
                    <Pane
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        background="tint2"
                    >
                        <Text
                            size={300}
                        >
                            No Results
                        </Text>
                    </Pane>
                )}

                closeOnSelect={true}
            >
                <Button
                    style={{ width: '120px' }}
                >
                    {this.state.selectedClasses[classCellID].classValue === null ? "Select a Class..." : this.state.selectedClasses[classCellID].classValue.className}
                </Button>
            </SelectMenu>

            <SelectMenu
                title="Sub-Class(es)"

                emptyView={(
                    <Pane
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        background="tint2"
                    >
                        <Text
                            size={300}
                        >
                            No Results
                        </Text>
                    </Pane>
                )}
            >
                <Button
                    style={{ width: '150px' }}
                    disabled={this.state.selectedClasses[classCellID].classValue === null ? true : false}
                >
                    Select a Sub-Class...
                </Button>
            </SelectMenu>
            <NumericInput
                allowNumericCharactersOnly={true}
                max={20}
                min={0}
                intent="primary"
                style={{ width: '70px' }}
                placeholder="Level..."
                disabled={this.state.selectedClasses[classCellID].classValue === null ? true : false}
                value={this.state.selectedClasses[classCellID].level === 0 ? "" : this.state.selectedClasses[classCellID].level}
                onValueChange={(event) => {
                    this.setLevelValue(event, classCellID);
                }}
            />
            <IconButton
                icon="trash"
                intent="danger"
                disabled={this.state.selectedClasses[classCellID].classValue === null ? true: false}
                onClick={() => {
                    this.clearClassArrayElements(classCellID);
                }}
            />
        </Pane>
    )

    render() {
        return (
            <div>
                <Dialog
                    preventBodyScrolling={true}
                    isShown={this.state.open}
                    title="Select Class(es)"
                    onCloseComplete={() => { this.setState({ open: false }) }}
                    shouldCloseOnOverlayClick={false}
                    minHeightContent={400}
                    width={640}
                    hasFooter={false}
                >
                    {this.state.selectedClasses.map((item, index) => {
                        return (
                            this.classCell(index)
                        );
                    })}

                    <Pane>
                        <Button
                            onClick={this.addClassArrayElement}
                        >
                            Add Class
                        </Button>
                        <Button
                            onClick={() => {
                                console.log(this.state.selectedClasses);
                            }}
                        >
                            Confirm
                        </Button>
                    </Pane>
                </Dialog>
                <Button
                    onClick={this.toggleDialog}
                    style={{ width: '150px' }}
                >
                    Class(es)
                </Button>
            </div>    
        );
    }
}