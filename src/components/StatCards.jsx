import React from 'react';

import { Card, InputNumber } from 'antd';

const gridStyle = {
    width: "25%",
    marginTop: 16,
    marginLeft: 16,
    textAlign: 'center',
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
            // for (let i = 0; i < rows.length; ++i){
            //     console.log(rows[i]["name"]);
            // }
            this.setState({ statNames: rows });
            this.setState({dataLoaded: true})
            // console.log(this.state.statNames);
        });
    }
    

    render() { 
        return (
            <div>
                <Card
                    hoverable
                    style={gridStyle}
                    title={this.state.dataLoaded ? this.state.statNames[0]["name"].toString() : ""}
                >
                    <InputNumber max={20} min={0} defaultValue={0} size="large" />
                </Card>
                <Card
                    hoverable
                    style={gridStyle}
                    title={this.state.dataLoaded ? this.state.statNames[1]["name"].toString() : ""}
                >
                    <InputNumber max={20} min={0} defaultValue={0} size="large"/>
                </Card>
                <Card
                    hoverable
                    style={gridStyle}
                    title={this.state.dataLoaded ? this.state.statNames[2]["name"].toString() : ""}
                >
                    <InputNumber max={20} min={0} defaultValue={0} size="large"/>
                </Card>
                <Card
                    hoverable
                    style={gridStyle}
                    title={this.state.dataLoaded ? this.state.statNames[3]["name"].toString() : ""}
                >
                    <InputNumber max={20} min={0} defaultValue={0} size="large"/>
                </Card>
                <Card
                    hoverable
                    style={gridStyle}
                    title={this.state.dataLoaded ? this.state.statNames[4]["name"].toString() : ""}
                >
                    <InputNumber max={20} min={0} defaultValue={0} size="large"/>
                </Card>
                <Card
                    hoverable
                    style={gridStyle}
                    title={this.state.dataLoaded ? this.state.statNames[5]["name"].toString() : ""}
                >
                    <InputNumber max={20} min={0} defaultValue={0} size="large"/>
                </Card>
            </div>
            
        );
    }
}

export default StatCards;