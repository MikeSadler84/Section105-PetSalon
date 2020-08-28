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
console.log("script");
// document.getElementById("info").innerHTML=`
//     <p class="footer-info"> ${name}<br> ${phone}<br> ${number} ${street}, ${city}`; //template string

//obj constructor for the pets
var c=1;
class Pet{
    constructor(petName, age, breed, type, gender, service, hairLength, ownerName, contactPhone, customerType){
        this.petName=petName;
        this.age=age;
        this.breed=breed;
        this.type=type;
        this.gender=gender;
        this.service=service;
        this.hairLength=hairLength;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.customerType=customerType;
        this.id=c;
        c++;
    }
}


const scooby=new Pet("Scooby", 50, "Dane", "Dog", "Male", "Full Service", "Buzzed", "Shaggy", "555-555-5555", "New Customer");

const scrappy=new Pet("Scrappy", 5, "Dane", "Dog", "Male", "Nails Cut", " ", "Shaggy", "666-666-6666", "New Customer");

const lady=new Pet("Lady", 10, "Corgi", "Dog", "Female", "Hair Cut", "Trim", "Fred", "777-777-7777", "Registered");

const tramp=new Pet("Tramp", 15, "Mutt", "Dog", "Male", "Shots", " ", "Velma", "888-888-8888", "Registered");

const cali=new Pet("Cali", 4, "Calico", "Cat", "Female", "De-clawing", " ", "Jim Carrey", "999-999-9999", "Registered");


// Number of pets

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(lady);
salon.pets.push(tramp);
salon.pets.push(cali);

console.log(salon.pets.length); 

//register function and use ids


/*

The below commented code was stopping the register from working. 
Using JQuery instead fixed the issues

*/

// let pettxt = document.getElementById("petName");
// let agetxt = document.getElementById("petAge");
// let breedtxt = document.getElementById("petBreed");
// let typetxt = document.getElementById("petType");
// let gendertxt = document.getElementById("petGender");
// let servicetxt = document.getElementById("petService");
// let hairtxt = document.getElementById("hairLength");
// let ownertxt = document.getElementById("ownerName");
// let phonetxt = document.getElementById("phoneNumber");
// let customertxt = document.getElementById("customerType");

// Register function

function register(){

    //create the pet object
    const petNew=new Pet($("#petName").val(), $("#petAge").val(), $("#petBreed").val(), $("#petType").val(), $("#petGender").val(), $("#petService").val(), $("#hairLength").val(), $("#ownerName").val(), $("#phoneNumber").val(), $("#customerType").val());
    //push the pet into the array
    salon.pets.push(petNew);
    console.log(salon.pets);
    //clear the input
    clear();
    //display the newly registered pet
    //display(); // directory.js
    displayTable(petNew);
    // numberOfPets();
    $("#hairLength").hide();
}

function clear(){
    $("#petName").val("");
    $("#petAge").val("");
    $("#petBreed").val("");
    $("#petType").val("");
    $("#petGender").val("");
    $("#petService").val("");
    $("#hairLength").val("");
    $("#ownerName").val("");
    $("#phoneNumber").val("");
    $("#customerType").val("");
}

/*

Added a selection to my form to allow the user to choose how their pets hair is cut if
the selected service is grooming or full service

Otherwise the prompt is hidden

*/

// $(function(){
//     "use strict";

//     $("#hairLength").hide();

//     $("#petService").click(function(){
//     if ($(this).val() === "Grooming" || $(this).val() === "Full Service"){
//         $("#hairLength").show();
//     }else{
//         $("#hairLength").hide();
//     }
// });
// });


function numberOfPets(){
    var numEachPet = salon.pets;
    
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
  

  // Homework is function searchPet - two different element searches


// function displayTable(aPet){
//     let tbody=document.getElementById("petTable");
//     let row=`<tr id="${aPet.id}">
//                 <td>${aPet.petName}</td>
//                 <td>${aPet.age}</td>
//                 <td>${aPet.breed}</td>
//                 <td>${aPet.type}</td>
//                 <td>${aPet.gender}</td>
//                 <td>${aPet.service}</td>
//                 <td>${aPet.hairLength}</td>
//                 <td>${aPet.ownerName}</td>
//                 <td>${aPet.contactPhone}</td>
//                 <td>${aPet.customerType}</td>
//                 <td><button type="button" class="btn btn-danger" onclick="deletePet(${aPet.id})">Delete</button></td>
//             </tr>`;
//     tbody.innerHTML+=row;
//     numberOfPets();
    
// }

function displayTable(){
    let tbody=document.getElementById("petTable");
    let aPet;
    let table="";
    let row;
    for(var i=0;i<salon.pets.length;i++){
        aPet=salon.pets[i];
        row = `<tr id="${aPet.id}">
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
            </tr>`;
            
        table+=row;
    }
    tbody.innerHTML=table;
    console.log(table);
    numberOfPets();
}


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

function searchPet(){

    let ss= $("#petSearch").val(); // val = value
    let stringSearch = ss.toLowerCase();
    let pets=salon.pets;

    for(var i=0;i<pets.length;i++){
        let selected=pets[i];
        console.log(selected);
        if(selected.petName.toLowerCase() === stringSearch || selected.type.toLowerCase() === stringSearch || selected.service.toLowerCase() === stringSearch){
            $(`#${selected.id}`).removeClass("actives").addClass("actives");
        }
        else{
            $(`#${selected.id}`).removeClass("actives");
            
        }
    }
}


//add pets to array
// will be called automatically when all the HTML is rendered
function initRegister(){
    console.log("init register")
    // displayTable(scooby);
    // displayTable(scrappy);
    // displayTable(lady);
    // displayTable(tramp);
    // displayTable(cali);
    displayTable();
    numberOfPets();
    searchPet();
    $("#register-btn").click(register);
    $("#petSearch").keypress(function(e){
        if(e.key === "Enter"){
            searchPet();
        }
    });
    $("#customerType").keypress(function(e){
        console.log(e.key);
        if(e.key === "Enter"){
            console.log("Add the pet.");
            register();
        }
    });
    $("#hairLength").hide();

    $("#petService").click(function(){
    if ($(this).val() === "Grooming" || $(this).val() === "Full Service"){
        $("#hairLength").show();
    }else{
        $("#hairLength").hide();
    }
});
    
}

// when the browser finishes creating DOM elements, call this function
// window.onload = init;
// $(document).ready(()=>initRegister());


















/*






Loops and functions for practice






*/





// Add the search option by type and service



// function displayTable(){
//     let aPet= salon.pets;
//     for(let i=0;i<salon.pets.length;i++){
//     let tbody=document.getElementById("petTable");
//     let row=`<tr>
//                 <td>${aPet[i].petName}</td>
//                 <td>${aPet[i].age}</td>
//                 <td>${aPet[i].breed}</td>
//                 <td>${aPet[i].type}</td>
//                 <td>${aPet[i].gender}</td>
//                 <td>${aPet[i].service}</td>
//                 <td>${aPet[i].ownerName}</td>
//                 <td>${aPet[i].contactPhone}</td>
//                 <td>${aPet[i].customerType}</td>
//             `;
    
//     tbody.innerHTML+=row;
   
// }}

// displayTable();

//for loop


// function numberOfPets(){

//     var pets = salon.pets;
//     const numberOfPets = document.querySelector("#pets-section-header");
//     let text="";
//     for(var i=0;i<pets.length;i++){
//     text=
//     `
//     <div class ="num-of-pets-wrap">
    

//     <img src="../img/dogcard.png">
//     <p class="dog-img" "id="Dog">${filterDog.length}</p>
//     </div>

//     <div class ="num-of-pets-wrap">
//     <img class="cat-img" src="../img/cat.png">
//     <p id="Cat">${filterCat.length}</p>
//     </div>

//     <div class ="num-of-pets-wrap">
//     <img class="bird-img" src="../img/bird.png">
//     <p id="Bird">${filterBird.length}</p>
//     </div>`;
//     }
//     numberOfPets.innerHTML= text;

// };
// numberOfPets();

// A loop to pull just pet names

// function petNames(){

// let namePet;
// for(var i=0; i<salon.pets.length; i++){
//     console.log(salon.pets[i].petName);
// }
//     return namePet;
// }
// let namePet = petNames();


// A loop to pull just owner names

// function ownerNames(){

//     let nameOwner="";
//     for(var i=0; i<salon.pets.length; i++){
//         nameOwner += salon.pets[i].ownerName;
//     }
//         return nameOwner;
//     }
//     let nameOwner = ownerNames();
//     console.log(nameOwner);

// A loop to pull the age of the pet


// function petAge(){

//     let agePet=0;
//     for(var i=0; i<salon.pets.length; i++){
//         agePet=salon.pets[i].age;
//         console.log(salon.pets[i].age);
//     }
//         return agePet;
// }
// let agePet = petAge();




// let typeOfPet = () => {
//     for(var i=0; i<salon.pets.length; i++)
//     if(pets[i].type === "Dog"){
//         let dogimg = document.getElementById("pets-section");
//         dogimg.style.backgroundImage="img/dogcard.png";
//       }else if(pets[i].type === "Cat"){
//           let catimg = document.getElementById("pets-section");
//           catimg.style.backgroundImage="img/cat.png";
//       }else{
//           let birdimg = document.getElementById("pets-section");
//           birdimg.style.backgroundImage="img/bird.png";
//       }
     
//     }


// oldest and youngest pet for practice

// function maxAge(){
//     let maxMinAgePet=0;
//     for(var i=0; i<salon.pets.length; i++){
//         maxMinAgePet=salon.pets[i].age;
//         console.log(maxMinAgePet);
//     }
//     return maxMinAgePet
// }
// let maxMinAgePet = maxAge();

// A loop to pull the pets breed

// function petBreed(){

//     let breedPet="";
//     for(var i=0; i<salon.pets.length; i++){
//         breedPet += salon.pets[i].breed;
//     }
//         return breedPet;
//     }
//     let breedPet = petBreed();
//     console.log(breedPet);

// // A loop to pull what type of animal it is

// function petType(){

//     let typePet="";
//     for(var i=0; i<salon.pets.length; i++){
//         typePet += salon.pets[i].type;
//     }
//         return typePet;
//     }
//     let typePet = petType();
//     console.log(typePet);

// // A loop to pull what service the animal is getting

// function petService(){

//     let servicePet="";
//     for(var i=0; i<salon.pets.length; i++){
//         servicePet += salon.pets[i].service;
//     }
//         return servicePet;
//     }
//     let servicePet = petService();
//     console.log(servicePet);

// // A loop to pull owners contact number

// function contactPhone(){

//     let phoneContact="";
//     for(var i=0; i<salon.pets.length; i++){
//         phoneContact += salon.pets[i].contactPhone;
//     }
//         return phoneContact;
//     }
//     let phoneContact = contactPhone();
//     console.log(phoneContact);