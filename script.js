const velocity = 2;
let positionX = 0;
let reverse = false;
const ball = document.getElementById("reverseBall");
const ball2 = document.getElementById("moveableBall");

function moveBall() {
    const ballWidth = ball.offsetWidth;
    const maxPosition = window.innerWidth - ballWidth;

    positionX += reverse ? -velocity : velocity;

    if (positionX >= maxPosition) {
        positionX = maxPosition;
        reverse = true;
    } else if (positionX <= 0) {
        positionX = 0;
        reverse = false;
    }

    ball.style.left = `${positionX}px`;
    ball2.style.right = `${positionX}px`;
}

setInterval(moveBall, 16);