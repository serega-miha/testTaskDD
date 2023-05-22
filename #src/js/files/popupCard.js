

const allBtnBuy = document.querySelectorAll('.card-btn__link');
const popupField = document.querySelector('.popup_cards');
const closeBtn = document.querySelectorAll('[data-close]');

const body = document.body;
let popupItem = document.querySelector('.popup-card');




// let product =  addInfoPopupCard(phoneDB, 10);

//open popup
allBtnBuy.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        product =  addInfoPopupCard(phoneDB, +btn.id);
        openPopup();

        const listimgRadio = imgRadioList(product);

      
        popupItem.insertAdjacentHTML('afterbegin', createPopupCard(product));


        //следим за событием чтобы переключать картинки на карточках
        const allRadioBtn = popupItem.querySelectorAll('.box-radio input');
        const imgPopup = popupItem.querySelector('.modal-info__img img');
        
        allRadioBtn.forEach((item,i) =>{
            item.addEventListener('click', (e) => {
                imgPopup.setAttribute('src', listimgRadio[i])
        
            })
        });





        popupField.addEventListener('click', (e) => {
            if (e.target === popupField || e.target.getAttribute('data-close') == '') {
                   e.preventDefault();
                   closePopup();
                }
            });
        
        // popupField.addEventListener('keydown', (e) =>{
        //     if (e.code === "Escape") {
        //         e.preventDefault();
        //         closePopup();
        //         }
        // })
          
        
        //Штука следит за всеми радиокнопками, чтобы передать цвет после покупки
        //попробовать сделать через submit, думаю будет легче
        const allRadioButton = popupItem.querySelectorAll('.input-radio');
        let radioBtnChecked = allRadioButton[0].nextElementSibling.textContent;
        allRadioButton.forEach(btn =>{
        btn.addEventListener('change', ()=>{

        radioBtnChecked = btn.nextElementSibling.textContent;
        
        
    })
})
        

        const btnBuy = popupField.querySelector('[indexBuy]');
        btnBuy.addEventListener('click', (e) => {
            e.preventDefault();
            
            

            openThanks(radioBtnChecked);
            
            
        });

        
    })
});

//opent popup
function openPopup() {
    popupField.classList.add('_active');
    bodyBlock();
}



//close popup

function closePopup() {
            bodyUlock();
            popupField.classList.remove('_active');
            popupItem.innerHTML = '';
}




function bodyBlock() {
    body.classList.add('modal-open');
  
    // body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';

}
function bodyUlock() {
    body.classList.remove('modal-open');

    // body.style.paddingRight = '';

}


//spasibo
    function openThanks(color) {
   
      
        let countValue = popupField.querySelector('[data-count]');
       
        // let priceValue = popupField.querySelector('[data-price]');
        
        let idCard = popupField.querySelector('[indexBuy]').getAttribute('indexBuy');
        // console.log(idCard);
        
        closePopup();
 
            //  setTimeout(closePopup, 100);
            // setTimeout(openPopup, 500);
            
            product =  addInfoPopupCard(phoneDB, +idCard); 
            

            let infoPopupThanks = `
                    <div class="thanks-header">
                    <div class="thanks-header__title	">
                        <h2>Поздравляем вы купили: </h2>
                        <h3>${product.title}</h3>
                        <h4 class='color-product'>Цвет товара: ${color}</h4>

                        <h4>В количестве <span>${countValue.value}</span> шт.</h4>
                        <h4>на общую сумму: ${countValue.value * product.price} руб.</h4>
                    </div>
                    
                    </div>
        
                    <div class="thanks-btn"><a href="#"  data-close>Закрыть</a></div>
                    </div>
                    
            
            `

            
            function innerHtmlToThanksPopup(){
                popupItem.insertAdjacentHTML('afterbegin', infoPopupThanks);
            }
            setTimeout(innerHtmlToThanksPopup,700)
            // openPopup();
            setTimeout(openPopup, 800);
    };
    


//======spasibo end



///Функция изщет выбраный цвет товара, чтобы передать в попап спасибо
// function radioColor(){
//     const allRadioButton = popupItem.querySelectorAll('.input-radio');
//     let radioBtnChecked;
// allRadioButton.forEach(btn =>{
//     btn.addEventListener('change', ()=>{

//         radioBtnChecked = btn.nextElementSibling.textContent;
//         console.log(radioBtnChecked);
//     })
// })
// if (radioBtnChecked) {
//     console.log(radioBtnChecked);
//     return radioBtnChecked;
// } else{
//     console.log(allRadioButton[0].nextElementSibling.textContent);
//     return allRadioButton[0].nextElementSibling.textContent;
// }


// };



//функция получает базу данных и id с кнопки купить и возвращает объект товара
function addInfoPopupCard(dataBase, idCard) {
    for (index = 0; index < dataBase.length; ++index) {

        if (dataBase[index].id === idCard) {
            return dataBase[index];
        }
    }
};




// const product =  addInfoPopupCard(phoneDB, 10);

//Функция получает данные карточки из базы данных, и возвращает список картинок прикрепленных к радиокнопкам
function imgRadioList(product) {
    const newArr = Object.entries(product);

    let temp = 1;
    let listimgRadio = [];
    let i =0;

newArr.forEach(item => {
    let srcTemp = `src${temp}`;
    
    if (item[0] === srcTemp){
        listimgRadio[i] =  item[1];
        temp++;
        i++;
    }
})
return listimgRadio;
}
// const listimgRadio = imgRadioList(product);




//Функция получает данные карточки из базы данных, возвращает список радио кнопок в HTML формате
function createBoxButton(product) {
    
let count = product.length;

const newArr = Object.entries(product);

let temp = 1;
let boxRadio = '';
newArr.forEach((item,i) =>{
    
    let radioTemp = `radio${temp}`;
  
    if(item[0] === radioTemp){
        if (temp === 1){
            boxRadio += `
            <div class="box-radio">
                <input class="input-radio" type="radio" name="radio" checked="checked">
                <label  for="radio" class="label-radio">${item[1]}</label>

            </div>
            `;
        } else{
            boxRadio += `
            <div class="box-radio">
                <input class="input-radio" type="radio" name="radio" >
                <label  for="radio" class="label-radio">${item[1]}</label>

            </div>
            `;
        }
        temp++;
   
    }
})

return boxRadio;

}

//функция создает карточку купить товар

function createPopupCard(product) {
    
let infoPopupItem = '';
infoPopupItem = `
                <form action="#" method="POST" class="form-sale">
					<div class="modal-header">
						<div class="modal-header__title	">
							<h3>${product.title}</h3>
						</div>
						
					</div>
					<div class="modal-body">
						<div class="modal-body__info">
							<div class="modal-info__img"><img src=${product.src1} alt=${product.alt}></div>
							<div class="modal-info__item">
								<div class="modal-info__item-body">
									<div class="modal-info__item__count">
										<label for="count">Количество штук:</label>
										<input class="input-text" name="count" type="number" min="1" max="10"  placeholder="1" value = '1' data-count>
									</div>
									<div class="modal-info__item__radio">

                                    ${createBoxButton(product)}
                                    </div>

									<div class="modal-info__item__textarea">
										
										<textarea class="input-text" name="textarea" id="textarea" cols="30" rows="5" maxlength="2000" placeholder="Оставьте комментарий"></textarea>
									</div>

								</div>
							</div>
							
						</div>
						<div class="modal-body__buy">
                             <div class="card-price" data-price>Цена: ${product.price} рублей.</div>
							<div class="modal-description">Здесь будет великолепное описание всех телефонов и других штук, насколько хватит фантазии</div>
						<div class="modal-btn"><a  href="#" indexBuy='${product.id}'>Купить</a> <a href="#"  data-close>Закрыть</a></div>
						</div>
						
						
					</div>
				</form>
`
return infoPopupItem;

}

// function createPopupThanks(product) {
    
//     let infoPopupItem = '';
//     infoPopupItem = `
//             <div class="thanks-header">
//             <div class="thanks-header__title	">
//                 <h2>Поздравляем вы купили: ${product.name}</h2>
//                 <h3>имя товар</h3>
//                 <h4>В количестве <span></span> шт.</h4>
//                 <h4>на общую сумму:</h4>
//             </div>
            
//             </div>

//             <div class="thanks-btn"><a href="#"  data-close>Закрыть</a></div>
//             </div>
            
    
//     `
//     return infoPopupItem;
    
//     }



















// allBtnBuy.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
        
//         product =  addInfoPopupCard(phoneDB, +btn.id);
//         popupField.classList.add('_active');

//         const listimgRadio = imgRadioList(product);

      
//         popupItem.insertAdjacentHTML('afterbegin', createPopupCard(product));


//         //следим за событием чтобы переключать картинки на карточках

//         const allRadioBtn = popupItem.querySelectorAll('.box-radio input');
//         const imgPopup = popupItem.querySelector('.modal-info__img img');
        
//         allRadioBtn.forEach((item,i) =>{
//             item.addEventListener('click', (e) => {
//                 imgPopup.setAttribute('src', listimgRadio[i])
        
//             })
//         });
//         bodyBlock();
//         popupField.addEventListener('click', (e) => {
//             if (e.target === popupField || e.target.getAttribute('data-close') == '') {
//                    e.preventDefault();
//                    closePopup();
//                 }
//             });
        
//         // popupField.addEventListener('keydown', (e) =>{
//         //     if (e.code === "Escape") {
//         //         e.preventDefault();
//         //         closePopup();
//         //         }
//         // })
        

//         const btnBuy = popupField.querySelector('[indexBuy]');
//         btnBuy.addEventListener('click', (e) => {
//             e.preventDefault();
  
//             openThanks();
            
//         });



