import React from 'react';

import { Paper, Typography, Button, Divider, Grid, Table, TableBody, TableHead, TableCell, TableRow, Checkbox } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';

import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        padding: theme.spacing(2)
    }
})

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
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Grid
                    container
                    direction="row"
                >
                    <Grid
                        item
                    >
                        <Typography variant="h5">
                            STR
                        </Typography>

                        <Typography variant="h6">
                            10
                        </Typography>

                        <Divider />

                        <Typography variant="h6">
                            +1
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Prof.</TableCell>
                                    <TableCell>Exp.</TableCell>
                                    <TableCell>Skill</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.skills.map(item => {
                                    if (item.skillID === 1) {
                                        return (
                                            <TableRow>
                                                <TableCell>
                                                    <Checkbox />
                                                </TableCell>
                                                <TableCell>
                                                    <Checkbox />
                                                </TableCell>
                                                <TableCell>
                                                    {item.skillName}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                })}
                               
                            </TableBody>
                        </Table>
                    </Grid>

                </Grid>

            </Paper>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainStats));