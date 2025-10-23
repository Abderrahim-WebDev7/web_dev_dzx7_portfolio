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
        header.style.backgroundColor = '#000000';
    }else{
        header.style.borderColor = '';
        header.style.backgroundColor = '#00000000';
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
let aboutSec = document.getElementById('aboutSec');
let skillsSec = document.getElementById('skillsSec');
let projectSec = document.getElementById('projectSec');
let contactSec = document.getElementById('contactSec');

aboutSec.style.display = 'none';
skillsSec.style.display = 'none';
projectSec.style.display = 'none';
contactSec.style.display = 'none';

homeSec.style.top = '80px';
aboutSec.style.top = '140px';
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
    aboutSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none';
    
    // إزالة active من كل العناصر
    document.querySelectorAll('#navUL li').forEach(item => {
        item.classList.remove('active');
    });
    // إضافة active على العنصر المضغوط
    this.classList.add('active');
    
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
    aboutSec.style.display = 'block';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none';
    
    // إزالة active من كل العناصر
    document.querySelectorAll('#navUL li').forEach(item => {
        item.classList.remove('active');
    });
    // إضافة active على العنصر المضغوط
    this.classList.add('active');
    
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
    aboutSec.style.display = 'none';
    skillsSec.style.display = 'block';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none';
    
    // إزالة active من كل العناصر
    document.querySelectorAll('#navUL li').forEach(item => {
        item.classList.remove('active');
    });
    // إضافة active على العنصر المضغوط
    this.classList.add('active');
    
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
    aboutSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'block';
    contactSec.style.display = 'none';
    
    // إزالة active من كل العناصر
    document.querySelectorAll('#navUL li').forEach(item => {
        item.classList.remove('active');
    });
    // إضافة active على العنصر المضغوط
    this.classList.add('active');
    
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
    aboutSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'block';
    
    // إزالة active من كل العناصر
    document.querySelectorAll('#navUL li').forEach(item => {
        item.classList.remove('active');
    });
    // إضافة active على العنصر المضغوط
    this.classList.add('active');
    
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

// تأثير الكتابة المتحركة
const typingText = document.querySelector('.typing-text');
const texts = ['full stack dev', 'web app dev'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        // حذف الحروف
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // كتابة الحروف
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed = 50; // سرعة الحذف
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        // انتظار قبل الحذف
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // الانتقال للنص التالي
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// بدء التأثير عند تحميل الصفحة
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
    // جعل العنصر home نشطاً افتراضياً
    //document.getElementById('home').classList.add('active');
});
/*
const navItems = document.querySelectorAll("#navUL li");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        // إزالة active من كل العناصر
        navItems.forEach(i => i.classList.remove("active"));
        // إضافة active على العنصر المضغوط
        item.classList.add("active");
        // الانتقال للسطر المطلوب
        document.getElementById(item.id + "Sec")?.scrollIntoView({ behavior: "smooth" });
    });
});*/


function showSuccessMessage() {
    const msg = document.getElementById('successMessage');
    if (!msg) return;
    msg.style.display = 'block';
    setTimeout(() => {
        msg.style.display = 'none';
    }, 3000);
}

// مثال: استدعِ showSuccessMessage بعد نجاح النسخ
function copyToClipboard(svgElement, text) {
    navigator.clipboard.writeText(text).then(() => {
        svgElement.classList.add('copied');
        showSuccessMessage();
        setTimeout(() => svgElement.classList.remove('copied'), 1500);
    });
}


navList.style.display = 'none';
navClose.style.display = 'none';

let home2 = document.getElementById('home2');
let about2 = document.getElementById('about2');
let skills2 = document.getElementById('skills2');
let project2 = document.getElementById('project2');
let contact2 = document.getElementById('contact2');

// ربط footerNav بنفس وظائف التنقل للشاشات الصغيرة
function setupFooterNav() {
    const footerNavItems = document.querySelectorAll('#footerNav li');
    
    footerNavItems.forEach(item => {
        item.addEventListener('click', function() {
            // إزالة active من كل العناصر في كلا الشريطين
            document.querySelectorAll('#navUL li, #footerNav li').forEach(li => {
                li.classList.remove('active');
            });
            
            // إضافة active على العنصر المضغوط في كلا الشريطين
            this.classList.add('active');
            const correspondingNavItem = document.querySelector(`#navUL #${this.id}`);
            if (correspondingNavItem) {
                correspondingNavItem.classList.add('active');
            }
            
            // تنفيذ نفس منطق التنقل
            const sectionId = this.id + 'Sec';
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                // إخفاء جميع الأقسام
                document.querySelectorAll('section[id$="Sec"]').forEach(sec => {
                    sec.style.display = 'none';
                });
                
                // إظهار القسم المطلوب
                targetSection.style.display = 'block';
            }
        });
    });
}

// تهيئة footerNav عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', setupFooterNav);
/*
let about = document.getElementById('about');
about.onclick = function(){
    aboutSec.style.display = 'block';
    homeSec.style.display = 'none';
    skillsSec.style.display = 'none';
    projectSec.style.display = 'none';
    contactSec.style.display = 'none';
}*/
navClose.style.display = 'none';
navList.style.display = 'none';
let menuDv = document.getElementById('menuDv');
menuDv.style.display = 'none';
