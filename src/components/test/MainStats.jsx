import React from 'react';

import { Divider } from '@blueprintjs/core';

import { Heading, Text, Pane, Card, Tooltip, Position, Strong, Table, Checkbox } from 'evergreen-ui';

class MainStats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            abilityScores: [],
            skills: [],
            intent: "none"
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

        dbQuery =
            knex({
                skills: "Skills"
            })
        
                .select({
                    skillName: 'skills.name',
                    skillID: 'skills.index',
                    skillDesc: 'skills.desc',
                    skillAScoreID: 'skills.abilityScoreID'
                })
                .orderBy("skills.name", "asc");
        
        dbQuery.then((rows) => {
            this.setState({ skills: rows });
        });
    }

    render() {
        return (
            <Card
                background="tint1"
                height={500}
                width={440}
                elevation={1}
                
            >
                <Pane
                    width={260}
                    height={500}
                >
                    <Table>
                        <Table.Head style={{ textAlign: "center" }} >

                            <Table.TextHeaderCell flexBasis={10}>
                                Skills
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                Mod.
                            </Table.TextHeaderCell>
                        </Table.Head>

                        <Table.Body height={444}>
                            {this.state.skills.length === 0 ? "" : this.state.skills.map((item, index) => {
                                // console.log(item);
                                return (
                                    <Tooltip content={item.skillDesc}>
                                        <Table.Row isSelectable height={32} intent={this.state.intent} onSelect={() => {
                                            this.setState({ intent: "success" })
                                        }}>
                                            <Table.TextCell flexBasis={10}>
                                                {item.skillName}
                                            </Table.TextCell>


                                            <Table.TextCell style={{ textAlign: "center" }} >
                                                0
                                        </Table.TextCell>
                                        </Table.Row>
                                    </Tooltip>        
                                )
                            })}

                        </Table.Body>
                    </Table>
                </Pane>
            </Card>
        );
    }
}

export default MainStats;