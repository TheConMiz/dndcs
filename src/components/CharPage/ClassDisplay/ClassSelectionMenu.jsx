import React from 'react';

import { Dialog, Pane, Button, SelectMenu, IconButton, Text } from 'evergreen-ui';

import { NumericInput } from '@blueprintjs/core';

import { connect } from 'react-redux';

import { addClassCell, clearClassCell, setClass, setSubClass, setLevel, confirmClasses } from './../../../actions/characterActions';

const mapStateToProps = (state) => {

    return {
        classes: state.character.classes,
        dbPath: state.app.dbPath
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addClassCell: (newClassCell) => {
            dispatch(addClassCell(newClassCell));
        },

        clearClassCell: (classCellID) => {
            dispatch(clearClassCell(classCellID));
        },

        setClass: (newClass, classCellID) => {
            dispatch(setClass(newClass, classCellID));
        },

        setSubClass: (newSubClass, classCellID) => {
            dispatch(setSubClass(newSubClass, classCellID));
        },

        setLevel: (newLevel, classCellID) => {
            dispatch(setLevel(newLevel, classCellID));
        },

        confirmClasses: (finalClasses) => {
            dispatch(confirmClasses(finalClasses));
        }
    }
}

class ClassSelectionMenu extends React.Component {
    constructor() {
        super();
        
        this.state = {
            open: false,
            
            classList: [],
            
            subclassList: []
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
    }

    addClassArrayElement = () => {
        this.props.addClassCell(this.emptyClassCell);
    }

    clearClassArrayElements = (classCellID) => {
        this.props.clearClassCell(classCellID);
    }

    setClassValue = (item, classCellID) => {
        this.props.setClass(item, classCellID);
    }

    setSubClassValue = (item, classCellID) => {
        this.props.setSubClass(item, classCellID);
    }

    filterSubClassList = (classCellID) => {
        if (this.props.classes[classCellID].classValue === null) {
            return this.state.subclassList;
        }

        else {
            return this.state.subclassList.filter(item => item.classID === this.props.classes[classCellID].classValue.value.classID);
        }
    }

    setLevelValue = (levelValue, classCellID) => {
        this.props.setLevel(levelValue, classCellID);
    }

    confirmChoices = () => {
        this.setState({ open: false });

        if (this.props.classes.length >= 1) {
            this.props.confirmClasses(this.props.classes.filter(item => item.classValue != null));
        }        
    }

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
                
                selected={this.props.classes[classCellID].classValue === null ? null : this.props.classes[classCellID].classValue.value}

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
                    {this.props.classes[classCellID].classValue === null ? "Select a Class..." : this.props.classes[classCellID].classValue.label}
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

                selected={this.props.classes[classCellID].subClassValue === null ? null : this.props.classes[classCellID].subClassValue.value}

                closeOnSelect={true}
            >
                <Button
                    style={{ width: '150px' }}
                    disabled={this.props.classes[classCellID].classValue === null ? true : false}
                    appearance="default"
                >

                    {this.props.classes[classCellID].subClassValue === null ? "Select a Sub-Class..." : this.props.classes[classCellID].subClassValue.label}

                </Button>
            </SelectMenu>

            <NumericInput
                allowNumericCharactersOnly={true}
                max={20}
                min={0}
                intent="primary"
                style={{ width: '70px' }}
                placeholder="Level..."
                disabled={this.props.classes[classCellID].classValue === null ? true : false}
                value={this.props.classes[classCellID].level === 0 ? "" : this.props.classes[classCellID].level}
                onValueChange={(event) => {
                    this.setLevelValue(event, classCellID);
                }}
            />
            <IconButton
                icon="trash"
                intent="danger"
                disabled={this.props.classes[classCellID].classValue === null ? true: false}
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
                            {this.props.classes.map((item, index) => {
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
                                disabled={this.props.classes.filter(item => item.classValue != null).length > 0 ? false: true }
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
                        if (this.props.classes.length === 0) {
                            this.addClassArrayElement();
                        }
                    }}
                    style={{ width: '150px' }}
                >
                    Class(es)
                </Button>
            </div>    
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassSelectionMenu);