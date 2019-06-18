import React from 'react';

import { Card, InputNumber } from 'antd';

const gridStyle = {
    textAlign: 'center',
    borderRadius: '5px'
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

                title={this.state.dataLoaded ? this.state.statNames[0]["name"].toString() : ""}
                bodyStyling={{padding: 0}}
            >
                <InputNumber max={20} min={0} defaultValue={0} size="large" style={{width: '60px', height: '60px', textAlign: 'center'}}/>
            </Card>
        );
    }
}

export default StatCards;