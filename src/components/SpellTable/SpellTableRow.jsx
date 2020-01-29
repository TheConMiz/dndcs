import React, {Fragment, useState, memo} from 'react'

import { TableCell, Checkbox, TableRow, Typography } from '@material-ui/core'

import SpellDetails from './SpellDetails'

import StarBorderIcon from '@material-ui/icons/StarBorderRounded'

import StarIcon from '@material-ui/icons/StarRounded';
import { useSelector } from 'react-redux';

const SpellTableRow = (props) => {

    const [checked, setChecked] = useState(false)

    const abilityScores = useSelector(state => state.rules.abilityScores)
    

    return (
        <TableRow
            hover={true}
            selected={checked}
            key={props.spellData.name}
            onClick={() => setChecked(!checked)}
        >

            <TableCell padding="checkbox" align="left">
                <Checkbox
                    color="secondary"
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon />}
                    onChange={(event) => {
                        setChecked(event.target.checked)
                    }}
                    checked={checked}
                    disabled
                    disableFocusRipple
                />
            </TableCell>

            <TableCell padding="checkbox" align="left">
                {props.spellData.name}
            </TableCell>

            <TableCell padding="checkbox" align="left" style={{ width: '50vw' }}>
                {props.spellData.shortDesc}
            </TableCell>

            <TableCell padding="checkbox" align="left">
                {props.spellData.range}
            </TableCell>

            <TableCell padding="checkbox" align="left">
                {props.spellData.castingTime}
            </TableCell>

            <TableCell padding="checkbox" align="center">
                {
                    props.spellData.concentration === 1 ?
                        <Checkbox
                            color="primary"
                            checked={true}
                        />
                        :
                        <Fragment />
                }
            </TableCell>

            <TableCell padding="checkbox" align="center">
                {
                    props.spellData.ritual === 1 ?
                        <Checkbox
                            color="primary"
                            checked={true}
                        />
                        :
                        <Fragment />
                }

            </TableCell>

            <TableCell>
                {
                    typeof(abilityScores.find(item => props.spellData.save === item.index)) === "undefined" ? 
                        ""
                        :
                        abilityScores.find(item=>props.spellData.save === item.index).abbr
                }
            </TableCell>

            <TableCell>

            </TableCell>

            <TableCell>
                {props.spellData.duration}
            </TableCell>

            <TableCell>
                <SpellDetails
                    spellData={props.spellData}
                />
            </TableCell>
            
        </TableRow>
    )
}

export default SpellTableRow

export const MemoizedSpellTableRow = memo(SpellTableRow)
