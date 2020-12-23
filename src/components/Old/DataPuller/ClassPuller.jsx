import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';

import { UPDATE_CLASSES } from './../../actions/appActions';

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

    const classQuery = knex({
        cl: 'Class'
    })

        .select({
            id: "cl.index",
            name: "cl.name",
            desc: "cl.desc",
        })

        .orderBy("cl.name", "asc");
    
    let dbQuery = classQuery;

    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_CLASSES, payload: rows });
    })
}


export const ClassPuller = (props) => {
    
    pullData(props.dbPath)
    
    return (
        <Fragment/>
    )
}
