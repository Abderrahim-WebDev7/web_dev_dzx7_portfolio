let header = document.getElementById('header');
let upArrow = document.getElementById('upArrow');

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

document.getElementById('home').addEventListener('click', function() {
    smoothScroll('homeSec'); 
});

document.getElementById('about').addEventListener('click', function() {
    smoothScroll('abourSec', 160);
});

document.getElementById('skills').addEventListener('click', function() {
    smoothScroll('skillsSec', 160); 
});

document.getElementById('projects').addEventListener('click', function() {
    smoothScroll('projectSec', 160); 
});

document.getElementById('contact').addEventListener('click', function() {
    smoothScroll('contactSec'); 
});

document.getElementById('home2').addEventListener('click', function() {
    smoothScroll('homeSec'); 
});

document.getElementById('about2').addEventListener('click', function() {
    smoothScroll('abourSec', 160);
});

document.getElementById('skills2').addEventListener('click', function() {
    smoothScroll('skillsSec', 160); 
});

document.getElementById('projects2').addEventListener('click', function() {
    smoothScroll('projectSec', 160); 
});

document.getElementById('contact2').addEventListener('click', function() {
    smoothScroll('contactSec'); 
});
