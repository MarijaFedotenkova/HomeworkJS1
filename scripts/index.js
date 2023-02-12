"use strict"

console.log("Connected")
//Описать функцию, которая получает в качестве аргумента число
//и возвращает массив из чисел от 0 до указанного числа.

function createArray(number) {
    let result = [];
    for(let i = 0; i <= number; i++){
        result.push(i);
    } 
    return result
}


//Написать функцию hasProp, которая принимает в себя объект и название ключа. Если ключа с таким названием нет в объекте, функция возвращает false. Если ключ есть, функция возвращает значение этого ключа. 

function hasProp(object, key){
    if (!object.hasOwnProperty(propName)) {
        return false;
    }
    return object[propName];
}

//Написать функцию поиска адреса(города) пользователя по его id. У Вас должен быть массив из пользователей (2-3 элемента достаточно) со свойствами id, username, address. Также должна быть отдельная функция (не метод объекта), которая принимает в себя id, находит пользователя по этому id в массиве и возвращает его адрес. Если пользователь с таким айди не найден, функция должна вернуть сообщение “Извините, такого пользователя не существует”.

const users = [
    {
        id: 111,
        username: "Diana Sergejeva",
        address: "Russia"
    },
    {
        id: 124,
        username: "Dmitrij Damjanov",
        address: "Paris"
    },
    {
        id: 125,
        username: "Fjodor Krjukov",
        address: "London"
    }
];

function findAddress(id) {
    for (let i = 0; i < users.length; i++){
        if (users[i].id === id){
            return users [i].address;
        }
    }
    return "Извините такого пользователя не существует"
}
console.log(findAddress(111))
console.log(findAddress(222))

//Написать процесс для подготовки вывода информации из интернет-магазина книг на экран. Пока что работаем со скриптом, он обязательно должен содержать массив из объектов (моделей) с книгами.Каждая модель книги представляет из себя набор данных:
// -- id
// -- Заголовок
// -- Автор
// -- Короткое описание
// -- Фотография (ссылка на фото)
// -- Стоимость
// -- Есть ли на книгу скидка сейчас?
// -- Метод для формирования ссылки на книгу (ниже приведен пример шаблона ссылки)
// -- Метод для расчета итоговой стоимости со скидкой (размер скидки может отличаться у разных книг)

// Для каждой модели нужно вывести из массива наших книг все данные пока что в консоль:
// заголовок
// автор
// описание
// фотография
// ссылка (формируется по следующему шаблону: books/item-${id}). Пока что сама ссылка никуда не будет вести, но этого достаточно для практики
// стоимость: если книга находится на скидках, вывести нужно стоимость со скидкой. Иначе - обычную

const books = [
    {
        id: 1,
        title: 'Зелённая миля',
        author: 'Стивен Кинг',
        description: 'Стивен Кинг приглашает читателей в жуткий мир тюремного блока смертников, откуда уходят, чтобы не вернутьс',
        photo: 'https://s1.livelib.ru/boocover/1000966838/200x305/7df1/boocover.jpg',
        price: 10,
        discount: true,
        link: function() {
            return `books/items-${id}`;
        },
        calculatePrice: function () {
            return this.price * 0.8;
        }
    },
    {
        id: 2,
        title: 'Сияние',
        author: 'Стивен Кинг',
        description: 'ультовый роман Стивена Кинга',
        photo: 'https://s1.livelib.ru/boocover/1005666256/200x305/216a/boocover.jpg',
        price: 15,
        discount: false,
        link: function() {
            return `books/items-${id}`;
        },
        calculatePrice: function () {
            return this.price;
        }
    }
];
for (const book of books) {
    console.log('Title:',book.title);
    console.log('Author:',book.author);
    console.log('Description:',book.description);
    console.log('Photo:',book.photo);
    console.log('Link:',book.link);
    console.log('Price:', book.discount ? book.calculatePrice() : book.price);
}
