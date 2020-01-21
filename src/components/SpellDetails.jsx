import React, {Fragment} from 'react'
import { Popover, Typography, IconButton, Grid } from '@material-ui/core/'

import { makeStyles } from '@material-ui/core/styles'

import HelpSharpIcon from '@material-ui/icons/HelpSharp';

const useStyles = makeStyles(theme => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
    innerGrid: {
        minWidth: '240px',
        minHeight: '150px',
    }
}));

export default function MouseOverPopover(props) {

    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handlePopoverOpen = event => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    };

    const handlePopoverClose = () => {
        setAnchorEl(null)
        setOpen(false)
    };

    return (
        <Fragment>
            <IconButton
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                disableFocusRipple
                color="secondary"
            >
                <HelpSharpIcon/>
            </IconButton>
            
            <Popover
                id={props.spellData.name + "-popover"}
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Grid
                    className={classes.innerGrid}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <Typography
                            variant="h7"
                            color="secondary"
                        >
                            Level {props.spellData.level}
                        </Typography>
                    </Grid>

                    <Grid item>
                        {props.spellData.material}
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h7"
                            color="secondary"
                        >
                            Also Known As...
                        </Typography>
                    </Grid>

                    <Grid item>
                        {props.spellData.altName}
                    </Grid>
                
                    <Grid item>
                        <Typography
                            variant="h7"
                            color="secondary"
                        >
                            Material
                        </Typography>
                    </Grid>

                    <Grid item>
                        {props.spellData.material}
                    </Grid>

                    {/* <Grid item>
                        <Typography
                            variant="h7"
                            color="secondary"
                        >
                            Source
                        </Typography>
                    </Grid>

                    <Grid item>
                        {props.spellData.material}
                    </Grid> */}

                </Grid>
            </Popover>
        </Fragment>
    );
}