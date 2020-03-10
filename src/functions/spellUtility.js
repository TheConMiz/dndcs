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