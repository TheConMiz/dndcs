import React from 'react';

import { Dialog, Pane, Button, SelectMenu, IconButton, Text } from 'evergreen-ui';

import { NumericInput } from '@blueprintjs/core';


class ClassSelectionMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
            classSelected: false,
            classList: [],
            subclassList: [],
            selectedClass: [null]
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

    toggleDialog = () => {
        this.setState({open: true})
    }

    render() {
        const classCell = (
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
                        Select a Class...
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
                />
                <IconButton
                    icon="trash"
                    intent="danger"
                />
            </Pane>
        )


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
                    {classCell}
                    {classCell}
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
export default ClassSelectionMenu;