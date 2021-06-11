import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
import { getPoint } from './score.js'
import { addPoint } from './score.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 2;

export function update() {
    getPoint()

    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        addPoint()
    }
}

export function draw(gameBoard) {

    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()

        return newFoodPosition
    }
}

