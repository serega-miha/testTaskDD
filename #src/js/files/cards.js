
// class MenuCard {
//     constructor(src, alt, title, text, price, parentSelector, ...classes) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.subtitle = subtitle;
//         this.price = price;
//         this.data = data;
//         this.classes = classes;
//         this.parent = document.querySelector(parentSelector);

//     }



//     render() {
//         const element = document.createElement('div');

//         if (this.classes.length === 0) {
//             this.element = 'catalog-card';
//             element.classList.add(this.element);
//         } else {
//             this.classes.forEach(className => element.classList.add(className));
//         }

//         element.innerHTML = `


//                 <div class="card-body">

//                     <div class="card-img _ibg">
//                         <img src=${this.src} alt=${this.alt}>
//                     </div>

//                     <div class="card-info__title">
//                         <h3>${this.title}</h3>
//                     </div>
//                     <div class="card-info__subtitle">
//                         <h3>${this.subtitle}</h3>
//                     </div>
//                     <div class="card-price">${this.price}</div>
//                     <div class="card-data">${this.data}</div>
//                     <div class="card-btn"><a href="#" class="card-btn__link">Купить</a></div>
//                 </div>


//               `;
//         //   element.classList.add('menu__item');
//         this.parent.append(element);
//     }
// }





//функция принимает базу данных и ID родителя, перебирает базу данных и добавляет код HTML(сами карточки)
function addAllCards(dataBase, idParent) {
    let itemCard = '';
    let parent = document.querySelector(idParent);
    dataBase.forEach((menu) => {
        if (menu.category === idParent){
            itemCard +=
            `
    <div class="catalog-card theme" data-brand="${menu.brand}">
        <div class="card-body" >

        <div class="card-img ">
            <img src=${menu.src1} alt="${menu.alt}">
        </div>

        <div class="card-info__title">
            <h3>${menu.title}</h3>
        </div>
        <div class="card-info__subtitle">
            <h3>${menu.subtitle}</h3>
        </div>
        <div class="card-price">Цена: ${menu.price} рублей</div>
        <div class="card-data">Дата выпуска: ${getDayInfo(menu.data)}</div>
        <div class="card-btn"><a href="#" class="card-btn__link" id='${menu.id}'>Купить</a></div>
    </div>
</div>
    `;
        }
        
    })
    parent.insertAdjacentHTML('afterbegin', itemCard);
}


addAllCards(phoneDB, '#telephone');
addAllCards(phoneDB, '#caseCards')
addAllCards(phoneDB, '#accessoriesCards')




//filter
//Принимает brand табов и brand категорий карточек, ну и добавляет show hide
function filterAllCards(idCategory, idLinks) {
    const parentCards = document.querySelector(idCategory);
    const allCards = parentCards.querySelectorAll('.catalog-card');//
    const parentLinks = document.querySelector(idLinks);
    const phoneFilterLink = parentLinks.querySelectorAll('.filter__link');

    phoneFilterLink.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            allCards.forEach(card => {
                card.classList.remove('show');

                card.classList.add('hide');
                if (link.getAttribute('brand') === 'all') {
                    card.classList.remove('hide');
                    card.classList.add('show');
                } else {
                    filterShowCard(link.getAttribute('brand'), allCards);
                    // console.log(link.getAttribute('brand'));
                }


            })

        })
    })
    //добавляет show по дата аттрибуту
    function filterShowCard(cardBrand, cards) {
        cards.forEach(card => {
            if (card.getAttribute('data-brand') === cardBrand) {
                
                card.classList.add('show')
            }
        })
    }


}


filterAllCards('#telephone', '#phone');
filterAllCards('#caseCards', '#caseTab');
filterAllCards('#accessoriesCards', '#accessoriesTab');



