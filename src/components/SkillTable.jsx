import React from 'react';
import { Table, Checkbox, Tooltip } from 'antd';
import { promisify } from 'bluebird';

const columns = [
    {
        title: 'Proficiency',
        dataIndex: 'proficiency',
        sorter: 'true',
        width: '10%',
        align: 'center',
        render: (text, record, index) => {
            return (
                <span>
                    <Checkbox defaultChecked={false}/>
                </span>     
            );
        }
    },
    {
        title: 'Expertise',
        dataIndex: 'expertise',
        sorter: 'true',
        width: '10%',
        align: 'center',
        render: (text, record, index) => {
            return (
                <span>
                    <Checkbox defaultChecked={false} />
                </span>
            );
        }
    },
    {
        title: 'Score',
        dataIndex: 'score', 
        sorter: 'true',
        width: '30%',
        align: 'center'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: 'true',
        width: '50%',
        align: 'center',
        render: (text, record, index) => {
            return (
                <Tooltip title={record["desc"]} arrowPointAtCenter placement="right">
                    <span>{text}</span>
                </Tooltip>
            );

        }
    }
];

class SkillTable extends React.Component {
    constructor() {
        super();

        this.state = {
            skills: []
        }
    }

    componentDidMount = () => {
        const knex = window.require('knex')({
            client: "sqlite3",
            connection: {
                filename: this.props['dbPath']
            },
            useNullAsDefault: true,
            debug: true
        });

        let result = knex.select(["name", "desc"]).from("Skills").orderBy("index", 'asc');

        result.then((rows) => {
            console.log(rows);
            this.setState({ skills: rows });
        });
        
    }

    render() {
        return (
            <Table
                style={{
                    width: '25vh'
                }}
                columns={columns}
                dataSource={this.state.skills}
                pagination={false}
            >
                <Tooltip title="Test">
                    <span>TESTING</span>
                </Tooltip>
            </Table>
        );
    }
}

export default SkillTable;