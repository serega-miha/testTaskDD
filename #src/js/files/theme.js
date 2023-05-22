




// const header = document.querySelector('header'),
//     wrapper = document.querySelector('.wrapper'),
//     bodyTheme = document.body,
//     allTheme = document.querySelectorAll('.theme'),
//     footer = document.querySelector('footer'),
//     pageCatalog = document.querySelector('toggle-box-header');
    




const themeBtn = document.querySelector('.toggle-box input'),
     allTheme = document.querySelectorAll('.theme'),
     menuLogo = document.querySelector('.menu__logo img'),
     bodyTheme = document.body,
     mainImg = document.querySelector('.title-img img'),
     footerLogo = document.querySelector('.footer__logo img');

  

themeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
   
    
    allTheme.forEach(theme =>{
        theme.classList.toggle('dark');
        
    });
    if (bodyTheme.classList.contains('dark')){   
        menuLogo.setAttribute('src', './img/header/AppleVsXiomiLogoInv.png');
        footerLogo.setAttribute('src', './img/header/AppleVsXiomiLogoInv.png');
        mainImg.setAttribute('src', './img/header/bP7nzxj5Zks.jpg');
    }else{
        menuLogo.setAttribute('src', './img/header/AppleVsXiomiLogoWhite.png');
        footerLogo.setAttribute('src', './img/header/AppleVsXiomiLogoWhite.png');
        mainImg.setAttribute('src', './img/header/bP7nzxj5ZksWhite.jpg');
    }
    
})