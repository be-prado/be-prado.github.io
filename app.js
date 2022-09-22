'use strict'

const switcher = document.querySelector('.btn');


//switcher.addEventListener('click', function() {
//    document.body.classList.toggle('dark-theme')

//    var className = document.body.className;
//    if(className == "light-theme") {
//        this.textContent = "Dark";
//    }
//    else {
//        this.textContent = "Light";
//    }

//    console.log('current class name: ' + className);

//});

let current = 0;
let target = 0;
let ease = 0.1;

let windowWidth, containterHeight, sectionHeight, skewDiff;
let article = document.querySelector(".main_articles");

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}


//function smoothScroll() { 
//    current = lerp(current, target, ease);
//    current = parseFloat(current.toFixed(2));
//    window.scrollTo(0,current)
//    if (current - target < 0.1) {
//        window.scrollTo(target);
//        target = window.scrollY;
//        current = target;
//    }
//}
