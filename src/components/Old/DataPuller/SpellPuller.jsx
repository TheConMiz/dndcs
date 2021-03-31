import React, { Fragment } from 'react'

import { useDispatch } from 'react-redux';

import { UPDATE_SPELLS } from './../../../actions/appActions';


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

    /**
     * Variable for adding descriptions, saves to spells from the database  
     */
    let tempSpells = []

    /**
     * Default Spell Query
     */
    let spellQuery = knex({
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
            save: "Spell-Save.saveID",
            duration: "sp.duration",
            highLevelDesc: "Spell-Description-HighLevel.desc"
        })

        .join('Spell-Description-Short', { 'sp.index': 'Spell-Description-Short.spellID' })

        .leftOuterJoin('Spell-Material', { 'sp.index': 'Spell-Material.spellID' })

        .leftOuterJoin('Spell-Name-Alt', { 'sp.index': 'Spell-Name-Alt.spellID' })

        .leftOuterJoin('Spell-Type-Concentration', { 'sp.index': 'Spell-Type-Concentration.spellID' })
        
        .leftOuterJoin('Spell-Type-Ritual', { 'sp.index': 'Spell-Type-Ritual.spellID' })

        .leftOuterJoin('Spell-Save', { 'sp.index': 'Spell-Save.spellID' })

        .leftOuterJoin('Spell-Description-HighLevel', { 'sp.index': 'Spell-Description-HighLevel.spellID' })

        .orderBy("sp.name", "asc");
    
    let dbQuery = spellQuery;
    dbQuery.then((rows) => {
        tempSpells = rows;
    })


    let fullDescQuery = knex({
        fDesc: "Spell-Description-Full"
    })
        .select({
            spellID: "fDesc.spellID",
            lineID: "fDesc.lineID",
            desc: "fDesc.desc",
        })
        
        .orderBy(["fDesc.spellID", "fDesc.lineID"], "asc");
    
    /**
     * TODO: Get Spell Components
     */
    
    // let componentQuery = knex({
    //     spellComp: "Spell-"
    // })
    //     .select({
    //         spellID: "spellComp.spellID",
    //         lineID: "spellComp.lineID",
    //         desc: "spellComp.desc",
    //     })

    //     .orderBy(["fDesc.spellID", "fDesc.lineID"], "asc");

    /**
     * TODO: Spell School
     */
    
    dbQuery = fullDescQuery

    /**
     * Inclusion of Full descriptions
     */
    dbQuery.then((rows) => {
        tempSpells.map((item) => {
            let descriptions = rows.filter(row => row.spellID === item.id).map((desc) => {
                return desc.desc
            })

            item.fullDesc = descriptions
        })
    })

    let spellClassMapQuery = knex({
        spellClassMap: "Spell-Map-Class"
    })
        .select({
            spellID: "spellClassMap.spellID",
            classID: "spellClassMap.classID",
        })
        .orderBy("spellClassMap.spellID", "asc");
    
    dbQuery = spellClassMapQuery

    dbQuery.then((rows) => {
        tempSpells.map((item) => {
            let classes = rows.filter(row => row.spellID === item.id).map((mapItem) => {
                return mapItem.classID
            })

            item.classMap = classes
        })
    })

    let spellSourceQuery = knex({
        spellSource: "Spell-Source"
    })
        .select({
            spellID: "spellSource.spellID",
            sourceID: "spellSource.sourceID",
        })
        .orderBy("spellSource.spellID", "asc");
    
    dbQuery = spellSourceQuery

    dbQuery.then((rows) => {
        tempSpells.map((item) => {
            let sources = rows.filter(row => row.spellID === item.id).map((mapItem) => {
                return mapItem.sourceID
            })

            item.sources = sources
        })
        dispatch({ type: UPDATE_SPELLS, payload: tempSpells })
    })

    let spellComponentQuery = knex({
        spellComponent: "Spell-Component"
    })
        .select({
            spellID: "spellComponent.spellID",
            componentID: "spellComponent.componentID",
        })
        .orderBy("spellComponent.spellID", "asc");

    dbQuery = spellComponentQuery

    dbQuery.then((rows) => {

        tempSpells.map((item) => {
            let components = rows.filter(row => row.spellID === item.id).map((mapItem) => {
                return mapItem.componentID
            })

            item.components = components
        })
        dispatch({ type: UPDATE_SPELLS, payload: tempSpells })
    })

}

export default function SpellPuller(props) {

    pullData(props.dbPath)

    return (
        <Fragment/>
    )
}
