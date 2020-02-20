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
} from './../../actions/rulesActions';

const pullData = (dbPath) => {
    
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
            id: "as.index",
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
    
    
    const conditionQuery = knex({
        cond: 'Rule-Condition'
    })

        .select({
            name: "cond.name",
            desc: "cond.desc",
            id: "cond.index"
        })

        .orderBy("cond.name", "asc");


    const damageTypeQuery = knex({
        dType: 'Rule-Damage-Type'
    })

        .select({
            name: "dType.name",
            desc: "dType.desc",
            id: "dType.index"
        })

        .orderBy("dType.name", "asc");


    const magicSchoolQuery = knex({
        mSchool: 'Rule-Magic-School'
    })

        .select({
            name: "mSchool.name",
            desc: "mSchool.desc",
            id: "mSchool.index",
            abbr: "mSchool.abbr"
        })

        .orderBy("mSchool.abbr", "asc");


    const spellComponentQuery = knex({
        sComp: 'Rule-Magic-Spell-Component'
    })

        .select({
            name: "sComp.name",
            desc: "sComp.desc",
            id: "sComp.index",
            abbr: "sComp.abbr"
        })

        .orderBy("sComp.name", "asc");


    const sourceQuery = knex({
        src: 'Rule-Source'
    })

        .select({
            name: "src.name",
            abbr: "src.abbr",
            id: "src.index"
        })

        .orderBy("src.name", "asc");
    
    
    
    let dbQuery = abilityScoreQuery;
    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_ABILITY_SCORE, payload: rows });
    })

    dbQuery = levelQuery
    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_LEVEL, payload: rows });
    })

    dbQuery = conditionQuery
    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_CONDITION, payload: rows });
    })

    dbQuery = damageTypeQuery
    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_DAMAGE_TYPE, payload: rows });
    })

    dbQuery = magicSchoolQuery
    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_MAGIC_SCHOOL, payload: rows });
    })

    dbQuery = spellComponentQuery
    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_SPELL_COMPONENT, payload: rows });
    })

    dbQuery = sourceQuery
    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_SOURCE, payload: rows });
    })
}

export default function RulePuller(props) {

    pullData(props.dbPath)

    return (
        <Fragment/>
    )
}
