import React from 'react';

import { Table } from 'evergreen-ui';

export default class ClassDisplay extends React.Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {

        return (
            <Table>
                <Table.Head>
                    
                    <Table.TextHeaderCell>
                        Class
                    </Table.TextHeaderCell>

                    <Table.TextHeaderCell>
                        Level
                    </Table.TextHeaderCell>
                
                </Table.Head>
                <Table.Body height={72}>
                    <Table.Row isSelectable>
                        <Table.TextCell>
                            Barbarian, Berserker
                        </Table.TextCell>

                        <Table.TextCell>
                            20
                        </Table.TextCell>
                    </Table.Row>

                    
                    <Table.Row isSelectable>
                        <Table.TextCell>
                            Barbarian, Berserker
                        </Table.TextCell>

                        <Table.TextCell>
                            20
                        </Table.TextCell>
                    </Table.Row>
                    <Table.Row isSelectable>
                        <Table.TextCell>
                            Barbarian, Berserker
                        </Table.TextCell>

                        <Table.TextCell>
                            20
                        </Table.TextCell>
                    </Table.Row>
                    <Table.Row isSelectable>
                        <Table.TextCell>
                            Barbarian, Berserker
                        </Table.TextCell>

                        <Table.TextCell>
                            20
                        </Table.TextCell>
                    </Table.Row>
                    

                </Table.Body>
            </Table>
        );
    }
}
