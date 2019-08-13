import React from 'react';

import { Dialog, Pane, Button, SelectMenu, IconButton, Text } from 'evergreen-ui';

import { NumericInput } from '@blueprintjs/core';

import update from 'immutability-helper';

export default class ClassSelectionMenu extends React.Component {
    constructor() {
        super();

        /*
        * selectedClasses.classValue stores the SelectMenu component that is chosen
        * selectedClasses.subClassValue stores the SelectMenu component that is chosen
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

    emptyClassCell = {
        classValue: null,
        subClassValue: null,
        level: 0
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

        dbQuery = knex({
            subCl: 'Subclasses'
        })
            .select({
                subClassName: "subCl.name",
                subClassID: "subCl.index",
                classID: "subCl.classID",
                subClassDesc: "subCl.desc"
            })
            .orderBy("subCl.name", "asc");

        dbQuery.then((rows) => {
            this.setState({ subclassList: rows });
        });

        //console.log(this.state.subclassList);

    }

    /**
     * Method for adding new class and subClass elements to the selectedClasses state array
     * Note the technique used to set state: more efficient than copying and replacing array
     */
    addClassArrayElement = () => {
        let newElement = this.emptyClassCell;
        
        this.setState(state => {
            const list = state.selectedClasses.concat(newElement);
            return {
                selectedClasses: list
            }
        });
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
    }

    setClassValue = (item, classCellID) => {

            let tempClassCell = update(this.state.selectedClasses[classCellID], {
                classValue: { $set: item.value }
            });

            let tempList = this.state.selectedClasses;

            tempList[classCellID] = tempClassCell;

            this.setState({ selectedClasses: tempList });
    }


    setSubClassValue = (item, classCellID) => {
        let tempClassCell = update(this.state.selectedClasses[classCellID], {
            subClassValue: { $set: item.value }
        });

        let tempList = this.state.selectedClasses;

        tempList[classCellID] = tempClassCell;

        this.setState({ selectedClasses: tempList });
    }

    filterSubClassList = (classCellID) => {
        if (this.state.selectedClasses[classCellID].classValue === null) {
            return this.state.subclassList;
        }
        
        else {
            let temp = this.state.subclassList.filter(item => item.classID === this.state.selectedClasses[classCellID].classValue.classID)

            return temp;
        }
    }


    setLevelValue = (levelValue, classCellID) => {
        let tempClassCell = update(this.state.selectedClasses[classCellID], {
            level: { $set: levelValue}
        })

        let tempList = this.state.selectedClasses;

        tempList[classCellID] = tempClassCell;

        this.setState({ selectedClasses: tempList });
    }

    confirmChoices = () => {
        this.setState({ open: false });

        if (this.state.selectedClasses.length > 1) {
            let temp = this.state.selectedClasses.filter(item => item.classValue != null);

            if (temp.length === 0) {
                temp.push(this.emptyClassCell);
            }

            this.setState({selectedClasses: temp});
        }
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

                selected={this.state.selectedClasses[classCellID].classValue === null ? null : this.state.selectedClasses[classCellID].classValue }

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
                    appearance="primary"
                >
                    {this.state.selectedClasses[classCellID].classValue === null ? "Select a Class..." : this.state.selectedClasses[classCellID].classValue.className}
                </Button>
            </SelectMenu>

            <SelectMenu
                title="Sub-Class(es)"

                options={this.filterSubClassList(classCellID).map(label => ({
                    label: label.subClassName, value: label
                }))}
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

                onSelect={item => {
                    this.setSubClassValue(item, classCellID);
                }}

                selected={this.state.selectedClasses[classCellID].subClassValue === null ? null : this.state.selectedClasses[classCellID].subClassValue}

                closeOnSelect={true}
            >
                <Button
                    style={{ width: '150px' }}
                    disabled={this.state.selectedClasses[classCellID].classValue === null ? true : false}
                    appearance="default"
                >
                    {this.state.selectedClasses[classCellID].subClassValue === null ? "Select a Sub-Class..." : this.state.selectedClasses[classCellID].subClassValue.subClassName}
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
                    height={400}
                    width={640}
                    hasFooter={false}
                    shouldCloseOnEscapePress={false}
                >
                    <Pane
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="center"
                        height={440}
                    >
                        <Pane
                            height={400}
                            width="100%"
                            backgroundColor="tint2"
                            style={{overflow: "auto"}}
                        >
                            {this.state.selectedClasses.map((item, index) => {
                                return (
                                    this.classCell(index)
                                );
                            })}
                        </Pane>

                        <Pane
                            height={40}
                            width="100%"
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-end"
                            alignItems="space-evenly"
                        >
                            <Button
                                iconBefore="plus"
                                onClick={this.addClassArrayElement}
                                marginRight={8}
                                marginTop={12}
                            >
                                Add Class
                            </Button>
                            <Button
                                marginTop={12}
                                intent="success"
                                appearance="primary"
                                disabled={this.state.selectedClasses.filter(item => item.classValue != null).length > 0 ? false: true }
                                onClick={() => {
                                    this.confirmChoices();
                                }}
                            >
                                Confirm
                            </Button>
                        </Pane>
                    </Pane>
                    
                   

                   
                </Dialog>
                <Button
                    onClick={() => {
                        this.setState({ open: true });
                    }}
                    style={{ width: '150px' }}
                >
                    Class(es)
                </Button>
            </div>    
        );
    }
}