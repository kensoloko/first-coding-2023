const textShadowColor = ['white','green','orange','pink','violet','blue','red','yellow'];
const CLASS_NAME_BG = 'background__page';
const CLASS_NAME_WISH_CONTENT = 'content__wish';
const CLASS_NAME_SNOW = 'snow';
const BEST_WISHES = [
    `May your life be full of happiness, success, and love. Sending my best wishes to you!`,
    `All the best for all your future endeavors! Hoping that your hard work always brings out the best results for you.`,
    `I pray for a happy, healthy, and prosperous life for you. May God always bless you and help you. Best wishes!`,
    `Life might throw challenges at you, but you are the one in charge of your future! Good luck!`,
    `May good fortune always accompanies you in every venture of your life! All the best for your prosperous journey ahead!`,
    `Happiness in life is not permanent so when you have happy moments in life, enjoy it to the limits and forget every sadness.
        Wish you all the best for coming days`,
    `Wishing you nothing but health, wealth, and endless blessings in the New Year ahead.`,
    `I wish you a very good luck for what you have planned in life. May your all the plans work out.
        Best of luck for every coming test of life.`,
    `May the new year bring you warmth, love, and light to guide your path to a positive destination`,
    `On this New Year, may you change your direction and not dates, change your commitments and not the calendar, change your attitude and not the actions, and bring about a change in your faith, your force, and your focus and not the fruit. May you live up to the promises you have made and may you create for you and your loved ones the happiest New Year ever.`,
    `Wishing you 12 months of success, 52 weeks of laughter, 365 days of fun, 8,760 hours of joy, 525,600 minutes of good luck, and 31,536,000 seconds of happiness.`,

    `Wishing you a Happy New Year with the hope that you will have many blessings in the year to come.`,
    `Out with the old, in with the new: may you be happy the whole year through. Happy New Year!`,
    `May the closeness of your loved ones, family, and friends fill your heart with joy. Happy New Year!`,
    `Forget your problems, sadness and worries and wake up fresh with happiness and new hopes. I wish that you get all the hopes completed and may you have no problem in your life.
        I wish you best of luck for the future.`,
    `May you always get what you want and may you be at the right place. 
        I wish you a very good luck for the future and may you have a wonderful life with no worries.`,
    `We're so grateful that you could be here to celebrate the holidays with us and share in our good cheer! May our hopeful wishes follow you home and warm you through the new year.`,
    `Happy New Year! We know that this past year has been full of challenges, and we pray that the coming year brings brighter days. Sending all our love and good wishes.`,
    `In an extraordinary year, I’ve been grateful for your extraordinary friendship…. thank you. And cheers to new beginnings!`,
    `Wishing you and yours some well-deserved downtime and a very happy new year to come.`
];
const RANDOM_BG = ['bg.png', 'bg01.jpg', 'bg02.jpg', 'bg03.jpg', 'bg04.jpg', 'bg05.jpg', 'bg06.jpg', 'bg07.jpg', 'bg08.jpg', 'bg09.jpg', 'bg10.jpg'];

let lastAddedClass = null;
changeBg(RANDOM_BG[randomNumber(RANDOM_BG.length)])
changeWish(BEST_WISHES[randomNumber(BEST_WISHES.length)]);
checkContentWishLength();


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

function changeBg(bgFileName) {
    const body = document.body;
    const url = `images/${bgFileName}`;
    body.style.background = `url(${url}) no-repeat center center`;
    body.style.backgroundSize = 'cover';
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

function checkContentWishLength() {
    const contentWish = document.querySelector(`.${CLASS_NAME_WISH_CONTENT}`);
    const content = document.querySelector(`.content`);
    console.log(contentWish.clientHeight);
    console.log(content.clientHeight);
    if (contentWish.clientHeight < content.clientHeight) {
        content.classList.add('d-flex-center');
    } else {
        contentWish.style.marginTop = '10%';
        contentWish.style.marginBottom = '10%';
    }
}
