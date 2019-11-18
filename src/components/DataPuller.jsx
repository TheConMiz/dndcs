import React, { Fragment } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { UPDATE_RULE_LEVEL } from './../actions/rulesActions';

import { UPDATE_SPELLS } from './../actions/appActions';


function saveDataToRedux(dbPath) {

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

    const spellQuery = knex({
        sp: "Spell"
    })
        .select({
            name: "sp.name",
            level: "sp.level",
            id: "sp.index",
            school: "sp.schoolID"
        })

        .orderBy("sp.name", "asc");

    let dbQuery = levelQuery;

    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_LEVEL, payload: rows });
    })

    dbQuery = spellQuery;

    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_SPELLS, payload: rows })
    })

}

function pullData() {
    const dbPath = useSelector(state => state.app.dbPath);
    saveDataToRedux(dbPath);
}

export default function DataPuller() {
    
    pullData();

    return (
        <Fragment/>
    );
}