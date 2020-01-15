import React, { Fragment } from 'react'

import { useDispatch } from 'react-redux';

import { UPDATE_SPELLS } from './../actions/appActions';

function pullData(dbPath) {

    const dispatch = useDispatch();

    let knex = window.require('knex')({
        client: "sqlite3",
        connection: {
            filename: dbPath
        },
        useNullAsDefault: true,
        debug: true
    });

    const spellQuery = knex({
        sp: "Spell"
    })
        .select({
            name: "sp.name",
            level: "sp.level",
            id: "sp.index",
            school: "sp.schoolID",
            shortDesc: "Spell-Description-Short.desc",
            material: "Spell-Material.material",
            altName: "Spell-Name-Alt.name",
            range: "sp.range",
            castingTime: "sp.casting_time",
            concentration: "Spell-Type-Concentration.concentration",
            ritual: "Spell-Type-Ritual.ritual",
        })

        .join('Spell-Description-Short', { 'sp.index': 'Spell-Description-Short.spellID' })

        .leftOuterJoin('Spell-Material', { 'sp.index': 'Spell-Material.spellID' })

        .leftOuterJoin('Spell-Name-Alt', { 'sp.index': 'Spell-Name-Alt.spellID' })

        .leftOuterJoin('Spell-Type-Concentration', { 'sp.index': 'Spell-Type-Concentration.spellID' })
        
        .leftOuterJoin('Spell-Type-Ritual', { 'sp.index': 'Spell-Type-Ritual.spellID' })

        .orderBy("sp.name", "asc");

    let dbQuery = spellQuery;

    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_SPELLS, payload: rows })
    })
}

export default function SpellPuller(props) {

    pullData(props.dbPath)

    return (
        <Fragment/>
    )
}
