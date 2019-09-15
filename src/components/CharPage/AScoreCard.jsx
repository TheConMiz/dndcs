import React, {useState} from 'react';

import { Paper, Typography, Divider, Grid, Table, TableBody, TableHead, TableCell, TableRow, Checkbox, Button } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';


const styles = theme => ({
    root: {
        padding: theme.spacing(2),
        height: 190,
        width: 400
    },
    statBlock: {
        textAlign: "center"
    },
    divider: {
        height: 175
    }

})

class AScoreCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                    alignItems="stretch"
                >
                    <Grid
                        item
                        className={classes.statBlock}
                    >
                        <Typography variant="h6" >
                            {this.props.abilityScoreValue.abbr}
                        </Typography>

                        <Typography variant="h7" >
                            10
                        </Typography>

                        <Divider />

                        <Typography variant="h7" >
                            +1
                        </Typography>

                        <Divider />
                        
                        <Typography variant="h8" >
                            Save: +4
                        </Typography>
                    </Grid>

                    <Grid item className={classes.divider}>
                        <Divider orientation="vertical"/>
                    </Grid>

                    <Grid item>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        padding="checkbox"
                                    >
                                        Prof.
                                    </TableCell>

                                    <TableCell
                                        align="center"
                                        padding="checkbox"
                                    >
                                        Exp.
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        padding="checkbox"
                                    >
                                        Skill
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        padding="checkbox"
                                    >
                                        Mod.
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {this.props.skillList.map(item => {
                                    if (item.abilityScoreID === this.props.abilityScoreValue.index) {
                                        return (
                                            <TableRow hover={true}>
                                                <TableCell
                                                    align="center"
                                                    padding="checkbox"
                                                >
                                                    <Checkbox
                                                        disableFocusRipple
                                                        checked={item.proficiency}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    padding="checkbox"
                                                >
                                                    <Checkbox
                                                        disableFocusRipple
                                                        color="primary"
                                                        checked={item.expertise}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    align="left"
                                                    padding="checkbox"
                                                >
                                                    {item.name}
                                                </TableCell>
                                                <TableCell
                                                    align="left"
                                                    padding="checkbox"
                                                >
                                                    12
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

export default withStyles(styles)(AScoreCard);