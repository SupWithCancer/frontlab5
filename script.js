//foreach

var arr = ['one', '2', 3, 'apple'];

arr.forEach(function(i) {
  console.log(i);
});

function func(n, i) {
    console.log("елемент номер "+ i + " : " + n);
}

arr.forEach(func);

//filter

const a = ['яблуко', 'ялинка', 'кпі', 'деструкція', 'регенерація', 'філологія' ];

const resultA = a.filter(i => i.length > 7);

console.log(resultA);


const b = [ { model: "iphone", price: 450 }, { model: "redmi", price: 150 }, { model: "samsung", price: 300 }];

const resultB = b.filter(item => item.price >= 200);

console.log(resultB);
//map
const arrmap = [2, 3, 4, 5, 10];


const resultmap = arrmap.map(x => x * 5);

console.log(resultmap);

let arrnum = [1, 2, 3, 4]

let filteredarrnum = arrnum.map(function(num, i) {
  if (i < 2) {
     return num
  }
})

console.log(filteredarrnum)

//every



const everyarr = [1, 30, 39, 29, 10, 13]

const val = everyarr.every(i => i > 40);
const val1 = everyarr.every(i => i > 3);
console.log(val); //false
console.log(val1); //true

//some

const somearr = [7, 14, 5, 12, 25]
const val2 = somearr.some(i => i > 10);
const val3 = somearr.some(i => i < 3);
console.log(val2); //true
console.log(val3);//false

//reduce

const reducearr = [29, 41, 46];
const sumred = reducearr.reduce((total, amount) => total + amount); 
console.log(sumred)


const reducerightarr = ['friends', 'my', 'hello'];
const greet = reducerightarr.reduceRight(
    (total, amount) => total.concat(amount));
console.log(greet);


// Prototypes


const Person = function(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  
  }


Person.prototype.Talk = function () {
  console.log('blah blah');
}

Person.prototype.SayHi = function () {
  console.log(`Hi, my name is ${this.name}`);
}

const Employee = function(name, age, gender, salary, occupation){
  Person.call(this, name, age, gender);
  this.salary = salary;
  this.occupation = occupation;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.Work = function () {
  console.log('Я КАМЕНЩИК РАБОТАЮ ТРИ ДНЯ БЕЗ ЗАРПЛАТЫ');
}

Employee.prototype.sayHi = function () {
  console.log(`Hi, my name is ${this.name}. I am a ${this.occupation}`);
};

let john = new Person('John', 19, 'male');

john.SayHi();
john.Talk();


let policeman = new Employee ('Ben', 25, 'male', '300 dollars', 'Policeman');

policeman.SayHi();
policeman.Talk();
policeman.Work();

//functional style 

const PersonBlank = function (name, age, gender) {

  this.name = name;
  this.age = age;
  this.gender = gender;

  this.talk = function () {
      console.log('blahblahblah');
  }

  this.SayHi = function () {
      console.log(`Hi, my name is ${this.name}`);
  }
  
}

const EmployeeBlank = function(name, age, gender, salary, occupation){
  PersonBlank.call(this, name, age, gender);
  this.salary = salary;
  this.occupation = occupation;

  this.work = function () {
      console.log('Я КАМЕНЩИК РАБОТАЮ ТРИ ДНЯ БЕЗ ЗАРПЛАТЫ');
  }

  this.SayHi = function () {
      console.log(`Hi, my name is ${this.name}. I am a ${this.occupation}`);
  }

}

let rebecca = new PersonBlank ('Bonnie', 12, 'female');

rebecca.SayHi();
rebecca.talk();

let doctor = new EmployeeBlank ('Naomee', 23, 'female', '1000 dollars', 'doctor');

doctor.SayHi();
doctor.talk();
doctor.work();

// ES6+

class PersonA {
  constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
  }

  talk () {
      console.log('заходит как-то скелет в бар и заказывает пиво и швабру');
  }

  sayHi () {
      console.log(`Hi, my name is ${this.name}`);
  }
}

class EmployeeA extends PersonA {
  constructor(name, age,gender, occupation, salary) {
      super(name, age, gender);
      this.occupation = occupation;
      this.salary = salary;
      this.isMarried = false;
  }

  work () {
      console.log('зарплату перепутали');
  }

  sayHi () {
      console.log(`Hi, my name is ${this.name}. I am a ${this.occupation}`);
  }
  
}

let rebecca1 = new PersonA ('Bonnie', 12, 'female');

rebecca1.sayHi();
rebecca1.talk();

let doctor1 = new EmployeeA('Naomee', 23, 'female', 'doctor', '1000 dollars');

doctor1.sayHi();
doctor1.talk();
doctor1.work();