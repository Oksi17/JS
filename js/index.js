alert('Hello');
let surName;

const userName = 'John';

alert (userName);
const userAge = parseFloat (prompt('Enter your age'));
alert(userAge);
const message = 'Your age is' + userAge;
alert (message);
const newAge = userAge + 1;
alert(newAge);
//number NaN, Infinity
//string ''
//Boolean: true, false;
// undefined
// null
// object
//from 2015:
// symbol

if (userAge < 18){//< = > === better to use 3 =
    alert('You are not adult');
}
else{
    alert('You are adult');
}