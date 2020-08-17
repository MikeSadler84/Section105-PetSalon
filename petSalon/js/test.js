//object literal
//[] array
//{} object

const person={
    name:"Colin", 
    age:"30",
    student: true,
    birthday:function(){
        return new Date().getFullYear()-this.age;
    }
}
console.log(person.birthday());

//object constructor
class Task{
    constructor(name, priority){
        this.name=name;
        this.priority=priority;
    }
}

    const task1= new Task("HW","High");
    const task2= new Task("Play Zelda", "High");
    const task3= new Task("Running", "Medium");

    console.log(task1);
    console.log(task2);
    console.log(task3);

    const client={
        name:"Alex",
        type:"Premium",
        data:{
            address:{
                city:"TJ",
                country:"Mexico"
            },
            account:{
                user:"alex@gmail.com",
                password:"123Alex@"
            }
        },
        hobbies:{
            music:["rock", "trance", "electronic", "hip hop"]
        }
    }
    console.log(client.data.account.user);
// Old way
    const userName=client.data.account.user;
    const userType=client.type;

    console.log(userName);
    console.log(userType);

// Object destructuring
let {name, type}= client;
console.log(name,type);

let {data:{address:{city, country}}}=client;
console.log(city,country);
//destructuring the account
let{data:{account:{user,password}}}= client;
console.log(user, password);

let {hobbies:{music}}=client;
console.log(music[1]);

const band="Metallica", genre="Heavy Metal", song="Whiskey In the Jar";

const metallica={band, genre, song};
console.log(metallica);

const students= [
    {name:"John", age:30},
    {name: "Mike", age:26},
    {name:"Andrew", age:34},
    {name:"Andrea", age:39},
    {name:"Trevor", age:21},
    {name:"Juliet", age:19}
];
console.log(students);
console.log(students.length);

//get students older than 25
const olders = students.filter(students=>students.age>25);
console.log(olders);
//find Andrea
const andrea = students.find(students=>students.name==="Andrea");
console.log(andrea);
//AVG Age
let total= students.reduce((totalAge, students)=>{
    return totalAge+students.age;
},0);
console.log(total/students.length);

//object literals

var lion = {
    name: "Simba",
    foodType: "carnivore",
    kingOfJungle: true
}
console.log(lion);
var monkey = {
    name: "Rafiki",
    foodType: "herbivore",
    kingOfJungle: false
}
console.log(monkey);

//object constructor

class Animal {
    constructor(name, foodType, kingOfJungle) {
        this.name = name;
        this.foodType = foodType;
        this.kingOfJungle = kingOfJungle;
    }
}

var lionC = new Animal("Simba", "Carnivore", true);
var monkeyC = new Animal("Rafiki", "Herbivore", false);