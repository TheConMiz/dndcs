import React, { useState, useEffect } from 'react';

import { Paper } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/styles';

import Select from 'react-select';

import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 0,
        height: 250,
        width: 300,
    }    
}));

export default function ClassDisplay() {

    const classes = useStyles();

    const dbPath = useSelector(state => state.app.dbPath);

    const [classList, setClassList] = useState([]);
    const [subClassList, setSubClassList] = useState([]);
    
    const dataPull = () => {
        const knex = window.require('knex')({
            client: "sqlite3",
            connection: {
                filename: dbPath
            },
            useNullAsDefault: true,
            debug: true
        });

        let dbQuery = knex({
            cl: 'Classes'
        })
            .select({
                className: "cl.name",
                classID: "cl.index",
                classSrc: "cl.src"
            })
            .orderBy("cl.name", "asc");

        dbQuery.then((rows) => {
            let temp = rows.map(item => {
                return (
                    {
                        value: item,
                        label: item.className
                    }
                );
            })
            setClassList(temp);
        });
        // dbQuery = knex({
        //     subCl: 'Subclasses'
        // })
        //     .select({
        //         subClassName: "subCl.name",
        //         subClassID: "subCl.index",
        //         classID: "subCl.classID",
        //         subClassDesc: "subCl.desc",
        //         subClassSrc: "subCl.src"
        //     })
        //     .orderBy("subCl.name", "asc");

        // dbQuery.then((rows) => {
        //     let temp = rows.map(item => {
        //         return (
        //             {
        //                 value: item,
        //                 label: item.subClassName
        //             }
        //         );
        //     })
        //     setSubClassList(temp);
        // });
    }

    /**
     * React Hook API equivalent to ComponentDidMount
     * On component mount, run dataPull
     **/ 
    useEffect(dataPull, []);

    return (
        <div className={classes.root}>
            <Select
                placeholder="Select Class(es)"
                isMulti
                options={classList}
            />
        </div>
        
    );
}