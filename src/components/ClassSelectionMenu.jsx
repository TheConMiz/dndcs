import React from 'react';
import { Dialog, Pane, Button, Table, SelectMenu, IconButton, Card } from 'evergreen-ui';

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
                >
                    <Card
                        elevation={1}
                        width="100%"
                    >
                        SD
                    </Card>
                </Dialog>
                <Button
                    onClick={this.toggleDialog}
                >
                    Classes
                </Button>
            </Pane>
        );
    }
}
export default ClassSelectionMenu;