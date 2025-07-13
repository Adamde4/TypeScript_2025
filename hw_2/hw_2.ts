// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let array: any[] = [1, 2, 3, 4, 5, 'asd', 'qwe', true, false, 'hello'];
// console.log(array);


// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
// type Book = {title: string, pageCount: number, genre: string};
//
// let book1: Book = {
//     title: 'Kobzar',
//     pageCount: 100,
//     genre: "drama"
// }
//
// console.log(book1);

//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// type User_1234 = {id: number, name: string, age: number, status: boolean}[];
//
// let users: User_1234 = [
//     {id: 1, name: "qwe", age: 16, status: false},
//     {id: 2, name: "asd", age: 17, status: true},
//     {id: 3, name: "zxc", age: 18, status: true},
//     {id: 4, name: "qaz", age: 19, status: true},
//     {id: 5, name: "xcv", age: 20, status: false},
//     {id: 6, name: "nbv", age: 21, status: false},
//     {id: 7, name: "poi", age: 22, status: true},
//     {id: 8, name: "kjh", age: 23, status: true},
//     {id: 9, name: "poi", age: 22, status: false},
//     {id: 10, name: "ytr", age: 50, status: false},
//
// ]
//
// console.log(users);
// console.log(users[0]);
// console.log(users[0].age);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

// type Temperatures_arr = {day: number, morning: number, daytime: number, night: number}[];
// type Temperatures_arr_num = [number, number, number, number]
//
// let temperatures: Temperatures_arr = [
//     {day: 1, morning: 10, daytime: 20, night: 15},
//     {day: 2, morning: 10, daytime: 20, night: 15},
//     {day: 3, morning: 10, daytime: 20, night: 15},
//     {day: 4, morning: 10, daytime: 20, night: 15},
//     {day: 5, morning: 10, daytime: 20, night: 15},
//     {day: 6, morning: 10, daytime: 20, night: 15},
//     {day: 7, morning: 10, daytime: 20, night: 15},
// ]
//
//
// let temperatures2: Temperatures_arr_num[] = [
//     [1, 10, 20, 15],
//     [2, 10, 20, 15],
//     [3, 10, 20, 15],
//     [4, 10, 20, 15],
//     [5, 10, 20, 15],
//     [6, 10, 20, 15],
//     [7, 10, 20, 15]
// ]


//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let valueStr: string | null = prompt('enter number')
// if (valueStr !== null) {
//     let valueNum: number = Number(valueStr)
//     if(valueNum !== 0){
//         console.log("Вірно")
//     } else {
//         console.log("Не вірно")
//     }
// }



// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let timeStr:string | null =  prompt('enter number 0 - 59')
// if (timeStr !== null) {
//     let timeNum: number = Number(timeStr)
//     if(timeNum >= 0 && timeNum <= 15){
//         console.log("part 1")
//     }else if (timeNum > 15 && timeNum <= 30){
//         console.log("part 2")
//     }else if (timeNum > 30 && timeNum <= 45){
//         console.log("part 3")
//     } else if (timeNum > 45 && timeNum <= 59){
//         console.log("part 4")}
// }


// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day: string | null = prompt('day of week?')
// if (day !== null) {
//     switch (day){
//         case 'monday':
//         case 'tuesday':
//         case 'wednesday':
//         case 'thursday':
//         case 'friday':
//         case 'saturday':
//         case 'sunday':
//             console.log(`today is ${day}`);
//             break
//         default:
//             console.log("Unknown day");
//     }
// }




//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let numFirstStr: string | null = prompt("enter first number")
// let numSecondStr:string | null = prompt("enter second number")
//
// if (numFirstStr != null && numSecondStr != null) {
//     let numFirstNum = Number(numFirstStr)
//     let numSecondNum = Number(numSecondStr)
//     if(numFirstNum > numSecondNum){
//         console.log(`number ${numFirstNum} is bigger`);
//     } else if (numFirstNum < numSecondNum){
//         console.log(`number ${numSecondNum} is bigger`)
//     } else {
//         console.log("number 1 == number 2")
//     }
// }



//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// let x: number | string | boolean | null | undefined = 0;
//
// if (!x){
//     x = "default"
// }

