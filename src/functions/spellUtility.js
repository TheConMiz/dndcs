import { uniqBy } from 'lodash'

export const getSpellLevels = (spells) => {
    let temp = []
    let levelList = []

    spells.forEach(spell => {

        temp.push(
            Object.assign({}, {}, {
                key: spell.level,
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

export const getMagicSchoolFilters = (magicSchools) => {
    
    let filters = []

    magicSchools.map(item => {
        let temp = Object.assign({}, {
            text: item.abbr,
            value: item.id
        })

        filters.push(temp)
    })

    return filters
}

export const sortSpells = (spells) => {
    let sortedSpells = spells.slice().sort((first, second) => {

        if (first.name.toUpperCase() > second.name.toUpperCase()) {
            return 1
        }
        
        else if (first.name.toUpperCase() < second.name.toUpperCase()) {
            return -1
        }
        
        else {
            return 0
        }
    })

    return sortedSpells
}