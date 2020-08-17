

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




/*






Loops and functions for practice






*/




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