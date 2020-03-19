/**
 * Array of columns for the Spell Table
 * - Contains all customizations
 *  - Including column widths
 * 
 * TODO: Spell Materials
 * TODO: Alt.Spell Names
 * TODO: Spell Levelling == > NESTED TABLES OR COLOURING
 */

/**
 * Components from 3rd-party Libraries
 */
import React from 'react'
import { Typography, Popover, Checkbox } from 'antd'

/**
 * Self-generated components
 */
import { Description } from './Description'

export const getSpellTableColumns = (abilityScores, getSaveFilters) => {

    let columns = [
        {
            /**
             * - Displays spell name in bold
             * - Allows names to be ordered in ascending/descending order of alphabet 
             */
            dataIndex: "name",
            title: "Name",
            key: "id",
            width: '10%',
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['descend'],
            render: (content, item) => {
                return (
                    <Typography.Text
                        strong={true}
                    >
                        {
                            item.name
                        }
                    </Typography.Text>
                )
            }
        },

        {
            /**
             * - Displays spell description
             *  - Short desc. and long desk on mouseover
             * - TODO: Keyword Highlighting
             * TODO: FIX DESCRIPTION POPUP SHADOW *
             */
            dataIndex: "shortDesc",
            title: "Description",
            width: '35%',
            render: (content, item) => {
                return (
                    <Popover
                        trigger="hover"
                        arrowPointAtCenter={true}
                        placement="right"
                        overlayStyle={{
                            maxWidth: '400px',
                            maxHeight: '250px',
                            overflowY: 'auto',
                        }}
                        content={
                            <Description
                                fullDesc={item.fullDesc}
                                altName={item.altName}
                                highLevelDesc={item.highLevelDesc}
                            />
                        }
                    >
                        <Typography.Text>
                            {content}
                        </Typography.Text>
                    </Popover>
                    
                )
            }
        },

        {
            /**
             * Displays spell range
             */
            dataIndex: "range",
            title: "Range",
            width: '7%',
        },

        {
            /**
             * Displays spell casting time
             */
            dataIndex: "castingTime",
            title: "Time",
            width: '8%',
        },

        {
            /**
             * Confirm whether spell requires Concentration
             */
            dataIndex: "concentration",
            title: "Conc.",
            width: '8%',
            render: (content, item) => {
                return (
                    <Checkbox
                        checked={item.concentration === 1 ? true : false}
                        disabled={item.concentration === 0 ? true : false}
                    />
                )
            },
            /**
             * Filter by..
             * - Concentration
             * - Non-Concentration
             */
            filters: [
                {
                    text: "Non-Concentration",
                    value: 0
                },
                {
                    text: "Concentration",
                    value: 1
                }
            ],
            onFilter: (content, item) => item.concentration === content,
            align: 'center',
        },

        {
            /**
             * Confirm whether spell is a Ritual spell
             * - Checked for ritual spells, and unchecked for non-ritual spells
             */
            dataIndex: "ritual",
            title: "Ritual",
            width: '8%',
            render: (content, item) => {
                return (
                    <Checkbox
                        checked={item.ritual === 1 ? true : false}
                        disabled={item.ritual === 0 ? true : false}
                    />
                )
            },
            /**
             * Filter by...
             * - Ritual
             * - Non-Ritual
             */
            filters: [
                {
                    text: "Non-Ritual",
                    value: 0
                },
                {
                    text: "Ritual",
                    value: 1
                }
            ],
            onFilter: (content, item) => item.ritual === content,
            align: 'center'
        },

        {
            /**
             * Displays spell Save ability
             */
            dataIndex: "save",
            title: "Save",
            width: '8%',
            render: (content, item) => {
                return (
                    <Typography.Text
                        type="warning"
                    >
                        {
                            abilityScores.filter(aScore => aScore.id === item.save).length !== 0 ?
                                abilityScores.filter(aScore => aScore.id === item.save)[0].abbr
                            :
                                ""
                        }
                    </Typography.Text>
                )
            },
            align: 'center',
            /**
             * Filter by each available ability score
             */
            filters: getSaveFilters(abilityScores),
            onFilter: (content, item) => item.save === content 
        },

        {
            /**
             * Displays spell components
             */
            dataIndex: "components",
            title: "Comp.",
            width: '6%',
        },

        {
            /**
             * Displays spell duration
             */
            dataIndex: "duration",
            title: "Duration",
            width: '10%',
        },
    ]

    return columns
}