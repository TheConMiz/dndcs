export const findMaxLevel = (levels) => {
    let max = -Infinity

    let finalMaxLevel

    levels.map((level) => {
        if (max < level.xp) {
            max = level.xp
            finalMaxLevel = level
        }
    })
    
    return finalMaxLevel
}

export const findCurrentLevel = (currentXP, levels) => {
    let difference = Infinity

    let currentLevel

    levels.map((level) => {
        if ((currentXP - level.xp >= 0) && (currentXP - level.xp < difference)) {
            difference = currentXP - level.xp
            currentLevel = level
        }
    })

    return currentLevel
}

export const findNextLevel = (currentXP, levels) => {
    let currentLevel = findCurrentLevel(currentXP, levels)

    let maxLevel = findMaxLevel(levels)

    console.log(currentLevel, maxLevel)

    let nextLevel

    if (typeof (currentLevel) !== "undefined" && typeof (maxLevel) !== "undefined") {
        if (currentLevel.level < maxLevel.level) {
            nextLevel = levels.find((level) => level.level === currentLevel.level + 1)
        }

        else if (currentLevel.level >= maxLevel.level) {
            nextLevel = levels.find((level)=> level.level === maxLevel.level)
        }        
    }

    return nextLevel
    
}