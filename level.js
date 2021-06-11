export const LEVEL_DIV = document.getElementById('level')
var level = 1

export function getLevel() {
    LEVEL_DIV.innerHTML = level
}

export function addLevel() {
    let newLevel = level++;
    LEVEL_DIV.innerHTML = newLevel
}