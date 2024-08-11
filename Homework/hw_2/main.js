// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let mixed=[
    'cat',
    'dog',
    45,
    'bird',
    'camel',
    true,
    1.5,
    'dolphin',
    'parrot',
    false
];
console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[2]);
console.log(mixed[3]);
console.log(mixed[4]);
console.log(mixed[5]);
console.log(mixed[6]);
console.log(mixed[7]);
console.log(mixed[8]);
console.log(mixed[9]);

// //- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.m
//
let book1={
    title:'Karlson-on-the-Roof',
    pageCount:128,
    genre:'children`s book'
}
console.log(book1);

let book2={
    title:'To Kill a Mockingbird by Harper Lee',
    pageCount: 281,
    genre: 'Classic,Fiction'
}
console.log(book2);

let book3={
    title:'1984 by George Orwell',
    pageCount:328,
    genre:'Dystopian, Science Fiction'
}
console.log(book3);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Karlson-on-the-Roof',
    pageCount: 128,
    genre: 'children’s book',
authors:[
    {
        name:'Astrid Lindgren',
        age:94
    }
]
}
console.log(book4);

let book5 = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'Classic, Fiction',
    authors:[
        {
            name:'Harper Lee',
            age:89
        }
    ]
}
console.log(book5);

let book6 = {
    title: '1984',
    pageCount: 328,
    genre: 'Dystopian, Science Fiction',
   authors:[
       {
           name:'George Orwell',
           age:46
       }
   ]
}
console.log(book6);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
let users = [

    {name:'Anna',  username:'anna123',   password:12345},
    {name:'Anton', username:'anton123',  password:23456},
    {name:'Andrii', username:'andrii23', password:34567},
    {name:'Bogdan', username:'bogdan123',password:45678},
    {name:'Marta',  username:'marta123', password:56789},
    {name:'Taras',  username:'taras123', password:67890},
    {name:'Nazar', username:'nazar123',  password:98765},
    {name:'Oksana', username:'oksana123',password:87654},
    {name:'Danylo', username:'danylo123',password:76543},
    {name:'Orest',  username:'orest123', password:65432},
    ]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let week=[
    { day:'Monday',morning:10, afternoon:20,evening:15},
    { day:'Tuesday',morning:11, afternoon:21,evening:16},
    { day:'Wednesday',morning:12, afternoon:22,evening:17},
    { day:'Thursday', morning:13, afternoon:23,evening:18},
    { day:'Friday', morning:14, afternoon:24,evening:19},
    { day:'Saturday', morning:15, afternoon:25,evening:20},
    { day:'Sunday', morning:16, afternoon:27,evening:21}

]
console.log(week);

let tyzhden=[

    { dayTime:'morning', 'Monday':10, 'Tuesday':11, 'Wednesday':12, 'Thursday':13, 'Friday':14, 'Saturday':15, 'Sunday':16},
    { dayTime:'afternoon', 'Monday':21, 'Tuesday':22, 'Wednesday':23, 'Thursday':24, 'Friday':25, 'Saturday':26, 'Sunday':27},
    { dayTime:'evening', 'Monday':16, 'Tuesday':17, 'Wednesday':18, 'Thursday':19, 'Friday':20, 'Saturday':21, 'Sunday':22}

]
console.log(tyzhden)

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=2
if (x!==0)
{
    console.log('Вірно');
}
else{
    console.log('Невірно');
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// //

let time =55
if (time <0 ||  time > 59){
console.log('Wrong number');
}
else if( time >= 0 && time <= 14){
    console.log('First quarter');
}
else if (time <=29){
    console.log('Second quarter');
}
else if (time<=44){
    console.log('Third quarter');
}
else if(time<=59){
    console.log('Forth quarter');
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day=3;
if (day>=1 && day<=10){
    console.log('First decade');
}

else if (day>=11 && day<=20){
    console.log('Second decade');
}
else if (day>=21 && day<=31){
    console.log('Third decade');
}

// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekDay= prompt('Enter a day of the week');
switch (weekDay)
{ case '1':
    console.log('Monday');
    break;
    case '2':
        console.log('Tuesday');
        break;
    case'3':
        console.log('Wednesday');
        break;
    case'4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case'6':
        console.log('Saturday');
        break;
    case'7':
            console.log('Sunday');
            break;
    default:
        console.log('Try better')
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати коли введені рівні числа.

let q = 2;
let y = 4;

if (q > y) {
    console.log(q);
} else if( q < y) {
    console.log(y);
} else  {
    console.log('q is the same as y');
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
  let n=123;
if (n===0 ||n===null|| n===undefined||n===false|| n===NaN){n='default'}
    console.log(n);


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5)
{
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5)
{
    console.log('Супер');
}if (coursesAndDurationArray[2].monthDuration > 5)
{
    console.log('Супер');
}if (coursesAndDurationArray[3].monthDuration > 5)
{
    console.log('Супер');
}if (coursesAndDurationArray[4].monthDuration > 5)
{
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5)
{
    console.log('Супер');
}
