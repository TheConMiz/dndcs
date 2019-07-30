import React from 'react';

import { Card, Elevation, Tooltip, Divider } from '@blueprintjs/core';

class MainStats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            abilityScores: []
        }
    }

    componentDidMount = () => {
        const knex = window.require('knex')({
            client: "sqlite3",
            connection: {
                filename: this.props.dbPath
            },
            useNullAsDefault: true,
            debug: true
        });

        let dbQuery =
            knex({
                aScore: 'AbilityScores'
            })
            
            .select({
                aSName: 'aScore.name',
                aSAbbr: 'aScore.abbr',
                aSID: 'aScore.index',
                aSDesc: 'aScore.desc'
            })
            .orderBy("aScore.index", 'asc');
                
        dbQuery.then((rows) => {
            this.setState({ abilityScores: rows });
            //console.log(this.state.abilityScores);
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.abilityScores.length === 0 ? '' : (this.state.abilityScores.map(item => {
                        return (
                            <Tooltip
                                content={item.aSDesc}
                            >
                                <Card
                                    interactive={true}
                                    elevation={Elevation.TWO}
                                >
                                    <div>
                                        <h3 className="bp3-heading">
                                            {item.aSAbbr}
                                        </h3>

                                        <h5 className="bp3-heading">
                                            10
                                        </h5>
                                        <Divider />
                                        <h5 className="bp3-heading">
                                            +1
                                        </h5>
                                    </div>
                                    
                                </Card>  
                            </Tooltip> 
                        );
                    }))}
                </div>
            </div>
        );
    }
}

export default MainStats;