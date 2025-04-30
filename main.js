let header = document.getElementById('header');
let upArrow = document.getElementById('upArrow');
let footer = document.getElementById('footer');

upArrow.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function(){
    if(window.scrollY >= 10){
        header.style.borderColor = '#b800cc';
    }else{
        header.style.borderColor = '#181a1b';
    }
    if(window.scrollY >= 800){
        upArrow.style.display = 'block';
    }else{
        upArrow.style.display = 'none';
    }
}

const box = document.getElementById('box');

box.addEventListener('mousemove', (e) => {
    const boxRect = box.getBoundingClientRect(); 
    const boxWidth = boxRect.width;
    const boxHeight = boxRect.height;

    const mouseX = (e.clientX - boxRect.left) / boxWidth * 2 - 1; 
    const mouseY = (e.clientY - boxRect.top) / boxHeight * 2 - 1; 

    const rotateX = mouseY * 20;  
    const rotateY = -mouseX * 20; 

    box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
});

const box2 = document.getElementById('box2');

box2.addEventListener('mousemove', (e) => {
    const boxRect = box2.getBoundingClientRect(); 
    const boxWidth = boxRect.width;
    const boxHeight = boxRect.height;

    const mouseX = (e.clientX - boxRect.left) / boxWidth * 2 - 1; 
    const mouseY = (e.clientY - boxRect.top) / boxHeight * 2 - 1; 

    const rotateX = mouseY * 20;  
    const rotateY = -mouseX * 20; 

    box2.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
});

const box3 = document.getElementById('box3');

box3.addEventListener('mousemove', (e) => {
    const boxRect = box3.getBoundingClientRect(); 
    const boxWidth = boxRect.width;
    const boxHeight = boxRect.height;

    const mouseX = (e.clientX - boxRect.left) / boxWidth * 2 - 1; 
    const mouseY = (e.clientY - boxRect.top) / boxHeight * 2 - 1; 

    const rotateX = mouseY * 20;  
    const rotateY = -mouseX * 20; 

    box3.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
});

box.addEventListener('mouseleave', () => {
    box.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
});
box2.addEventListener('mouseleave', () => {
    box2.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
});
box3.addEventListener('mouseleave', () => {
    box3.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
});

let navList = document.getElementById('navList');
let navClose = document.getElementById('navClose');
let navUL = document.getElementById('navUL');

navList.onclick = function(){
    this.style.display = 'none';
    navClose.style.display = 'block';
    navUL.style.display = 'flex';
    header.style.height = '120px';
}
navClose.onclick = function(){
    this.style.display = 'none';
    navList.style.display = 'block';
    navUL.style.display = 'none';
    header.style.height = '80px';
}

function smoothScroll(targetId, offset = 0) {
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth' 
    });
}

let homeSec = document.getElementById('homeSec');
let abourSec = document.getElementById('abourSec');
let skillsSec = document.getElementById('skillsSec');
let projectSec = document.getElementById('projectSec');
let contactSec = document.getElementById('contactSec');

abourSec.style.display = 'none';
skillsSec.style.display = 'none';
projectSec.style.display = 'none';
contactSec.style.display = 'none';

homeSec.style.top = '80px';
abourSec.style.top = '140px';
skillsSec.style.top = '140px';
projectSec.style.top = '140px';
contactSec.style.top = '220px';

footer.style.position = 'relative';
footer.style.bottom = '0px';
footer.style.display = 'none';

skillsSec.style.marginBottom = '40px';
projectSec.style.marginBottom = '40px';
skillsSec.style.paddingBottom = '40px';
projectSec.style.paddingBottom = '40px';

document.getElementById('home').addEventListener('click', function() {
    //smoothScroll('homeSec');
    homeSec.style.display = 'block';
    abourSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none';
    if(window.width <= 744 && window.width >= 390){
        navClose.style.display = 'none';
        navList.style.display = 'block';
        navUL.style.display = 'none';
        header.style.height = '80px';
    }else{
        navClose.style.display = '';
        navList.style.display = '';
        navUL.style.display = 'flex';
        header.style.height = '74px';
    }
});

document.getElementById('about').addEventListener('click', function() {
    //smoothScroll('abourSec', 160);
    //navClose.style.display = 'none';
    //navList.style.display = 'block';
    //navUL.style.display = 'none';
    //header.style.height = '80px';
    homeSec.style.display = 'none';
    abourSec.style.display = 'block';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none';
    if(window.width <= 744 && window.width >= 390){
        navClose.style.display = 'none';
        navList.style.display = 'block';
        navUL.style.display = 'none';
        header.style.height = '80px';
    }else{
        navClose.style.display = '';
        navList.style.display = '';
        navUL.style.display = 'flex';
        header.style.height = '74px';
    }
});

document.getElementById('skills').addEventListener('click', function() {
    //smoothScroll('skillsSec', 160);
    //navClose.style.display = 'none';
    //navList.style.display = 'block';
    //navUL.style.display = 'none';
    //header.style.height = '80px';
    homeSec.style.display = 'none';
    abourSec.style.display = 'none';
    skillsSec.style.display = 'block';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none';
    if(window.width <= 744 && window.width >= 390){
        navClose.style.display = 'none';
        navList.style.display = 'block';
        navUL.style.display = 'none';
        header.style.height = '80px';
    }else{
        navClose.style.display = '';
        navList.style.display = '';
        navUL.style.display = 'flex';
        header.style.height = '74px';
    }
});

document.getElementById('projects').addEventListener('click', function() {
    //smoothScroll('projectSec', 160);
    //navClose.style.display = 'none';
    //navList.style.display = 'block';
    //navUL.style.display = 'none';
    //header.style.height = '80px';
    homeSec.style.display = 'none';
    abourSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'block';
    contactSec.style.display = 'none';
    if(window.width <= 744 && window.width >= 390){
        navClose.style.display = 'none';
        navList.style.display = 'block';
        navUL.style.display = 'none';
        header.style.height = '80px';
    }else{
        navClose.style.display = '';
        navList.style.display = '';
        navUL.style.display = 'flex';
        header.style.height = '74px';
    }
});

document.getElementById('contact').addEventListener('click', function() {
    //smoothScroll('contactSec');
    //navClose.style.display = 'none';
    //navList.style.display = 'block';
    //navUL.style.display = 'none';
    //header.style.height = '80px';
    homeSec.style.display = 'none';
    abourSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'block';
    if(window.width <= 744 && window.width >= 390){
        navClose.style.display = 'none';
        navList.style.display = 'block';
        navUL.style.display = 'none';
        header.style.height = '80px';
    }else{
        navClose.style.display = '';
        navList.style.display = '';
        navUL.style.display = 'flex';
        header.style.height = '74px';
    }
});
/*
document.getElementById('home2').addEventListener('click', function() {
    //smoothScroll('homeSec');
    homeSec.style.display = 'block';
    abourSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none'; 
});

document.getElementById('about2').addEventListener('click', function() {
    //smoothScroll('abourSec', 160);
    homeSec.style.display = 'none';
    abourSec.style.display = 'block';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none';
});

document.getElementById('skills2').addEventListener('click', function() {
    //smoothScroll('skillsSec', 160);
    homeSec.style.display = 'none';
    abourSec.style.display = 'none';
    skillsSec.style.display = 'block';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none'; 
});

document.getElementById('projects2').addEventListener('click', function() {
    //smoothScroll('projectSec', 160); 
    homeSec.style.display = 'none';
    abourSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'block';
    contactSec.style.display = 'none';
});

document.getElementById('contact2').addEventListener('click', function() {
    //smoothScroll('contactSec'); 
    homeSec.style.display = 'none';
    abourSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'block';
});
*/

