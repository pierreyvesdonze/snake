export const SCORE_DIV = document.getElementById('score')
var score = 0

export function getPoint() {
    SCORE_DIV.innerHTML = score
}

export function addPoint() {
    let newScore = score++;
    SCORE_DIV.innerHTML = newScore
}