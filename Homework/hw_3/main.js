// - За допомогою циклу for і document.write() вивести 10 блоків
// div c довільним текстом всередин

for (let i = 1; i <= 10; i++) {
    document.write('<div> Слава Україні!</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків
// div c довільним текстом і індексом всередині


for (let i = 1; i <= 10; i++) {
    document.write(`<div> Слава Україні! ${i}</div>`);
}

// - За допомогою циклу while
// вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 1;
while (i <= 20) {
    document.write('<h1> Героям Слава!</h1>');
    i++;
}

// - За допомогою циклу while
// вивести в документ 20 блоків
// h1 з довільним текстом і індексом всередині.


let i = 1;
while (i <= 20) {
    document.write(`<h1> Героям Слава! ${i}</h1>`);
    i++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по(шаблону)
// замість 'ITEM OF ARRAY' підставити елемент з масиву
// щоб получився цілий список з даними з масиву

let listOfItems = [
    'html',
    'css',
    'javascript',
    'mysql',
    'mongodb',
    'react',
    'angular',
    'node.js'];
document.write('<ul>');
for (const item of listOfItems) {
document.write('<li>'+item+ '</li>');
}
document.write('</ul>');


// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
//
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let j = 0; j < users.length; j++) {
   if (users[j].status === true);
    {
        console.log(users[j].name)
    }

}
for (let j = 0; j < users.length; j++) {
    if (users[j].status === false);
    {
        console.log(users[j].name)
    }

}

for (let j = 0; j < users.length; j++) {
    if (users[j].age > 30);
    {
        console.log(users[j].name,users[j].age)
    }

}