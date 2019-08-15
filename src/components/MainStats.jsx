import React from 'react';

import { Divider } from '@blueprintjs/core';

import { Checkbox, Text, Pane, Card, Tooltip } from 'evergreen-ui';

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
        });
    }

    render() {
        return (
            <Card
                background="tint1"
                padding={12}
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexDirection="column"
                height={300}
                width={500}
                elevation={1}
            >
                <Pane
                    flexDirection="row"
                    display="flex"
                    width="100%"
                    alignItems="center"
                    justifyContent="space-evenly"
                >

                    {this.state.abilityScores.length === 0 ? '' : (this.state.abilityScores.map((item, index) => {
                        if (index < Math.floor(this.state.abilityScores.length / 2)) {
                            return (
                                <Tooltip
                                    content={item.aSDesc}
                                >
                                    <Pane
                                        background="redTint"
                                        padding={8}
                                        alignItems="center"
                                        flexDirection="column"
                                        justifyContent="center"
                                        hoverElevation={1}
                                        width={120}
                                        height={120}
                                    >
                                        <Text>
                                            {item.aSAbbr}
                                        </Text>

                                        <Text>
                                            10
                                        </Text>

                                        <Divider />

                                        <Text>
                                            +1
                                        </Text>
                                    </Pane>
                                </Tooltip>
                            );
                        }
                    }))}
                </Pane>

                <Pane
                    flexDirection="row"
                    display="flex"
                    width="100%"
                    alignItems="center"
                    justifyContent="space-evenly"
                >
                    {this.state.abilityScores.length === 0 ? '' : (this.state.abilityScores.map((item, index) => {
                        if (index >= Math.floor(this.state.abilityScores.length / 2)) {
                            return (
                                <Tooltip
                                    content={item.aSDesc}
                                >
                                    <Pane
                                        background="redTint"
                                        padding={8}
                                        alignItems="center"
                                        justifyContent="center"
                                        hoverElevation={2}
                                        width={120}
                                        height={120}
                                    >
                                        <Text>
                                            {item.aSAbbr}
                                        </Text>

                                        <Text>
                                            10
                                        </Text>

                                        <Divider />

                                        <Text>
                                            +1
                                        </Text>
                                    </Pane>
                                </Tooltip>
                            );
                        }
                    }))}
                </Pane>
            </Card>
        );
    }
}

export default MainStats;