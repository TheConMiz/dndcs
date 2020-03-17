import { uniqBy } from 'lodash'

export const getSpellLevels = (spells) => {
    let temp = []
    let levelList = []

    spells.forEach(spell => {

        temp.push(
            Object.assign({}, {}, {
                key: spell.level,
                // tab: spell.level === 0 ? "Cantrips" : "Level " + spell.level
            })
        )

    })

    levelList = uniqBy(temp, 'key')

    levelList = levelList.sort((a, b)=> {return a.key - b.key})

    return levelList
}

export const getSaveFilters = (abilityScores) => {
    let filters = []

    abilityScores.map(item => {
        let temp = Object.assign({}, {
            text: item.abbr,
            value: item.id
        })

        filters.push(temp)
    })

    return filters
}