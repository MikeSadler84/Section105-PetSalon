//obj literal for the salon
const salon={
    name:"The Fashion Pet",
    phone:"777-777-7777",
    address:{
        city:"Springfield",
        street:"South Lane",
        number:"202"
    },
    pets:[]
}

let {name, phone, address:{city,street,number}}= salon;

document.getElementById("info").innerHTML=`
    <p class="footer-info"> ${name}<br> ${phone}<br> ${number} ${street}, ${city}`; //template string

//obj constructor for the pets
var c=1;
class Pet{
    constructor(petName, age, breed, type, gender, service, ownerName, contactPhone, customerType){
        this.petName=petName;
        this.age=age;
        this.breed=breed;
        this.type=type;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.customerType=customerType;
        this.id=c;
        c++;
    }
}



const scooby=new Pet("Scooby", 50, "Dane", "Dog", "Male", "Full Service", "Shaggy", "555-555-5555", "New Customer");

const scrappy=new Pet("Scrappy", 5, "Dane", "Dog", "Male", "Nails Cut", "Shaggy", "666-666-6666", "New Customer");

const lady=new Pet("Lady", 10, "Corgi", "Dog", "Female", "Hair Cut", "Fred", "777-777-7777", "Registered");

const tramp=new Pet("Tramp", 15, "Mutt", "Dog", "Male", "Shots", "Velma", "888-888-8888", "Registered");

const cali=new Pet("Cali", 4, "Calico", "Cat", "Female", "De-clawing", "Jim Carrey", "999-999-9999", "Registered");


// Number of pets

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(lady);
salon.pets.push(tramp);
salon.pets.push(cali);

console.log(salon.pets.length); 

//register function and use ids

let pettxt = document.getElementById("petName");
let agetxt = document.getElementById("petAge");
let breedtxt = document.getElementById("petBreed");
let typetxt = document.getElementById("petType");
let gendertxt = document.getElementById("petGender");
let servicetxt = document.getElementById("petService");
let ownertxt = document.getElementById("ownerName");
let phonetxt = document.getElementById("phoneNumber");
let customertxt = document.getElementById("customerType");

// Register function

function register(){

    //create the pet object
    const petNew=new Pet(pettxt.value, agetxt.value, breedtxt.value, typetxt.value, gendertxt.value, servicetxt.value, ownertxt.value, phonetxt.value, customertxt.value);
    //push the pet into the array
    salon.pets.push(petNew);
    console.log(salon.pets);
    //clear the input
    clear();
    //display the newly registered pet
    //display(); // directory.js
    displayTable(petNew);
    // numberOfPets();
}

function clear(){
    pettxt.value="";
    agetxt.value="";
    breedtxt.value="";
    typetxt.value="";
    gendertxt.value="";
    servicetxt.value="";
    ownertxt.value="";
    phonetxt.value="";
    customertxt.value="";
}


function numberOfPets(){
    const numEachPet = salon.pets;
    
    //Cat
    const filterCat = numEachPet.filter(function(numEachCat) {
      return numEachCat.type === "Cat";
    });
    //Dog
    const filterDog = numEachPet.filter(function(numEachDog) {
    return numEachDog.type === "Dog";
    });
    //Bird
    const filterBird = numEachPet.filter(function(numEachBird) {
    return numEachBird.type === "Bird";
    });
    var pets = salon.pets;
    const numberOfPets = document.querySelector("#pets-section-header");
    let text="";
    for(var i=0;i<pets.length;i++){
    text=
    `
    <div id = "#pets-section-header">
    <p>Pets in queue:</p>
    </div>
    <div class ="num-of-pets-wrap">
    <img src="../img/dogcard.png">
    <p>${filterDog.length}</p>
    </div>
    <div class ="num-of-pets-wrap">
    <img class="cat-img" src="../img/cat.png">
    <p>${filterCat.length}</p>
    </div>
    <div class ="num-of-pets-wrap">
    <img class="bird-img" src="../img/bird.png">
    <p>${filterBird.length}</p>
    </div>
    `;
    }
    numberOfPets.innerHTML= text;
  
  }
  numberOfPets();

  // Homework is function searchPet - two different element searches

function searchPet(){

    let ss= $("#petSearch").val(); // val = value
    let stringSearch = ss.toLowerCase();
    let pets=salon.pets;

    for(var i=0;i<pets.length;i++){
        let selected=pets[i];
        if(selected.petName.toLowerCase() === stringSearch || selected.type.toLowerCase() === stringSearch || selected.service.toLowerCase() === stringSearch){
            $("#"+selected.id).removeClass("active").addClass("active");
        }else{
            $("#"+selected.id).removeClass("active");
            console.log("That pet is not in the system.");
        }
    }
}
searchPet();


function displayTable(aPet){
    let tbody=document.getElementById("petTable");
    let row=`<tr id="${aPet.id}">
                <td>${aPet.petName}</td>
                <td>${aPet.age}</td>
                <td>${aPet.breed}</td>
                <td>${aPet.type}</td>
                <td>${aPet.gender}</td>
                <td>${aPet.service}</td>
                <td>${aPet.ownerName}</td>
                <td>${aPet.contactPhone}</td>
                <td>${aPet.customerType}</td>
                <td><button type="button" class="btn btn-danger" onclick="deletePet(${aPet.id})">Delete</button></td>
            `;
    tbody.innerHTML+=row;

    numberOfPets();
    
}
//add pets to array

displayTable(scooby);
displayTable(scrappy);
displayTable(lady);
displayTable(tramp);
displayTable(cali);


function deletePet(petID){
    // select the element to delete
    let tr=$("#" + petID);
    let indexDelete; // important! Know the position so you can delete the right element
    // travel the array (search function)
    for(let i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id === petID){
            indexDelete=i;
        }
    };
    // delete the pet form the array
    salon.pets.splice(indexDelete, 1);
    //delete the pet from the HTML
    tr.remove();
    numberOfPets();
}

