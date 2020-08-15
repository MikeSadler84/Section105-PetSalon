
//A function for displaying the pet information 

// function display(){

// var pets = salon.pets;
// const petSection = document.querySelector("#pets-section");
// let petimg;

// var text="";
// for(var i=0;i<pets.length;i++){
//     if(pets[i].type === "Dog"){
//         petimg = 'img/dogcard.png';
//       }else if(pets[i].type === "Cat"){  
//         petimg ='img/cat.png';
//       }else{ 
//         petimg ='img/bird.png';
//       }
//     text += 
//         `<div class="pet-info">
//             <h2> ${pets[i].petName} </h2>
//             <img src="${petimg}">
//             <p> Age: ${pets[i].age} </p>
//             <p> Breed: ${pets[i].breed} </p>
//             <p> Type: ${pets[i].type} </p>
//             <p> Gender: ${pets[i].gender} </p>
//             <p> Service: ${pets[i].service} </p>
//             <p> Owner: ${pets[i].ownerName} </p>
//             <p> Contact: ${pets[i].contactPhone} </p>
//             <p> Status: ${pets[i].customerType} </p>
//         </div>`;
// }

// petSection.innerHTML= text;
// };

// display();



// function numberOfPets(){
//   const numEachPet = salon.pets;
  
//   //Cat
//   const filterCat = numEachPet.filter(function(numEachCat) {
//     return numEachCat.type === "Cat";
//   });
//   //Dog
//   const filterDog = numEachPet.filter(function(numEachDog) {
//   return numEachDog.type === "Dog";
//   });
//   //Bird
//   const filterBird = numEachPet.filter(function(numEachBird) {
//   return numEachBird.type === "Bird";
//   });
//   var pets = salon.pets;
//   const numberOfPets = document.querySelector("#pets-section-header");
//   let text="";
//   for(var i=0;i<pets.length;i++){
//   text=
//   `
//   <div id = "#pets-section-header">
//   <p>Pets in queue: ${pets.length}</p>
//   </div>
//   <div class ="num-of-pets-wrap">
//   <img src="../img/dogcard.png">
//   <p>${filterDog.length}</p>
//   </div>
//   <div class ="num-of-pets-wrap">
//   <img class="cat-img" src="../img/cat.png">
//   <p>${filterCat.length}</p>
//   </div>
//   <div class ="num-of-pets-wrap">
//   <img class="bird-img" src="../img/bird.png">
//   <p>${filterBird.length}</p>
//   </div>
//   `;
//   }
//   numberOfPets.innerHTML= text;

// };
// numberOfPets();
