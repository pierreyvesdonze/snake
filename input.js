let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break;
    }
})

//MOBILE
document.getElementById('control-up').addEventListener('click', function () {
    if (lastInputDirection.y !== 0) {
        return false
    }
    inputDirection = { x: 0, y: -1 }
})
document.getElementById('control-down').addEventListener('click', function () {
    if (lastInputDirection.y !== 0) {
        return false
    }
    inputDirection = { x: 0, y: 1 }
})
document.getElementById('control-left').addEventListener('click', function () {
    if (lastInputDirection.x !== 0) {
        return false
    }
    inputDirection = { x: -1, y: 0 }
})
document.getElementById('control-right').addEventListener('click', function () {
    if (lastInputDirection.x !== 0) {
        return false
    }
    inputDirection = { x: 1, y: 0 }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}