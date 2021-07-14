const grid = document.querySelector('.grid')

for (let i = 0; i < 225; i++) {
    let square = document.createElement("div")
    grid.appendChild(square)
}

let invaderID
let result = 0
let currentShooterIndex = 217
let currentInvaderIndex = 0
let deadInvaders = []
let direction = 1
let squares =  document.querySelectorAll('.grid div')
let width = 15

//define invaders
const invaders = [
    3, 4, 5, 6, 7, 8, 9, 10, 11,
    18, 19, 20, 21, 22, 23, 24, 25, 26,
    33, 34, 35, 36, 37, 38, 39, 40, 41
]

//draw invaders
invaders.forEach( invader => squares[currentInvaderIndex + invader].classList.add('invader'))

//draw shooter
squares[currentShooterIndex].classList.add('shooter')

spaceInvaders = () => {

    const resultDisplay = document.getElementById('result')

    //moving character
    moveShooter = (e) => {

        squares[currentShooterIndex].classList.remove('shooter')

        switch (e.keyCode) {
            case 37:
                if (currentShooterIndex % width !== 0) currentShooterIndex -=1
                break
            case 39:
                if (currentShooterIndex % width < width -1) currentShooterIndex +=1
                break
            case 81:
                if (currentShooterIndex % width !== 0) currentShooterIndex -=1
                break
            case 68:
                if (currentShooterIndex % width < width -1) currentShooterIndex +=1
                break
        }
        squares[currentShooterIndex].classList.add('shooter')
    }
    document.addEventListener('keydown', moveShooter)

    //move aliens
    moveInvaders = () => {


        const leftEdge = invaders[0] % width === 0
        const rightEdge = invaders[invaders.length -1] % width === width -1

        if ((leftEdge && direction === -1) || (rightEdge && direction === 1)){
            direction = width

        } else if (direction === width){
            if (leftEdge) direction = 1
            else direction = -1
        }

        for (let i = 0; i <= invaders.length -1; i++) {
            squares[invaders[i]].classList.remove('invader')
        }
        for (let i = 0; i <= invaders.length -1; i++) {
            invaders[i] += direction
        }
        for (let i = 0; i <= invaders.length -1; i++) {
            if (!deadInvaders.includes(i)) {
                squares[invaders[i]].classList.add('invader')
            }
        }

        //decide game over
        if (squares[currentShooterIndex].classList.contains('invader', 'shooter')){
            resultDisplay.textContent = 'Game Over'
            squares[currentShooterIndex].classList.remove('invader')
            squares[currentShooterIndex].classList.remove('shooter')
            squares[currentShooterIndex].classList.add('kill')
            clearInterval(invaderID)
        }

        for (let i = 0; i <= invaders.length -1; i++) {
            if (invaders[i] > (squares.length - (width-1))) {
                resultDisplay.textContent = 'Game Over'
                clearInterval(invaderID)
            }
        }

        //decide a win
        if (deadInvaders.length === 27){
            resultDisplay.textContent = 'You Win!'
            clearInterval(invaderID)
        }
    }
    invaderID = setInterval(moveInvaders, 500)


    //shooting
    shoot = (e) => {
        let laserId
        let currentLaserIndex = currentShooterIndex

        //moving laser up
        moveLaser = () => {
            squares[currentLaserIndex].classList.remove('laser')
            currentLaserIndex -= width
            squares[currentLaserIndex].classList.add('laser')
            if (squares[currentLaserIndex].classList.contains('invader')){
                squares[currentLaserIndex].classList.remove('laser')
                squares[currentLaserIndex].classList.remove('invader')
                squares[currentLaserIndex].classList.add('kill')

                setTimeout(() => squares[currentLaserIndex].classList.remove('kill'), 250)
                clearInterval(laserId)

                const deadInvader = invaders.indexOf(currentLaserIndex)
                deadInvaders.push(deadInvader)
                result++
                resultDisplay.textContent = result
            }

            if(currentLaserIndex < width) {
                clearInterval(laserId)
                setTimeout(() => squares[currentLaserIndex].classList.remove('laser'), 100)
            }
        }

        switch (e.keyCode) {
            case 32:
                laserId = setInterval(moveLaser, 100)
        }
    }

    document.addEventListener('keyup', shoot)
}

document.getElementById("run").addEventListener("click", spaceInvaders)
