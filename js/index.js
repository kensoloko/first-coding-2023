const MAX_SNOW_BALL = 300;
const textShadowColor = ['white','green','orange','pink','violet','blue','red','yellow'];
const color = ['#0c0f0a','#1fd224','#ffaa01','#ff00aa','#aa00ff','#00aaff','#f00','#ffea00'];
const CLASS_NAME_BG = 'backgound__page';
const CLASS_NAME_WISH_CONTENT = 'content__wish';
const CLASS_NAME_SNOW = 'snow';
let lastAddedClass = null;

initSnow(MAX_SNOW_BALL);
changeColor(0);
setInterval(() => {
    changeColor(randomNumber(textShadowColor.length))
}, 5000);


function initSnow(numberOfSnow) {
    const bg = document.getElementsByClassName(CLASS_NAME_BG)[0];
    for (let i = 0; i < numberOfSnow; i++) {
        const snow = document.createElement('span');
        snow.classList.add(CLASS_NAME_SNOW);

        switch(true) {
            case i % 5 === 0:
                snow.classList.add('snowAnimation0');
                break;
            
            case i % 5 === 1:
                snow.classList.add('snowAnimation1');
                break;

            case i % 5 === 2:
                snow.classList.add('snowAnimation2');
                break;

            case i % 5 === 3:
                snow.classList.add('snowAnimation3');
                break;

            case i % 5 === 4:
                snow.classList.add('snowAnimation4');
                break;
            default:
                snow.classList.add('snowAnimation5');
                break; 
        }

        const left = -50 + randomNumber(150);
        const delay = randomNumber(20);
        const animationDuration = 5 + randomNumber(10) + Math.random() + 0.5;
        const opacity = randomNumber(10) * 0.1;
        const edge = randomNumber(10) + 5;
        snow.style.width = `${edge}px`;
        snow.style.height = `${edge}px`;
        snow.style.left = `${left}%`;
        snow.style.animationDelay = `${delay}s`;
        snow.style.animationDuration = `${animationDuration}s`;
        snow.style.opacity = `${opacity}`;
        bg.appendChild(snow);
    }
}

function randomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function changeColor(number) {
    const contentWish = document.querySelector(`.${CLASS_NAME_WISH_CONTENT}`);
    if (lastAddedClass) {
        contentWish.classList.remove(lastAddedClass);
    }
    contentWish.classList.add(textShadowColor[number]);

    const snows = document.querySelectorAll(`.${CLASS_NAME_SNOW}`);
    snows.forEach((e) => {
        if (lastAddedClass) {
            e.classList.remove(lastAddedClass);
        }
        e.classList.add(`snow-${textShadowColor[number]}`);
    });
    lastAddedClass = textShadowColor[number];
}
