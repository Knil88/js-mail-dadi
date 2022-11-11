//Esercizio  Mail

// Chiediamo la mail all'utente 
 let yourMail ;
 console.log(yourMail);

 // variabile ospite dato falso finche non viene verificato

 let guest = false;

 // Variabili bottoni

 let btn = document.getElementById("generate");
   let btnReset = document.getElementById("reset");
   let btnSign = document.getElementById("sign");

// Creiamo la nostra Lista di Mail 

let mailList = ["pinco@gmail.com","pallo@gmail.com","tizio@gmail.com","caio@gmail.com"];

// creiamo l'evento click

btn.addEventListener("click",
function(event){
   event.preventDefault()
    yourMail = document.getElementById ("inputmail").value;

   // Creiamo il ciclo

   for(let i = 0 ; i < mailList.length; i++){

      // creaimo la condizione se yourmail rintra tra le presenti in mailList

      if(yourMail == mailList[i]){
         document.getElementById("title").innerHTML = `Grazie per avere effettuato l'accesso `
         console.log("Benvenuto")
         guest = true;
      }

      // creaimo la condizione se guest rimane falso dopo essere verificato chiediamo se vuole registrarsi


       else if(guest == false){
         document.getElementById("title").innerHTML = `Ci dispiace ma la sua mail non è presente tra quelle registrate vuole registrarsi?`
         // Quando appare questa condizione id sign cambia display per apparire in pagina
         btnSign = document.querySelector("#sign") ;
         btnSign.style.display="inline-block";
         // Mentre id generate diventa display none per scomparire in pagina
         btn = document.querySelector("#generate") ;
         btn.style.display="none";
         console.log("spiacente")
      }
 }
}

)

// creiamo l'evento pulsante reset

btnReset.addEventListener("click",
function (event){
    
   document.getElementById("title").reset();
   
   

}
)
btnSign.addEventListener("click",
function(event){
   event.preventDefault()
   mailList.push(yourMail);
   document.getElementById("title").innerHTML = `Complimenti ora sei registrato all'evento`;
   
}
)





// Creiamo un ciclo





    
