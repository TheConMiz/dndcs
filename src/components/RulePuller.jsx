import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { UPDATE_RULE_LEVEL, UPDATE_RULE_ABILITY_SCORE } from './../actions/rulesActions';
import { UPDATE_SPELLS } from '../actions/appActions';

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

    const levelQuery = knex({
        lvl: 'Rule-Level'
    })

        .select({
            level: "lvl.level",
            xp: "lvl.xp",
        })

        .orderBy("lvl.level", "asc");

    const abilityScoreQuery = knex({
        as: 'Rule-AbilityScore'
    })

        .select({
            index: "as.index",
            name: "as.name",
            abbr: "as.abbr",
            desc: "as.desc",
            longDesc: "as.longDesc",

        })

        .orderBy("as.name", "asc");

    let dbQuery = levelQuery;

    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_LEVEL, payload: rows });
    })

    dbQuery = abilityScoreQuery

    dbQuery.then((rows) => {
        console.log(rows)
        dispatch({ type: UPDATE_RULE_ABILITY_SCORE, payload: rows });
    })
    
}

export default function RulePuller(props) {

    pullData(props.dbPath)

    return (
        <Fragment/>
    )
}
