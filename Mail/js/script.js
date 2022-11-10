//Esercizio  Mail

// Chiediamo la mail all'utente 
 let yourMail = prompt("Salve , insersci la tua mail");
 console.log(yourMail);
 let guest = false;

// Creiamo la nostra Lista di Mail 

let mailList = ["pinco@gmail.com","pallo@gmail.com","tizio@gmail.com","caio@gmail.com"];

for(let i = 0 ; i < mailList.length; i++){
     if(yourMail == mailList[i]){
        document.getElementById("title").innerHTML = `Benvenuto`
        console.log("Benvenuto")
        guest = true;
     }
      else if(guest == false){
        document.getElementById("title").innerHTML = `spiacente`
        console.log("spiacente")
     }
}



// Creiamo un ciclo





    
