


function getDayInfo(rusDate){
    //переделываем dd-mm-yyyy в mm-dd-yyyy
    const newVersionDate = rusDate.split('.')[1] + '.' + rusDate.split('.')[0] + '.' + rusDate.split('.')[2];

    const newDate = new Date(newVersionDate),
      date = newDate.getDate(),
      day = newDate.getDay(),
      month = newDate.getMonth(),
      year = newDate.getFullYear();


// const weekOfMonth = Math.ceil(((date - 1 - day) / 7)+1);
//у них неделя начинается с Вс, поэтому делаем проверку
if (day === 0){
    weekOfMonth = Math.ceil(((date - 1 - day) / 7));
} else {
    weekOfMonth = Math.ceil(((date - 1 - day) / 7)+1);
}



  const dayNames = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
        monthNames = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

return (dayNames[day] + ',' + ' ' + weekOfMonth + ' ' + 'неделя' + ' ' + monthNames[month] + ' ' + year + ' ' + 'года');

};

    //Попытка подгона практически удалась))))
        // let newDate3 = new Date("05.18.2023").toLocaleString('ru', {
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        //     weekday: 'long'
            
        //   });
        
        //   let nameDay = newDate3.split(',');
        //   let nameMonth = newDate3.split(' ');
        
        //   console.log(nameDay[0] + ','+' ' + weekOfMonth +' ' + 'неделя' + ' ' + nameMonth[2] + ' ' + nameMonth[3] + ' ' + 'года');
//четверг, 2 неделя мая 2023 года