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
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '700px'}}>
                {this.state.abilityScores.length === 0 ? '' : (this.state.abilityScores.map(item => {
                    return (
                        
                        <Tooltip
                            content={item.aSDesc}
                            inheritDarkTheme={false}
                            intent="success"                        
                        >
                            <Card
                                interactive={true}
                                elevation={Elevation.FOUR}
                                style={{width: '100px', height: '120px'}}
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
        );
    }
}

export default MainStats;