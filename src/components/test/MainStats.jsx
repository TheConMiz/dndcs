import React from 'react';

import { Paper, Typography, Divider, Grid, Table, TableBody, TableHead, TableCell, TableRow, Checkbox } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';

import { connect } from 'react-redux';

import AScoreCard from './AScoreCard';

const mapStateToProps = (state) => {
    return {
        dbPath: state.app.dbPath,
        abilityScores: state.character.abilityScores
    };
}

const mapDispatchToProps = (dispatch) => {
    
}

class MainStats extends React.Component {
    constructor() {
        super();

        this.state = {
            abilityScores: [],
            skills: []
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
                    name: 'aScore.name',
                    abbr: 'aScore.abbr',
                    index: 'aScore.index',
                    desc: 'aScore.desc'
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
                    name: 'skills.name',
                    index: 'skills.index',
                    desc: 'skills.desc',
                    abilityScoreID: 'skills.abilityScoreID'
                })
                .orderBy("skills.name", "asc");
        
        dbQuery.then((rows) => {
            let tempRows = rows.map(item => ({ ...item, proficiency: false, expertise: false }));
            this.setState({ skills: tempRows });
        });
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                >

                    {
                        this.state.abilityScores.map((abilityScoreItem, index) => {

                            if (index / 2 === 0) {
                                let temp = this.state.skills.filter(item => item.abilityScoreID === abilityScoreItem.index);

                                return (
                                    <Grid item>
                                        <AScoreCard abilityScoreValue={abilityScoreItem} skillList={temp} />
                                    </Grid>
                                );
                            }
                        })
                    }
                </Grid> 

                <Grid
                    container
                    direction="row"
                >

                    {
                        this.state.abilityScores.map((abilityScoreItem, index) => {

                            if (index / 2 != 0) {
                                let temp = this.state.skills.filter(item => item.abilityScoreID === abilityScoreItem.index);

                                return (
                                    <Grid item>
                                        <AScoreCard abilityScoreValue={abilityScoreItem} skillList={temp} />
                                    </Grid>
                                );
                            }
                        })
                    }
                </Grid> 
            </div>
            
        );
        
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MainStats);