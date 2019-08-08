import React from 'react';
import { Dialog, Pane, Button, Table, SelectMenu, IconButton, Card, TextInput } from 'evergreen-ui';

class ClassSelectionMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
            selected: null
        };
    }

    toggleDialog = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <Pane>
                <Dialog
                    preventBodyScrolling={true}
                    isShown={this.state.open}
                    title="Select Class(es)"
                    hasFooter={false}
                >
                    
                    <Pane
                        height={30}
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-evenly"
                    >
                        <SelectMenu>
                            <Button>Class</Button>
                        </SelectMenu>
                        <SelectMenu>
                            <Button>Sub-Class</Button>
                        </SelectMenu>
                        <TextInput
                            name="classLevel"
                            placeholder="Level..."
                        />
                        <IconButton appearance="minimal" icon="trash" intent="danger" iconSize={18} />
                    </Pane>


                </Dialog>
                <Button
                    onClick={this.toggleDialog}
                >
                    Add Classes
                </Button>
            </Pane>
        );
    }
}
export default ClassSelectionMenu;