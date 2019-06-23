import React from 'react';

import { Card, InputNumber, Typography } from 'antd';

const gridStyle = {
    textAlign: 'center',
    borderRadius: '5px',
    width: '500px',
    height: '450px'
};

class StatCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            statNames: [],
            dataLoaded: false
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

        let result = knex.select(["name", "index"]).from("AbilityScores").orderBy("index", 'asc');

        result.then((rows) => {
            console.log(rows);
            this.setState({ statNames: rows });
            this.setState({ dataLoaded: true });

        });
    }
    

    render() { 
        return (
            <Card
                hoverable
                style={{padding: 0, width: '100px', height:'75px', textAlign: 'center', borderRadius: '5px'}}
            >
                <Typography>
                    {this.state.dataLoaded ? this.state.statNames[0]["name"].toString() : ""}
                </Typography>
                <InputNumber max={20} min={0} defaultValue={0} style={{width: '40px', height: '30px'}}/>
            </Card>
        );
    }
}

export default StatCards;