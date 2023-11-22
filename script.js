const knight = document.querySelector(".knight");
const bomb = document.querySelector(".bomb");
const explosion = document.querySelector(".explosion");
const up = document.querySelector(".up");
const explosionSound = new Audio('./sounds/explosionSound.mp3');
const jumpSound = new Audio ('./sounds/jump.mp3');

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if (event.key === " ") {
        if (knight.classList != "jump"){
            knight.classList.add("jump");
            jumpSound.play();
        }

        setTimeout(() => {
            knight.classList.remove("jump");
        }, 700);
    }      
})

up.addEventListener("click", function(event) {
    if (knight.classList != "jump"){
        knight.classList.add("jump");
        jumpSound.play();
    }
    setTimeout(() => {
        knight.classList.remove("jump");
    }, 700);     
})

const checkDead = setInterval(() => {
    const knightTop = parseInt(window.getComputedStyle(knight).getPropertyValue("top"));
    const bombLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue("left"));

    if (bombLeft > 50 && bombLeft < 193 && knightTop > 200 ) {

        explosionSound.play();
        knight.classList.remove('knight');
        explosion.classList.add('fire');
        bomb.classList.remove('bomb');
        setTimeout(() => {
            knight.classList.add('knight');
            explosion.classList.remove('fire');
            bomb.classList.add('bomb')
            // alert("You lose! Try again?");
        }, 500);
    }
}, 10);
