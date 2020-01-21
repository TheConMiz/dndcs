import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import {
    UPDATE_RULE_ABILITY_SCORE,
    UPDATE_RULE_CONDITION,
    UPDATE_RULE_DAMAGE_TYPE,
    UPDATE_RULE_SPELL_COMPONENT,
    UPDATE_RULE_MAGIC_SCHOOL,
    UPDATE_RULE_LEVEL,
    UPDATE_RULE_SOURCE,
} from './../actions/rulesActions';

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


    const levelQuery = knex({
        lvl: 'Rule-Level'
    })

        .select({
            level: "lvl.level",
            xp: "lvl.xp",
        })

        .orderBy("lvl.level", "asc");
    
    


    

    let dbQuery = abilityScoreQuery;

    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_ABILITY_SCORE, payload: rows });
    })

    dbQuery = levelQuery
    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_LEVEL, payload: rows });
    })
    
}

export default function RulePuller(props) {

    pullData(props.dbPath)

    return (
        <Fragment/>
    )
}
