// Gioco  dadi 

//Creiamo variabili

let userdice = Math.floor(Math.random()* 5) + 1;

let pcdice = Math.floor(Math.random()* 5) + 1;

const myButton = document.addEventListener("click",
function (event){
   
    if(userdice > pcdice){
        console.log("Complimenti hai vinto")
        document.getElementById("title").innerHTML = `Complimenti hai vinto`;
   }
   if(userdice < pcdice){
       console.log("Hai perso")
       document.getElementById("title").innerHTML = `Spiacente hai perso`;
   }
   else if(userdice === pcdice){
   
       console.log("pareggio")
       document.getElementById("title").innerHTML = `Pareggio`;
   
   }
}
)



console.log(userdice,pcdice);

