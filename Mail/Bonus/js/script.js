//Esercizio  Mail

// Chiediamo la mail all'utente 
 let yourMail ;
 console.log(yourMail);
 let guest = false;

 // Variabili bottoni

 let btn = document.getElementById("generate");
let btnReset = document.getElementById("reset");

// Creiamo la nostra Lista di Mail 

let mailList = ["pinco@gmail.com","pallo@gmail.com","tizio@gmail.com","caio@gmail.com"];


btn.addEventListener("click",
function(event){
   event.preventDefault()
   let name = document.getElementById ("inputmail").value;

   

   for(let i = 0 ; i < mailList.length; i++){
      if(yourMail == mailList[i]){
         document.getElementById("title").innerHTML = `Grazie per avere effettuato l'accesso `
         console.log("Benvenuto")
         guest = true;
      }
       else if(guest == false){
         document.getElementById("title").innerHTML = `Ci dispiace ma lua sua mail non è presente tra quelle registrate`
         console.log("spiacente")
      }
 }
}

)

btnReset.addEventListener("click",
function (event){
    
   document.getElementById("title").reset();
   
   

}
)





// Creiamo un ciclo





    
