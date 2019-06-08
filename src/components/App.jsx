import React from 'react';
import { Progress, Button, Table } from 'antd';
import SideMenu from './SideMenu';

const electron = window.require('electron');

const path = window.require('path');
const dbPath = path.resolve(__dirname, './../data/database/DnDCS.db');

const knex = window.require('knex')({
    client: "sqlite3",
    connection: {
        filename: dbPath
    },
    useNullAsDefault: true
});

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            light: true,
            conditions: [],
            conditionsTest: false
        }
    }

    lightHandler = () => {
        this.setState({ light: !this.state.light });
        console.log(this.state.light);
    }

    componentDidMount = () => {
        // console.log(dbPath);
        // console.log(__dirname);

        let result = knex.select("*").from("Conditions");

        result.then((rows) => {
            this.setState({ conditions: rows });
        });
    }

    render() {
        let dataSource = this.state.conditions;
        let columns = [
            {
                title: "Index",
                dataIndex: "index",
                key: "index",
                sorter: true
            },
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
                sorter: true,
            },
            {
                title: "Description",
                dataIndex: "desc1",
                key: "desc",
                sorter: true
            },
            {
                title: "Description2",
                dataIndex: "desc2",
                key: "desc2",
                sorter: true
            }
        ];
        return (
                
            <div>
                <Progress percent={50} strokeColor="green" status="active" />
                {/* <SideMenu/>
                <Button onClick={() => { this.setState({ conditionsTest: !this.state.conditionsTest }); console.log(this.state.conditions[1]['name']) }}>KnexTest</Button> */}
                <Table dataSource={dataSource} columns={columns} theme="dark" />;
            </div>

        );
    }
}

export default App;