import React from 'react';

import { Table, IconButton } from 'evergreen-ui';

export default class ClassTable extends React.Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        const cell = (
            <Table.Row isSelectable>
                <Table.TextCell flexBasis={10}>
                    <IconButton icon="info-sign" intent="default" appearance="minimal" />
                </Table.TextCell>

                <Table.TextCell flexBasis={10}>
                    2
                </Table.TextCell>

                <Table.TextCell flexBasis={80}>
                    Druid
                </Table.TextCell>

                <Table.TextCell flexBasis={160}>
                    Circle of the Moon
                </Table.TextCell>

                
                
            </Table.Row>
        );
        return (
            <Table>
                <Table.Head>
                    <Table.TextHeaderCell flexBasis={10}/>

                    <Table.TextHeaderCell flexBasis={10}>
                        Level
                    </Table.TextHeaderCell>

                    <Table.TextHeaderCell flexBasis={80}>
                        Class
                    </Table.TextHeaderCell>

                    <Table.TextHeaderCell flexBasis={160}>
                        Sub-Class
                    </Table.TextHeaderCell>                
                </Table.Head>
                <Table.Body height={150}>
                    {cell}
                    {cell}
                    {cell}
                    {cell}
                    {cell}
                    {cell}
                    {cell}
                </Table.Body>
            </Table>
        );
    }
}
