


//прокрутка к якорям

const btnCategories = document.querySelectorAll('[data-scroll]');




btnCategories.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let screenWidth = window.screen.width;
        if (screenWidth <= 768 && btn.classList.contains('menu__link')){
            document.querySelector('.icon-menu').click();
          
        }
        document.querySelector('.icon-menu').classList.remove('_active');
        // нашли элемент куда нужно прокрутиться
        let anchor = document.querySelector(`#${btn.getAttribute('data-scroll')}`);
        let pixels;
       
        //добавил проверку если вдруг меню перестанет быть фиксированым или абсолютным или измениться размер
        const header = document.querySelector('.header');
        if (getComputedStyle(header).position === "fixed"  || getComputedStyle(header).position === "absolute" ){
            pixels = anchor.offsetTop - header.clientHeight;
        } else {
            pixels = anchor.offsetTop;
        }
        // anchor.scrollIntoView({behavior: "smooth",block: "start"});
        
       window.scrollTo({
        top: `${pixels}`,
        behavior: 'smooth'
      })
    })
})

// появление кнопки вверх при скролле дальше начального экрана
const btnUp = document.querySelector('.btn-up');
window.addEventListener ("scroll",() => {
 
    if (window.pageYOffset > 560) {
        btnUp.classList.remove('hide');
        btnUp.classList.add('show');
    } else {
        btnUp.classList.remove('show');
        btnUp.classList.add('hide');
    }
})



