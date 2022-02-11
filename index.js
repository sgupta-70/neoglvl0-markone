// Ex 1
console.log('Hi, Siddharth here.');

//Ex 2,3,4
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
var welcomeMsg =  'Hi ' + userName;
console.log(welcomeMsg);

//Ex 5,6
var score = 0;
var answer = readlineSync.question('Is my age 25 or more? (y/n) ');
if (answer=='n'){
  console.log('Correct answer!');
  score=score+1;
}
else{
  console.log('Incorrect answer!');
}

/*
//Ex 7
var num1=4, num2=6;
function add (n1, n2){
  return n1+n2;
}
var result = add(num1,num2);
console.log('Sum of '+num1+' & '+num2+' is '+result);
*/

//Ex 8
function quiz (ques, ans){
  var userAns = readlineSync.question(ques);
  if (userAns==ans){
    console.log('Correct answer!');
    score=score+1;
  }
  else{
    console.log('Incorrect answer!');
  }
}
quiz('Where do you live? ', 'Delhi');

/*
//Ex 9
for (var i=0;i<5;i++){
  console.log('My name is Sid!');
}

//Ex 10
var buyList = ['milk','eggs','bread','pen','soap'];
console.log('Item 1: '+buyList[0]);
console.log('Item 3: '+buyList[2]);
console.log('Last item: '+buyList[4]);

//Ex 11
for (var i=0;i<buyList.length;i++){
  console.log('Item '+(i+1)+': '+buyList[i]);
}

//Ex 12
var cat = {
  name: 'Tom',
  color: 'grey',
  strength: 100 
}
var mouse = {
  name: 'Jerry',
  color: 'brown',
  strength: 10
}
var animals = [cat, mouse];
for (var i=0;i<animals.length;i++){
  currentAnimal=animals[i];
  console.log(currentAnimal.name);
  console.log(currentAnimal.color);
  console.log(currentAnimal.strength);
  console.log('--------------------');
}
*/

//Ex 13, 14
var quesOne = {
  ques: 'What is my favourite food? ',
  ans: 'pizza'
}
var quesTwo = {
  ques: 'What is my favourite season? ',
  ans: 'spring'
}
var quesThree = {
  ques: 'What music genre I like to listen? ',
  ans: 'rap'
}
questions = [quesOne, quesTwo, quesThree];
for (var i=0;i<questions.length;i++){
  quiz(questions[i].ques,questions[i].ans);
}

//Ex 15
console.log('Your quiz score is '+score);


