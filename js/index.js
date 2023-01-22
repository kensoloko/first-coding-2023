const textShadowColor = ['white','green','orange','pink','violet','blue','red','yellow'];
const CLASS_NAME_BG = 'background__page';
const CLASS_NAME_WISH_CONTENT = 'content__wish';
const CLASS_NAME_SNOW = 'snow';
const BEST_WISHES = [
    'Life is full of struggles and every day brings new challenges before us. To overcome those situations and achieve our desired success, we need support and appreciation from our close ones. Support can be given in many forms, even though the best wishes and encouraging messages. A message containing inspiring words, heartwarming wishes, and genuine thoughts is enough to boost up a person’s confidence and courage. Check out these simple best wishes and all the best messages below if you are looking for the perfect, heart-touching phrases to wish good luck to someone!'
];

let lastAddedClass = null;
changeWish(BEST_WISHES[0]);
changeColor(randomNumber(textShadowColor.length));

function randomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function changeColor(number) {
    const contentWish = document.querySelector(`.${CLASS_NAME_WISH_CONTENT}`);
    if (lastAddedClass) {
        contentWish.classList.remove(lastAddedClass);
    }
    contentWish.classList.add(textShadowColor[number]);
}

function changeWish(content) {
    const contentWish = document.querySelector(`.${CLASS_NAME_WISH_CONTENT}`);
    contentWish.innerHTML = content;
}

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

function initNightAndShootingStar() {
    const body = document.body;
    const night = document.createElement('div');
    night.className = 'night';
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting_star';
    for (let i = 0; i < 20; i++) {
        night.appendChild(shootingStar);
    }
    body.prepend(night);
}
