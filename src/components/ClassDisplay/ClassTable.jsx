import React from 'react';

import { Table, IconButton, Icon } from 'evergreen-ui';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        classes: state.character.classes
    }
}

class ClassTable extends React.Component {
    constructor() {
        super();
    }

    renderCell = (item) => {
        //console.log(item);
        
        if (item.classValue != null) {
            if (item.subClassValue === null) {
                return (
                    <Table.Row>
                        <Table.TextCell flexBasis={10}>
                            <Icon icon="info-sign" color="info" />
                        </Table.TextCell>

                        <Table.TextCell flexBasis={10}>
                            {item.level === 0 ? null : item.level}
                        </Table.TextCell>

                        <Table.TextCell flexBasis={80}>
                            {item.classValue.label === null ? null : item.classValue.label}
                        </Table.TextCell>

                        <Table.TextCell flexBasis={160}>
                            
                        </Table.TextCell>

                    </Table.Row>
                );
            }
            
            else {
                return (
                    <Table.Row>
                        <Table.TextCell flexBasis={10}>
                            <Icon icon="info-sign" color="info" />
                        </Table.TextCell>

                        <Table.TextCell flexBasis={10}>
                            {item.level === 0 ? null : item.level}
                        </Table.TextCell>

                        <Table.TextCell flexBasis={80}>
                            {item.classValue.label === null ? null : item.classValue.label}
                        </Table.TextCell>

                        <Table.TextCell flexBasis={160}>
                            {item.subClassValue.label === null ? null : item.subClassValue.label}
                        </Table.TextCell>

                    </Table.Row>
                );
            }
        }

        else return null;
    }

    render() {
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
                    {this.props.classes.map((item, index) => {
                        return this.renderCell(item);
                    })}
                </Table.Body>
            </Table>
        );
    }
}

export default connect(mapStateToProps, null)(ClassTable);
